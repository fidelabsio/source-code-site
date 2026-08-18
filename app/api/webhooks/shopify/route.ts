import { createHmac, timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { issueLicenseForOrder } from "@/lib/license";
import { sendLicenseEmail } from "@/lib/email";

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

  if (!verifyHmac(rawBody, hmacHeader)) {
    return NextResponse.json({ error: "Invalid webhook signature." }, { status: 401 });
  }

  if (topic !== "orders/paid") {
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

  const license = await issueLicenseForOrder(paidOrder);

  const customerName =
    [paidOrder.customer.firstName, paidOrder.customer.lastName].filter(Boolean).join(" ") || customerEmail;
  const purchaseDate = formatDate(license.createdAt);
  const expiresAt = license.expiresAt ?? new Date(license.createdAt.getTime() + 365 * 24 * 60 * 60 * 1000);

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
  } catch (error) {
    console.error("[order paid] license issued but email failed to send", paidOrder.orderGid, error);
  }

  return NextResponse.json({ received: true });
}
