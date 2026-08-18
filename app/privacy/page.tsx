import type { Metadata } from "next";
import PrivacyPage from "@/components/pages/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How FIDE LAB (OPC) PRIVATE LIMITED collects, uses, shares, and protects personal data across its websites, sales process, and source-code licensing.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy", title: "Privacy Policy — Fide Labs" },
};

export default function Page() {
  return <PrivacyPage />;
}
