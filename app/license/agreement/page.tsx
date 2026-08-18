import type { Metadata } from "next";
import LicenseAgreementPage from "@/components/pages/LicenseAgreementPage";

export const metadata: Metadata = {
  title: "Commercial License Agreement",
  description:
    "The full legal text of the FIDE Labs commercial license agreement for the white-label Shopify source code product.",
  alternates: { canonical: "/license/agreement" },
  openGraph: { url: "/license/agreement", title: "Commercial License Agreement — Fide Labs" },
};

export default function Page() {
  return <LicenseAgreementPage />;
}
