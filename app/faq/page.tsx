import type { Metadata } from "next";
import FaqPage from "@/components/FaqPage";
import { faqCategories } from "@/lib/faqData";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers on licensing, deployment, customization, updates, support, and refunds for the FIDE Source Code Product.",
  alternates: { canonical: "/faq" },
  openGraph: { url: "/faq", title: "FAQ — Fide Labs" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.replace(/\*\*/g, ""),
      },
    }))
  ),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqPage />
    </>
  );
}
