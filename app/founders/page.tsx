import type { Metadata } from "next";
import FoundersPage from "@/components/pages/FoundersPage";

export const metadata: Metadata = {
  title: "Founders",
  description:
    "Launch your own branded Shopify app without building from scratch — a purchase-to-launch guide, App Store checklist, and prerequisites for founders.",
  alternates: { canonical: "/founders" },
  openGraph: { url: "/founders", title: "Founders — Fide Labs" },
};

export default function Page() {
  return <FoundersPage />;
}
