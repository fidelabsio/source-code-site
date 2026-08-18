import type { Metadata } from "next";
import WhiteLabelShowcasePage from "@/components/pages/WhiteLabelShowcasePage";

export const metadata: Metadata = {
  title: "White-Label Showcase",
  description:
    "See one production-ready Shopify application rebranded into multiple client brands purely through branding configuration — no code changes required.",
  alternates: { canonical: "/white-label-showcase" },
  openGraph: { url: "/white-label-showcase", title: "White-Label Showcase — Fide Labs" },
};

export default function Page() {
  return <WhiteLabelShowcasePage />;
}
