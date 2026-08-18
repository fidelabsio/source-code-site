# Fide Labs — Headless Theme

Next.js (App Router) marketing site for Fide Labs, matching the visual design and interactivity of `../shopify-theme` — no Liquid — with a live Shopify checkout integration.

## Structure

- `app/**/page.tsx` — one route per page (about, checkout, contact, documentation, founders, license, offline, privacy, security, support, terms, thank-you, white-label-showcase, faq). `app/not-found.tsx` covers 404, `app/layout.tsx` renders the branded loading screen, header, and footer on every page.
- `app/checkout/page.tsx` — a Server Component with no UI of its own: it creates a Shopify Storefront API cart and immediately redirects to Shopify's own hosted checkout (`?renewal=true` adds the renewal line item). Name/email/address are collected by Shopify, not by this site.
- `app/api/webhooks/shopify/route.ts` — verifies the `orders/paid` webhook signature, then logs the paying customer's name and email. License issuance/emailing isn't wired up yet (see `lib/license.ts`, `lib/shopifyAdmin.ts`, `lib/email.ts` — built but not currently called from the route).
- `components/pages/*.tsx` — one top-level component per route (e.g. `HomePage.tsx`), composed from section components under `components/pages/home/`, `components/pages/contact/`, etc.
- `components/ui/*.tsx` — small shared building blocks (`SectionEyebrow`, `GradientHeading`, `StatTile`, `Marquee`, …) reused across pages.
- `hooks/*.ts` — the site's interactive behavior as plain React hooks: `useMobileMenu`, `useFlipOnHover` (hover-to-flip feature cards), `useTimelineAnimation` (scroll-triggered step reveals), `useBrandSwitcher` (live rebrand demo), `useTabSwitcher` (white-label showcase tabs), `usePurchaseRenewalToggle` (checkout/pricing toggle), `useScrollSpy`, `useTechDetailsToggle`, `useFaqSearch`.
- `lib/*.ts` — static content data (`faqData.ts`, `termsData.ts`, `privacyPolicyData.ts`), the `richText` helper, the Supabase client (`supabase.ts`), and the Shopify integration: `shopify.ts` (Storefront API / cart), `shopifyAdmin.ts` (Admin API), `checkout.ts` (builds the cart for `/checkout`), `license.ts` (license key generation + order tagging), `email.ts` (Resend).
- `public/assets/` — images, videos, fonts, `site.js`, and `site.css`, matching `../shopify-theme/assets`.

## Commands

```
npm install
npm run dev     # http://localhost:3000
npm run build
npm run start
```

## Shopify checkout integration

Copy `.env.example` to `.env.local` and fill in:

- `SHOPIFY_STORE_DOMAIN`, `SHOPIFY_STOREFRONT_PUBLIC_TOKEN`, `SHOPIFY_STOREFRONT_PRIVATE_TOKEN` — Storefront API, used by `/checkout` to create the cart. Both tokens are required together: the public token goes in `X-Shopify-Storefront-Access-Token`, the private token in `Authorization: Bearer` — that's how Shopify's Storefront API expects private/delegate access to be authenticated.
- `SHOPIFY_ADMIN_ACCESS_TOKEN` — Admin API, used to tag the paid order with the issued license key.
- `SOURCE_CODE_VAIRANT_ID` (and `RENEWAL_VARIANT_ID` if you sell the update/support renewal as a separate line item) — the product variant(s) added to the cart.
- `SHOPIFY_WEBHOOK_SECRET` — register a webhook for topic `orders/paid` pointing at `https://<your-domain>/api/webhooks/shopify`, then paste its signing secret here.

### Local dev tunnel (fixed URL)

Shopify webhooks need a stable public HTTPS URL, so local dev is exposed through a named Cloudflare Tunnel instead of a random `trycloudflare.com` URL that changes every run:

```
npm run dev                                   # localhost:3000
cloudflared tunnel --config cloudflared.yml run   # https://dev.request-quote.online
```

`cloudflared.yml` reuses the existing `shopify-dev` named tunnel (credentials at `~/.cloudflared/9f4036c8-fc72-499a-9182-33d5d5c008a5.json`) and routes `dev.request-quote.online` → `localhost:3000`. That same tunnel/hostname is also used by the `merchant-full-stack` project — only run one of them at a time, since a single named tunnel can only forward to one local service.

Register the webhook in Shopify (Admin API or Settings → Notifications → Webhooks) with topic `orders/paid` pointing at `https://dev.request-quote.online/api/webhooks/shopify`.

`/checkout` has no UI of its own — it's a plain redirect straight to Shopify's hosted checkout, which collects the customer's name/email/address itself.

## Notes

- The pricing shown on the homepage's pricing section uses a flat 20% tax estimate on the selected subtotal (matching the original design) — it does not vary by billing country; final tax is calculated by Shopify at the hosted checkout step.
- `npm audit` flags high-severity issues in `postcss`/`sharp`, transitive deps of the pinned Next 15 release. Fixing requires upgrading to Next 16 (breaking change) — left alone here since it's out of scope for a design port.
