import LegalDocPage from "./legal/LegalDocPage";
import { termsSections } from "@/lib/termsData";

export default function TermsPage() {
  return (
    <LegalDocPage
      badgeLabel="TERMS & CONDITIONS"
      titleLead="The terms governing"
      titleHighlight="your purchase"
      subtitle="These Terms of Service govern your access to and use of the FIDE Labs website and your purchase of a licence to the Request a Quote & Hide Price source code product. Read them, and the Licence, before you buy."
      version="1.0"
      effectiveDate="Pending"
      lastUpdated="Pending"
      sections={termsSections}
      ctaHeading="Questions About These Terms?"
      ctaBody="Need clarification about these Terms or how they apply to your purchase? Our team is happy to help."
      ctaHref="/contact#contact-form"
      ctaLabel="Contact Support"
    />
  );
}
