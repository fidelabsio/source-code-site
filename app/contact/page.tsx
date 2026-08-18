import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach FIDE Labs for licensing, deployment, technical support, or product enquiries about the white-label Shopify source code. Typical reply: 1 business day.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact — Fide Labs" },
};

export default function Page() {
  return <ContactPage />;
}
