const STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const API_VERSION = process.env.SHOPIFY_ADMIN_API_VERSION || "2024-10";
const ADMIN_TOKEN = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;

type AdminResponse<T> = {
  data?: T;
  errors?: unknown;
};

export async function adminFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!STORE_DOMAIN || !ADMIN_TOKEN) {
    throw new Error("Shopify Admin API is not configured. Set SHOPIFY_STORE_DOMAIN and SHOPIFY_ADMIN_ACCESS_TOKEN.");
  }

  const res = await fetch(`https://${STORE_DOMAIN}/admin/api/${API_VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": ADMIN_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  const json = (await res.json()) as AdminResponse<T>;

  if (!res.ok || json.errors) {
    throw new Error(`Shopify Admin API error: ${res.status} ${JSON.stringify(json.errors) || res.statusText}`);
  }

  if (!json.data) {
    throw new Error("Shopify Admin API returned no data.");
  }

  return json.data;
}

const ORDER_BY_ID_QUERY = /* GraphQL */ `
  query OrderById($id: ID!) {
    order(id: $id) {
      id
      name
      email
      tags
    }
  }
`;

type OrderByIdData = {
  order: { id: string; name: string; email: string | null; tags: string[] } | null;
};

export async function getOrderById(orderGid: string) {
  const data = await adminFetch<OrderByIdData>(ORDER_BY_ID_QUERY, { id: orderGid });
  return data.order;
}

const ORDER_TAGS_ADD_MUTATION = /* GraphQL */ `
  mutation TagsAdd($id: ID!, $tags: [String!]!) {
    tagsAdd(id: $id, tags: $tags) {
      userErrors {
        field
        message
      }
    }
  }
`;

type TagsAddData = {
  tagsAdd: { userErrors: { field: string[]; message: string }[] };
};

export async function tagOrder(orderGid: string, tags: string[]) {
  const data = await adminFetch<TagsAddData>(ORDER_TAGS_ADD_MUTATION, { id: orderGid, tags });
  if (data.tagsAdd.userErrors.length) {
    throw new Error(`Shopify tagsAdd error: ${data.tagsAdd.userErrors.map((e) => e.message).join("; ")}`);
  }
}

export function orderGidFromRestId(orderId: number | string) {
  return `gid://shopify/Order/${orderId}`;
}
