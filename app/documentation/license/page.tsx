import type { Metadata } from "next";
import DocLicensePage from "@/components/pages/documentation/DocLicensePage";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "License",
  description:
    "A quick-reference summary of the FIDE Labs Commercial License — what's included, permitted, and restricted, plus updates and support.",
  alternates: { canonical: "/documentation/license" },
  openGraph: { url: "/documentation/license", title: "License — Fide Labs" },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Documentation", path: "/documentation" },
          { name: "License", path: "/documentation/license" },
        ]}
      />
      <DocLicensePage />
    </>
  );
}
