import { prisma } from "@/lib/prima";
import { tagOrder } from "@/lib/shopifyAdmin";

export type PaidOrderInput = {
  orderId: number;
  orderGid: string;
  orderName: string;
  totalPrice?: string | null;
  currency?: string | null;
  isRenewal?: boolean;
  customer: {
    id?: number | null;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    phone?: string | null;
  };
};

export async function issueLicenseForOrder(order: PaidOrderInput) {
  // orders/paid can redeliver on Shopify's retry policy — upsert on the
  // unique order_gid so a redelivery returns the already-issued license
  // instead of generating a second one.
  const license = await prisma.license.upsert({
    where: { orderGid: order.orderGid },
    update: {},
    create: {
      orderId: BigInt(order.orderId),
      orderGid: order.orderGid,
      orderName: order.orderName,
      totalPrice: order.totalPrice ?? undefined,
      currency: order.currency ?? undefined,
      isRenewal: order.isRenewal ?? false,
      customerId: order.customer.id != null ? BigInt(order.customer.id) : undefined,
      customerEmail: order.customer.email,
      customerFirstName: order.customer.firstName ?? undefined,
      customerLastName: order.customer.lastName ?? undefined,
      customerPhone: order.customer.phone ?? undefined,
    },
    select: { licenseKey: true },
  });

  await tagOrder(order.orderGid, [`license:${license.licenseKey}`]);
  return license.licenseKey;
}
