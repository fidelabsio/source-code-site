import type { Metadata } from "next";
import QuickStartChecklistPage from "@/components/pages/documentation/QuickStartChecklistPage";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Quick Start Checklist",
  description:
    "A tick-box execution list for buyers of the FIDE source code — from licence check through installation, deployment, and compliance close-out.",
  alternates: { canonical: "/documentation/quick-start-checklist" },
  openGraph: { url: "/documentation/quick-start-checklist", title: "Quick Start Checklist — Fide Labs" },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Documentation", path: "/documentation" },
          { name: "Quick Start Checklist", path: "/documentation/quick-start-checklist" },
        ]}
      />
      <QuickStartChecklistPage />
    </>
  );
}
