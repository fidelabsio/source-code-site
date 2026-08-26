import type { Metadata } from "next";
import TroubleshootingPage from "@/components/pages/documentation/TroubleshootingPage";

export const metadata: Metadata = {
  title: "Troubleshooting Guide",
  description:
    "Diagnostic and resolution procedures for issues commonly encountered when installing, configuring, and validating the FIDE source code.",
  alternates: { canonical: "/documentation/troubleshooting" },
  openGraph: { url: "/documentation/troubleshooting", title: "Troubleshooting Guide — Fide Labs" },
};

export default function Page() {
  return <TroubleshootingPage />;
}
