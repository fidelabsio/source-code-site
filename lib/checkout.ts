import { createCart, variantGid, type CartLine } from "@/lib/shopify";

const SOURCE_CODE_VARIANT_ID = process.env.SOURCE_CODE_VAIRANT_ID;
const RENEWAL_VARIANT_ID = process.env.RENEWAL_VARIANT_ID;

export async function createSourceCodeCheckoutUrl(renewal: boolean) {
  if (!SOURCE_CODE_VARIANT_ID) {
    throw new Error("SOURCE_CODE_VAIRANT_ID is not configured.");
  }

  const lines: CartLine[] = [{ merchandiseId: variantGid(SOURCE_CODE_VARIANT_ID), quantity: 1 }];
  if (renewal && RENEWAL_VARIANT_ID) {
    lines.push({ merchandiseId: variantGid(RENEWAL_VARIANT_ID), quantity: 1 });
  }

  const cart = await createCart(lines);
  return cart.checkoutUrl;
}
