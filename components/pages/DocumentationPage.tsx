"use client";

import DocSidebarCategory from "./documentation/DocSidebarCategory";
import TocLink from "./documentation/TocLink";
import Callout from "./documentation/Callout";
import DocTable from "./documentation/DocTable";
import DocChecklist from "./documentation/DocChecklist";
import DocOrderedList from "./documentation/DocOrderedList";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const HEADER_OFFSET = 54;

const SIDEBAR_CATEGORIES = [
  {
    title: "ONBOARDING",
    links: [
      { label: "Buyer Onboarding Guide", active: true },
      { label: "Quick Start Checklist" },
    ],
  },
  {
    title: "GETTING STARTED",
    links: [{ label: "Video Tutorials" }],
  },
  {
    title: "HELP",
    links: [{ label: "Troubleshooting" }],
  },
  {
    title: "TECHNICAL REFERENCE",
    links: [{ label: "License" }],
  },
];

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

const TOC_IDS = TOC_LINKS.map((link) => link.href.slice(1));

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
  const activeId = useScrollSpy(TOC_IDS, HEADER_OFFSET);

  return (
    <>
      <section style={{ background: "rgb(247, 252, 252)", padding: "64px 32px 48px", borderBottom: "1px solid rgb(238, 242, 242)" }}>
        <div style={{ maxWidth: "820px", margin: "0px auto", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", background: "rgb(224, 250, 248)", color: "rgb(13, 148, 136)", fontSize: "11px", fontWeight: "600", letterSpacing: "0.8px", marginBottom: "18px" }}>
            <span style={{ width: "7px", height: "7px", flex: "0 0 auto", borderRadius: "999px", background: "rgb(20, 184, 166)", boxShadow: "rgba(20, 184, 166, 0.13) 0px 0px 0px 3px, rgba(20, 184, 166, 0.73) 0px 0px 9px", animation: "2.4s ease-in-out 0s infinite normal none running fl-dot" }} />
            DOCUMENTATION
          </span>
          <h1 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "44px", lineHeight: "1.08", letterSpacing: "-1.7px", margin: "0px auto 14px", color: "rgb(13, 21, 38)", maxWidth: "760px" }}>
            {"Everything, "}
            <span style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", animation: "6s linear 0s infinite normal none running fl-grad" }}>
              Documented
            </span>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "620px" }}>
            A developer-first portal for installing, configuring, rebranding, and shipping the codebase.
          </p>
        </div>
      </section>
      <section style={{ background: "rgb(255, 255, 255)", padding: "0px 32px 72px" }}>
        <div style={{ maxWidth: "1280px", margin: "0px auto", display: "flex", flexWrap: "wrap", gap: "36px", alignItems: "flex-start" }}>
          <aside style={{ flex: "0 1 248px", minWidth: "220px", position: "sticky", top: "96px", alignSelf: "flex-start", maxHeight: "calc(-120px + 100vh)", overflowY: "auto", padding: "28px 0px 20px" }}>
            <div style={{ position: "relative", marginBottom: "20px" }}>
              <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "rgb(156, 163, 175)", pointerEvents: "none", display: "flex" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </span>
              <input type="text" placeholder="Search documentation" className="fl-dc-scp5" defaultValue="" style={{ width: "100%", padding: "10px 12px 10px 34px", borderRadius: "10px", border: "1px solid rgb(229, 231, 235)", background: "rgb(249, 250, 251)", fontFamily: "Geist, system-ui, sans-serif", fontSize: "13px", color: "rgb(13, 21, 38)", outline: "none", transition: "border-color 0.18s, box-shadow 0.18s, background 0.18s" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {SIDEBAR_CATEGORIES.map((category) => (
                <DocSidebarCategory key={category.title} title={category.title} links={category.links} />
              ))}
            </div>
          </aside>
          <div style={{ flex: "1 1 520px", minWidth: "0px", padding: "36px 0px 0px" }}>
            <div style={{ transition: "opacity 0.2s, transform 0.2s", opacity: "1", transform: "translateY(0px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: "600", letterSpacing: "0.4px", color: "rgb(156, 163, 175)", marginBottom: "14px" }}>
                {"Documentation "}
                <span style={{ color: "rgb(209, 213, 219)" }}>
                  /
                </span>
                {" "}
                <span style={{ color: "rgb(13, 148, 136)" }}>
                  <span className="sc-interp">
                    Onboarding
                  </span>
                </span>
              </div>
              <h1 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "36px", lineHeight: "1.12", letterSpacing: "-1.4px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
                <span className="sc-interp">
                  Buyer Onboarding Guide
                </span>
              </h1>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "rgb(107, 114, 128)", margin: "0px 0px 8px", maxWidth: "720px" }}>
                <span className="sc-interp">
                  Start here. What you have bought, what is in the package, and how to get to a running application.
                </span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "12.5px", color: "rgb(156, 163, 175)", paddingBottom: "24px", borderBottom: "1px solid rgb(243, 244, 246)", marginBottom: "8px" }}>
                <span className="sc-interp">
                  10 min read
                </span>
              </div>
              <h2 id="welcome" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
                <span className="sc-interp">
                  Welcome
                </span>
              </h2>
              <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 14px", maxWidth: "720px" }}>
                <span className="sc-interp">
                  Thank you for purchasing the FIDE Labs Commercial License. This guide is the front door to the documentation — it explains what you have, which path to follow, and what a productive first week looks like.
                </span>
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
                <span className="sc-interp">
                  Product overview
                </span>
              </h2>
              <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 14px", maxWidth: "720px" }}>
                <span className="sc-interp">
                  You have purchased the complete source code for a production-ready Shopify quote-management application. It is not a hosted service — you deploy and operate it yourself, under your own brand.
                </span>
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
                <span className="sc-interp">
                  Package contents
                </span>
              </h2>
              <DocChecklist items={PACKAGE_CONTENTS} />
              <h2 id="choose-your-path" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
                <span className="sc-interp">
                  Choose your path
                </span>
              </h2>
              <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 14px", maxWidth: "720px" }}>
                <span className="sc-interp">
                  Pick the track that matches your goal. Each one is a short, ordered reading list.
                </span>
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
                <span className="sc-interp">
                  First steps
                </span>
              </h2>
              <DocOrderedList items={FIRST_STEPS} />
              <h2 id="setup-checklist" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
                <span className="sc-interp">
                  Setup checklist
                </span>
              </h2>
              <DocChecklist items={SETUP_CHECKLIST} />
              <h2 id="recommended-reading" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
                <span className="sc-interp">
                  Recommended reading
                </span>
              </h2>
              <DocOrderedList items={RECOMMENDED_READING} />
              <h2 id="support" data-doc-head="1" style={{ scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" }}>
                <span className="sc-interp">
                  Support
                </span>
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
                <span className="sc-interp">
                  Licensing at a glance
                </span>
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
                <span className="sc-interp">
                  Your first week
                </span>
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
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "44px", paddingTop: "28px", borderTop: "1px solid rgb(243, 244, 246)" }}>
                <button className="fl-dc-scp8" style={{ flex: "1 1 220px", textAlign: "right", padding: "18px 22px", borderRadius: "14px", border: "1px solid rgb(229, 231, 235)", background: "rgb(255, 255, 255)", cursor: "pointer", fontFamily: "Geist, system-ui, sans-serif", transition: "transform 0.22s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.22s, border-color 0.22s" }}>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "rgb(156, 163, 175)", marginBottom: "6px" }}>
                    Next →
                  </div>
                  <div style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)" }}>
                    <span className="sc-interp">
                      Quick Start Checklist
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <aside style={{ flex: "0 1 196px", minWidth: "170px", position: "sticky", top: "96px", alignSelf: "flex-start", padding: "36px 0px 20px" }}>
            <div style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: "0.8px", color: "rgb(156, 163, 175)", marginBottom: "14px" }}>
              ON THIS PAGE
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", borderLeft: "1px solid rgb(229, 231, 235)" }}>
              {TOC_LINKS.map((link) => (
                <TocLink key={link.href} href={link.href} label={link.label} active={link.href.slice(1) === activeId} />
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
