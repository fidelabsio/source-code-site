import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Fide Labs — One Codebase for Your Brand and Every Client Brand" },
  description:
    "Launch your own Shopify app or deliver white-label solutions from one production-ready codebase — hide pricing, quote requests, a quote dashboard, draft orders, and email notifications, with full docs and a commercial license.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Fide Labs — One Codebase for Your Brand and Every Client Brand",
    description:
      "Launch your own Shopify app or deliver white-label solutions from one production-ready codebase — hide pricing, quote requests, a quote dashboard, draft orders, and email notifications, with full docs and a commercial license.",
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "FIDE Shopify Source Code — Commercial License",
  description:
    "Complete production-ready Shopify app source code with a perpetual commercial license — full source, documentation, and white-label rebranding rights.",
  brand: { "@type": "Brand", name: "Fide Labs" },
  offers: {
    "@type": "Offer",
    url: "https://fidecode.com/checkout",
    priceCurrency: "USD",
    price: "599",
    availability: "https://schema.org/InStock",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={productJsonLd} />
      <HomePage />
    </>
  );
}
