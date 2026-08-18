import type { Metadata } from "next";
import SupportPage from "@/components/pages/SupportPage";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with installation, white-label branding, the quote builder, dashboard, deployment, and troubleshooting for the FIDE Shopify source code.",
  alternates: { canonical: "/support" },
  openGraph: { url: "/support", title: "Support — Fide Labs" },
};

export default function Page() {
  return <SupportPage />;
}
