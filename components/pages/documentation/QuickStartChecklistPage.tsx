"use client";

import DocPageShell from "./DocPageShell";
import Callout from "./Callout";
import DocChecklist from "./DocChecklist";

const TOC_LINKS = [
  { href: "#before-you-start", label: "Before you start" },
  { href: "#get-the-package", label: "Get the package" },
  { href: "#local-installation", label: "Local installation" },
  { href: "#shopify-partner-setup", label: "Shopify Partner setup" },
  { href: "#database-setup", label: "Database setup" },
  { href: "#deployment", label: "Deployment" },
  { href: "#compliance-close-out", label: "Compliance close-out" },
];

const BEFORE_YOU_START = [
  "License ID received and recorded",
  "Purchase email confirmed",
  "Node.js 20.19–21 or 22.12+ installed (node -v)",
  "Shopify Partner account and a development store created",
];

const GET_THE_PACKAGE = [
  "Source code package downloaded from the secure link in your delivery email",
  "Package unpacked to a folder you'll remember",
  "The original release zip archived somewhere safe for future upgrades",
];

const LOCAL_INSTALLATION = [
  "Dependencies installed (npm install)",
  ".env created from .env.example and filled in",
  "Database migrated (npm run setup)",
  "Dev server running (npm run dev) with no startup errors",
  "npm run lint and npm run typecheck both pass on the untouched checkout",
];

const SHOPIFY_PARTNER_SETUP = [
  "Codebase linked to your Partner app (npm run config:link)",
  ".env's SHOPIFY_API_KEY / SHOPIFY_API_SECRET / SCOPES match the Partner app",
  "App installs on your dev store and prompts for the expected scopes",
  "The storefront block appears in the Theme Editor's app block picker after npm run deploy",
  "A test quote submitted from the storefront reaches the app",
];

const DATABASE_SETUP = [
  "Hosted PostgreSQL database created",
  "Connection string set as DATABASE_URL",
  "npm run setup completes with no errors",
  "Session and Quote tables visible via Prisma Studio or your database console",
];

const DEPLOYMENT = [
  "App installs successfully on a real store pointed at the target environment",
  "Embedded admin loads without redirect loops or auth errors",
  "application_url, redirect_urls, and app_proxy.url all resolve over HTTPS",
  "A test quote reaches the app through the App Proxy",
  "Outbound emails send successfully",
  "npx prisma migrate status reports no pending migrations",
  "All five webhooks visible/registered in the Partner Dashboard",
];

const COMPLIANCE_CLOSE_OUT = [
  "License Agreement PDF downloaded and archived",
  "Production Deployment count confirmed within your licensed limit (1)",
  "Non-Production Deployment count confirmed within your licensed limit (up to 3)",
  "Update & Support Term start date noted",
  "Renewal date calendared, ahead of the Update & Support Term expiry",
];

export default function QuickStartChecklistPage() {
  return (
    <DocPageShell
      breadcrumbCategory="Onboarding"
      title="Quick Start Checklist"
      subtitle="A tick-box execution list from licence check to compliance close-out. Work through each phase in order — every item here is covered in more depth by its matching guide."
      readTime="6 min read"
      tocLinks={TOC_LINKS}
    >
      <h2 id="before-you-start" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Before you start
      </h2>
      <DocChecklist items={BEFORE_YOU_START} />

      <h2 id="get-the-package" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Get the package
      </h2>
      <DocChecklist items={GET_THE_PACKAGE} />

      <h2 id="local-installation" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Local installation
      </h2>
      <DocChecklist items={LOCAL_INSTALLATION} />

      <h2 id="shopify-partner-setup" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Shopify Partner setup
      </h2>
      <DocChecklist items={SHOPIFY_PARTNER_SETUP} />

      <h2 id="database-setup" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Database setup
      </h2>
      <DocChecklist items={DATABASE_SETUP} />

      <h2 id="deployment" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Deployment
      </h2>
      <DocChecklist items={DEPLOYMENT} />

      <Callout
        borderColor="rgb(153, 246, 228)"
        background="rgb(240, 253, 250)"
        accentColor="rgb(13, 148, 136)"
        label="TIP"
        icon={(
          <>
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z" />
          </>
        )}
      >
        If any item above doesn't check out, look it up in Troubleshooting before contacting support — most setup issues are answered there directly.
      </Callout>

      <h2 id="compliance-close-out" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Compliance close-out
      </h2>
      <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 14px", maxWidth: "720px" }}>
        The licence obligations stay with you, the licence holder — even if an implementation partner did the technical work. Confirm each of these before considering the rollout complete.
      </p>
      <DocChecklist items={COMPLIANCE_CLOSE_OUT} />
    </DocPageShell>
  );
}
