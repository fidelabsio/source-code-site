const STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const API_VERSION = process.env.SHOPIFY_STOREFRONT_API_VERSION || "2024-10";
const PUBLIC_TOKEN = process.env.SHOPIFY_STOREFRONT_PUBLIC_TOKEN;
const PRIVATE_TOKEN = process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN;

type StorefrontResponse<T> = {
  data?: T;
  errors?: { message: string }[];
};

export async function storefrontFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!STORE_DOMAIN || !PUBLIC_TOKEN || !PRIVATE_TOKEN) {
    throw new Error(
      "Shopify Storefront API is not configured. Set SHOPIFY_STORE_DOMAIN, SHOPIFY_STOREFRONT_PUBLIC_TOKEN, and SHOPIFY_STOREFRONT_PRIVATE_TOKEN."
    );
  }

  const res = await fetch(`https://${STORE_DOMAIN}/api/${API_VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": PUBLIC_TOKEN,
      Authorization: `Bearer ${PRIVATE_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  const json = (await res.json()) as StorefrontResponse<T>;

  if (!res.ok || json.errors?.length) {
    const message = json.errors?.map((e) => e.message).join("; ") || res.statusText;
    throw new Error(`Shopify Storefront API error: ${message}`);
  }

  if (!json.data) {
    throw new Error("Shopify Storefront API returned no data.");
  }

  return json.data;
}

const CART_CREATE_MUTATION = /* GraphQL */ `
  mutation CartCreate($lines: [CartLineInput!]!, $email: String, $attributes: [AttributeInput!]) {
    cartCreate(
      input: { lines: $lines, buyerIdentity: { email: $email }, attributes: $attributes }
    ) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

type CartCreateData = {
  cartCreate: {
    cart: { id: string; checkoutUrl: string } | null;
    userErrors: { field: string[]; message: string }[];
  };
};

export type CartLine = {
  merchandiseId: string;
  quantity: number;
};

export async function createCart(lines: CartLine[], email?: string, attributes?: { key: string; value: string }[]) {
  const data = await storefrontFetch<CartCreateData>(CART_CREATE_MUTATION, {
    lines,
    email: email || null,
    attributes: attributes || [],
  });

  if (data.cartCreate.userErrors.length) {
    throw new Error(`Shopify cart error: ${data.cartCreate.userErrors.map((e) => e.message).join("; ")}`);
  }

  if (!data.cartCreate.cart) {
    throw new Error("Shopify cart creation returned no cart.");
  }

  return data.cartCreate.cart;
}

export function variantGid(variantId: string) {
  return variantId.startsWith("gid://") ? variantId : `gid://shopify/ProductVariant/${variantId}`;
}
