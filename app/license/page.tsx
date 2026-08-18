import type { Metadata } from "next";
import LicensePage from "@/components/pages/LicensePage";

export const metadata: Metadata = {
  title: "License",
  description:
    "The commercial white-label license granted on purchase — perpetual, worldwide use of the FIDE source code, what's included, and what's excluded.",
  alternates: { canonical: "/license" },
  openGraph: { url: "/license", title: "License — Fide Labs" },
};

export default function Page() {
  return <LicensePage />;
}
