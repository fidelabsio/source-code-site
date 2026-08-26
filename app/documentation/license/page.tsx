import type { Metadata } from "next";
import DocLicensePage from "@/components/pages/documentation/DocLicensePage";

export const metadata: Metadata = {
  title: "License",
  description:
    "A quick-reference summary of the FIDE Labs Commercial License — what's included, permitted, and restricted, plus updates and support.",
  alternates: { canonical: "/documentation/license" },
  openGraph: { url: "/documentation/license", title: "License — Fide Labs" },
};

export default function Page() {
  return <DocLicensePage />;
}
