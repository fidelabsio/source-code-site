"use client";

import Link from "next/link";
import DocPageShell from "./documentation/DocPageShell";
import Callout from "./documentation/Callout";
import DocTable from "./documentation/DocTable";
import DocChecklist from "./documentation/DocChecklist";
import DocOrderedList from "./documentation/DocOrderedList";

const TOC_LINKS = [
  { href: "#welcome", label: "Welcome" },
  { href: "#product-overview", label: "Product overview" },
  { href: "#package-contents", label: "Package contents" },
  { href: "#choose-your-path", label: "Choose your path" },
  { href: "#first-steps", label: "First steps" },
  { href: "#setup-checklist", label: "Setup checklist" },
  { href: "#recommended-reading", label: "Recommended reading" },
  { href: "#support", label: "Support" },
  { href: "#licensing-at-a-glance", label: "Licensing at a glance" },
  { href: "#your-first-week", label: "Your first week" },
];

const PACKAGE_CONTENTS = [
  "Complete production-ready source code package",
  "Secure download link",
  "Commercial License files",
  "Installation, configuration, and deployment guides",
  "API and webhook documentation",
  "Video tutorials",
  "Third-party notices",
  "12 months of product updates",
  "12 months of standard technical support",
];

const FIRST_STEPS = [
  "Open the secure download link sent to your purchase email and download the source code package.",
  "Unpack the package and confirm you can install dependencies.",
  "Create a Shopify Partner app and a development store.",
  "Follow the Installation Guide end to end.",
  "Confirm the dashboard loads with seeded sample data.",
];

const SETUP_CHECKLIST = [
  "Source code package downloaded and unpacked",
  "Node 20.10 or newer installed",
  "PostgreSQL running and reachable",
  "Shopify Partner app created",
  "Environment variables filled in",
  "Migrations applied",
  "App installed on a development store",
  "Dashboard rendering sample quotes",
];

const RECOMMENDED_READING = [
  "Buyer Onboarding Guide — this page.",
  "Quick Start Checklist — the condensed task list.",
  "Installation Guide — full local setup.",
  "Shopify Partner Setup — app credentials and scopes.",
  "Database Setup — schema and migrations.",
  "Configuration Guide — feature flags and defaults.",
  "Deployment Guide — going live.",
];

export default function DocumentationPage() {
  return (
    <DocPageShell
      breadcrumbCategory="Onboarding"
      title="Buyer Onboarding Guide"
      subtitle="Start here. What you have bought, what is in the package, and how to get to a running application."
      readTime="10 min read"
      tocLinks={TOC_LINKS}
      footer={
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "44px", paddingTop: "28px", borderTop: "1px solid rgb(243, 244, 246)" }}>
          <Link
            href="/documentation/quick-start-checklist"
            className="fl-dc-scp8"
            style={{ flex: "1 1 220px", textAlign: "right", padding: "18px 22px", borderRadius: "14px", border: "1px solid rgb(229, 231, 235)", background: "rgb(255, 255, 255)", textDecoration: "none", display: "block", fontFamily: "Geist, system-ui, sans-serif", transition: "transform 0.22s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.22s, border-color 0.22s" }}
          >
            <div style={{ fontSize: "12px", fontWeight: "600", color: "rgb(156, 163, 175)", marginBottom: "6px" }}>
              Next →
            </div>
            <div style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)" }}>
              Quick Start Checklist
            </div>
          </Link>
        </div>
      }
    >
      <h2 id="welcome" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Welcome
      </h2>
      <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 14px", maxWidth: "720px" }}>
        Thank you for purchasing the FIDE Labs Commercial License. This guide is the front door to the documentation — it explains what you have, which path to follow, and what a productive first week looks like.
      </p>
      <Callout
        borderColor="rgb(199, 210, 254)"
        background="rgb(240, 243, 255)"
        accentColor="rgb(47, 84, 235)"
        label="NOTE"
        icon={(
          <>
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
            <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
          </>
        )}
      >
        Everything referenced here exists in this documentation portal. Use the sidebar to jump to any guide, or follow the Recommended Reading order below.
      </Callout>
      <h2 id="product-overview" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Product overview
      </h2>
      <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 14px", maxWidth: "720px" }}>
        You have purchased the complete source code for a production-ready Shopify quote-management application. It is not a hosted service — you deploy and operate it yourself, under your own brand.
      </p>
      <DocTable
        headers={["Aspect", "Detail"]}
        rows={[
          ["Delivery", "Secure download link, emailed after payment"],
          ["Stack", "React, React Router, Prisma, Polaris, App Bridge"],
          ["Database", "PostgreSQL"],
          ["Deployment", "Vercel, Fly.io, or Docker"],
          ["Licence", "Perpetual Commercial License"],
        ]}
      />
      <h2 id="package-contents" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Package contents
      </h2>
      <DocChecklist items={PACKAGE_CONTENTS} />
      <h2 id="choose-your-path" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Choose your path
      </h2>
      <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 14px", maxWidth: "720px" }}>
        Pick the track that matches your goal. Each one is a short, ordered reading list.
      </p>
      <DocTable
        headers={["If you want to…", "Start with", "Then read"]}
        rows={[
          ["Run it for your own store", "Installation Guide", "Database Setup, Deployment Guide"],
          ["Rebrand it for your business", "White Label Overview", "Rebranding Guide, Theme Tokens"],
          ["Extend or integrate it", "Route Architecture", "Authentication, API Reference"],
          ["Evaluate the licence", "License", "Support"],
        ]}
      />
      <h2 id="first-steps" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        First steps
      </h2>
      <DocOrderedList items={FIRST_STEPS} />
      <h2 id="setup-checklist" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Setup checklist
      </h2>
      <DocChecklist items={SETUP_CHECKLIST} />
      <h2 id="recommended-reading" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Recommended reading
      </h2>
      <DocOrderedList items={RECOMMENDED_READING} />
      <h2 id="support" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Support
      </h2>
      <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 14px", maxWidth: "720px" }}>
        {"Standard technical support is included for 12 months and is provided by email at "}
        <a href="mailto:support@fidelabs.io" style={{ color: "rgb(13, 148, 136)", fontWeight: "600", transition: "color 0.18s" }}>
          support@fidelabs.io
        </a>
        . Include your License ID, software version, purchase email, and a description of the issue.
      </p>
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
        Check Troubleshooting and Common Errors first — most setup questions are answered there in a couple of minutes.
      </Callout>
      <h2 id="licensing-at-a-glance" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Licensing at a glance
      </h2>
      <DocTable
        headers={["Item", "Detail"]}
        rows={[
          ["Licence type", "Commercial"],
          ["Term", "Perpetual"],
          ["Production deployment", "1 Shopify Store"],
          ["Non-production environments", "Up to 3"],
          ["Client stores", "Not included"],
          ["Updates", "12 months included"],
          ["Support", "12 months standard"],
          ["Renewal", "Optional"],
        ]}
      />
      <h2 id="your-first-week" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
        Your first week
      </h2>
      <DocTable
        headers={["Day", "Focus"]}
        rows={[
          ["Day 1", "Download the package, local install, first successful run"],
          ["Day 2", "Partner app, development store, OAuth install"],
          ["Day 3", "Read the configuration and data model guides"],
          ["Day 4", "Apply your branding — palette, logo, identity"],
          ["Day 5", "Deploy to a staging environment"],
          ["Day 6–7", "Test end to end, then plan your production launch"],
        ]}
      />
      <Callout
        borderColor="rgb(187, 247, 208)"
        background="rgb(240, 253, 244)"
        accentColor="rgb(22, 163, 74)"
        label="SUCCESS"
        icon={(
          <>
            <path d="m9 12 2 2 4-4" />
            <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
          </>
        )}
      >
        By the end of week one you should have a branded instance running in staging and a clear list of any customisations you want to make.
      </Callout>
    </DocPageShell>
  );
}
