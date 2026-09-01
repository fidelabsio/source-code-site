import type { Metadata } from "next";
import DocumentationPage from "@/components/pages/DocumentationPage";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Guides for installing, configuring, rebranding, and shipping the FIDE source code — onboarding, getting started, API reference, and technical guides.",
  alternates: { canonical: "/documentation" },
  openGraph: { url: "/documentation", title: "Documentation — Fide Labs" },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Documentation", path: "/documentation" }]} />
      <DocumentationPage />
    </>
  );
}
