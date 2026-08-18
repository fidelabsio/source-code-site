import LegalDocPage from "./legal/LegalDocPage";
import { privacyPolicySections } from "@/lib/privacyPolicyData";

export default function PrivacyPage() {
  return (
    <LegalDocPage
      badgeLabel="PRIVACY POLICY"
      titleLead="Privacy"
      titleHighlight="Policy"
      subtitle={`How FIDE LAB (OPC) PRIVATE LIMITED ("FIDE Labs", "we", "us", "our") collects and uses personal data when you visit our website, purchase a source code licence, receive a delivery, contact support, or renew.`}
      version="1.0"
      effectiveDate="Pending"
      lastUpdated="Pending"
      sections={privacyPolicySections}
      ctaHeading="Questions About This Policy?"
      ctaBody="Need clarification about this policy or how it applies to your use of FIDE Labs? Write to us and we'll help."
      ctaHref="mailto:support@fidelabs.io"
      ctaLabel="Email support@fidelabs.io"
    />
  );
}
