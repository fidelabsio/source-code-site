import { createHmac, timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { issueLicenseForOrder } from "@/lib/license";
import { sendLicenseEmail } from "@/lib/email";
import { prisma } from "@/lib/prima";

const WEBHOOK_SECRET = process.env.SHOPIFY_WEBHOOK_SECRET;
const RENEWAL_VARIANT_ID = process.env.RENEWAL_VARIANT_ID;

function isRenewalOrder(order: { line_items?: { variant_id?: number }[] }) {
  if (!RENEWAL_VARIANT_ID) return false;
  return (order.line_items ?? []).some((item) => String(item.variant_id) === String(RENEWAL_VARIANT_ID));
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "long", year: "numeric" }).format(date);
}

function verifyHmac(rawBody: string, hmacHeader: string | null) {
  if (!WEBHOOK_SECRET || !hmacHeader) {
    console.log("[webhook debug] missing secret or header", { hasSecret: !!WEBHOOK_SECRET, hasHeader: !!hmacHeader });
    return false;
  }

  const digest = createHmac("sha256", WEBHOOK_SECRET).update(rawBody, "utf8").digest();
  const provided = Buffer.from(hmacHeader, "base64");

  const match = digest.length === provided.length && timingSafeEqual(digest, provided);
  return match;
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const hmacHeader = request.headers.get("x-shopify-hmac-sha256");
  const topic = request.headers.get("x-shopify-topic");
  const webhookId = request.headers.get("x-shopify-webhook-id");

  console.log("[webhook] received", { topic, webhookId });

  if (!verifyHmac(rawBody, hmacHeader)) {
    console.error("[webhook] signature verification failed", { topic, webhookId });
    return NextResponse.json({ error: "Invalid webhook signature." }, { status: 401 });
  }
  console.log("[webhook] signature verified", { topic, webhookId });

  if (topic !== "orders/paid") {
    console.log("[webhook] ignoring topic", { topic, webhookId });
    return NextResponse.json({ received: true });
  }

  const order = JSON.parse(rawBody);

  const customerEmail = (order.customer?.email || order.email) as string | undefined;
  if (!customerEmail) {
    console.error("[order paid] no customer email on order", order.admin_graphql_api_id);
    return NextResponse.json({ received: true });
  }

  const paidOrder = {
    orderId: order.id as number,
    orderGid: order.admin_graphql_api_id as string,
    orderName: order.name as string,
    totalPrice: order.total_price as string | null,
    currency: order.currency as string | null,
    isRenewal: isRenewalOrder(order),
    customer: {
      id: order.customer?.id as number | null,
      email: customerEmail,
      firstName: order.customer?.first_name as string | null,
      lastName: order.customer?.last_name as string | null,
      phone: (order.customer?.phone || order.billing_address?.phone) as string | null,
    },
  };

  console.log("[order paid] processing order", {
    orderGid: paidOrder.orderGid,
    orderName: paidOrder.orderName,
    isRenewal: paidOrder.isRenewal,
    customerEmail,
  });

  let license;
  try {
    license = await issueLicenseForOrder(paidOrder);
    console.log("[order paid] license issued", {
      orderGid: paidOrder.orderGid,
      licenseKey: license.licenseKey,
    });
  } catch (error) {
    console.error("[order paid] failed to issue license", paidOrder.orderGid, error);
    return NextResponse.json({ error: "Failed to issue license." }, { status: 500 });
  }

  const customerName =
    [paidOrder.customer.firstName, paidOrder.customer.lastName].filter(Boolean).join(" ") || customerEmail;
  const purchaseDate = formatDate(license.createdAt);
  const expiresAt = license.expiresAt ?? new Date(license.createdAt.getTime() + 365 * 24 * 60 * 60 * 1000);

  // orders/paid can redeliver — claim the send atomically so a redelivery
  // (or a race between two concurrent deliveries) can't send the email twice.
  const claimed = await prisma.license.updateMany({
    where: { orderGid: paidOrder.orderGid, emailSentAt: null },
    data: { emailSentAt: new Date() },
  });

  if (claimed.count === 0) {
    console.log("[order paid] license email already sent, skipping", { orderGid: paidOrder.orderGid });
  } else {
    try {
      await sendLicenseEmail({
        to: customerEmail,
        customerName,
        licenseType: paidOrder.isRenewal ? "License Renewal" : "Commercial License",
        licenseId: license.licenseKey,
        orderNumber: paidOrder.orderName,
        purchaseDate,
        licenseActivatedDate: purchaseDate,
        supportValidUntil: formatDate(expiresAt),
        // TODO: no real signed/expiring download link exists yet — points at the
        // support page as an interim destination until deliverable hosting is built.
        downloadUrl: "https://fidelabs.io/support",
      });
      console.log("[order paid] license email sent", { orderGid: paidOrder.orderGid, to: customerEmail });
    } catch (error) {
      console.error("[order paid] license issued but email failed to send", paidOrder.orderGid, error);
      // release the claim so the next redelivery retries the send
      await prisma.license.updateMany({
        where: { orderGid: paidOrder.orderGid },
        data: { emailSentAt: null },
      });
      // non-2xx so Shopify redelivers orders/paid and retries the email —
      // otherwise the license is issued with no email ever sent to the buyer
      return NextResponse.json({ error: "Failed to send license email." }, { status: 500 });
    }
  }

  console.log("[webhook] done", { topic, webhookId, orderGid: paidOrder.orderGid });
  return NextResponse.json({ received: true });
}
