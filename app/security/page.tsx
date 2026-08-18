import type { Metadata } from "next";
import SecurityPage from "@/components/pages/SecurityPage";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How the FIDE source code handles data privacy, secure hosting, webhook verification, dependency monitoring, and GDPR-aware compliance practices.",
  alternates: { canonical: "/security" },
  openGraph: { url: "/security", title: "Security — Fide Labs" },
};

export default function Page() {
  return <SecurityPage />;
}
