import { createHmac, timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_SECRET = process.env.SHOPIFY_WEBHOOK_SECRET;

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

  const paidOrder = {
    orderId: order.id as number,
    orderGid: order.admin_graphql_api_id as string,
    orderName: order.name as string,
    orderNumber: order.order_number as number,
    createdAt: order.created_at as string,
    processedAt: order.processed_at as string,
    totalPrice: order.total_price as string,
    subtotalPrice: order.subtotal_price as string,
    currency: order.currency as string,
    customer: {
      id: order.customer?.id as number,
      email: order.customer?.email as string,
      firstName: order.customer?.first_name as string,
      lastName: order.customer?.last_name as string,
      phone: (order.customer?.phone || order.billing_address?.phone) as string,
    }
  };

  console.log("[order paid]", paidOrder);

  return NextResponse.json({ received: true });
}
