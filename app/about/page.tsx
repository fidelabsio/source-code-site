import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why FIDE Labs builds production-ready, white-label Shopify source code — what's included, who it's for, and the principles behind the product.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About — Fide Labs" },
};

export default function Page() {
  return <AboutPage />;
}
