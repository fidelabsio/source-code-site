import type { Metadata } from "next";
import TermsPage from "@/components/pages/TermsPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing use of the FIDE Labs website and every source-code purchase, including website usage, purchase terms, and intellectual property.",
  alternates: { canonical: "/terms" },
  openGraph: { url: "/terms", title: "Terms of Service — Fide Labs" },
};

export default function Page() {
  return <TermsPage />;
}
