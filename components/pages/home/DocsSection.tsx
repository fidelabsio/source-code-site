"use client";

import SectionEyebrow from "@/components/ui/SectionEyebrow";
import GradientHeading from "@/components/ui/GradientHeading";
import DocCategoryCard, { type DocCardTone } from "./DocCategoryCard";
import SpecRow from "./SpecRow";
import LicenseRow from "./LicenseRow";
import { useTechDetailsToggle } from "@/hooks/useTechDetailsToggle";

const TEAL_TONE: DocCardTone = {
  peek1Bg: "rgb(224, 250, 248)",
  peek1Border: "rgba(13, 148, 136, 0.333)",
  peek2Bg: "rgb(206, 255, 251)",
  peek2Border: "rgba(13, 148, 136, 0.18)",
  iconBg: "rgb(224, 250, 248)",
  iconColor: "rgb(13, 148, 136)",
};

const BLUE_TONE: DocCardTone = {
  peek1Bg: "rgb(240, 243, 255)",
  peek1Border: "rgba(47, 84, 235, 0.333)",
  peek2Bg: "rgb(232, 237, 255)",
  peek2Border: "rgba(47, 84, 235, 0.18)",
  iconBg: "rgb(240, 243, 255)",
  iconColor: "rgb(47, 84, 235)",
};

const GRAY_TONE: DocCardTone = {
  peek1Bg: "rgb(243, 244, 246)",
  peek1Border: "rgba(55, 65, 81, 0.333)",
  peek2Bg: "rgb(229, 231, 235)",
  peek2Border: "rgba(55, 65, 81, 0.18)",
  iconBg: "rgb(243, 244, 246)",
  iconColor: "rgb(55, 65, 81)",
};

const DOC_CARDS = [
  {
    tone: TEAL_TONE,
    title: "Core Documentation",
    description: "Begin with the onboarding resources, then work through installation and setup.",
    links: ["Buyer Onboarding Guide", "Installation Guide", "Shopify Partner Setup", "Database Setup"],
    footer: "7+ getting started guides",
    href: "/documentation?doc=buyer-onboarding",
    icon: (
      <>
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z" />
      </>
    ),
  },
  {
    tone: BLUE_TONE,
    title: "White Label Documentation",
    description: "Configure, rebrand, and ship a separately branded instance per client.",
    links: ["Configuration Guide", "White Label Overview", "Theme Tokens", "Asset Replacement", "Per-client Builds"],
    footer: "5 guides · with examples",
    href: "/documentation?doc=white-label-overview",
    icon: (
      <>
        <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8Z" />
        <path d="M8 9h.01" />
        <path d="M12 7h.01" />
        <path d="M16 9h.01" />
      </>
    ),
  },
  {
    tone: GRAY_TONE,
    title: "Technical Documentation",
    description: "Authentication, endpoints, webhooks, and route architecture.",
    links: ["Authentication", "API Reference", "Webhooks", "Route Architecture", "Environment Variables"],
    footer: "5 guides · code samples",
    href: "/documentation?doc=api-reference",
    icon: (
      <>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M15 2v5h5" />
        <path d="m9.5 12.5-1.5 1.5 1.5 1.5" />
        <path d="m13.5 12.5 1.5 1.5-1.5 1.5" />
      </>
    ),
  },
];

const SPECS = [
  { label: "Framework", value: "React Router + Shopify App Bridge" },
  { label: "Language", value: "JavaScript" },
  { label: "Database", value: "PostgreSQL + Prisma" },
  { label: "UI", value: "Polaris" },
  { label: "API version", value: "Shopify 2026-07" },
  { label: "Testing", value: "Playwright" },
];

const LICENSE_TERMS: { mark: "check" | "cross"; title: string; description: string }[] = [
  {
    mark: "check",
    title: "1 Production Shopify Store",
    description: "Deploy to one production Shopify store with up to three non-production environments for development, staging, or testing.",
  },
  {
    mark: "check",
    title: "Commercial use",
    description: "Use the source code commercially for your own business in accordance with the Commercial License Agreement.",
  },
  {
    mark: "check",
    title: "Private modifications",
    description: "Modify, extend, and customize the source code while keeping your implementation proprietary.",
  },
  {
    mark: "check",
    title: "12 months updates & standard support",
    description: "Includes 12 months of product updates and standard technical support. Renewal is optional and only extends updates and support — the perpetual Commercial License remains valid even without renewal.",
  },
  {
    mark: "cross",
    title: "No source code redistribution",
    description: "You may not redistribute, resell, sublicense, publish, or share the original source code.",
  },
  {
    mark: "cross",
    title: "No competing source-code product",
    description: "You may not repackage, resell, or distribute the software as a competing source-code product or marketplace listing.",
  },
];

export default function DocsSection() {
  const { open, toggle, panelRef } = useTechDetailsToggle();

  return (
    <section id="docs" style={{ background: "rgb(249, 250, 251)", padding: "96px 32px" }}>
      <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <SectionEyebrow tone="blue">DOCUMENTATION</SectionEyebrow>
          <GradientHeading lead="Documented Down " highlight="to the Last File" />
          <p style={{ fontSize: "15px", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "560px", lineHeight: "1.6" }}>
            Three guides ship with the codebase, written for developers who want to be productive on day one.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {DOC_CARDS.map((card) => (
            <DocCategoryCard
              key={card.title}
              tone={card.tone}
              icon={
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {card.icon}
                </svg>
              }
              title={card.title}
              description={card.description}
              links={card.links}
              footer={card.footer}
              href={card.href}
            />
          ))}
        </div>
        <div ref={panelRef} style={{ display: "grid", transition: "grid-template-rows 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.35s", gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? "1" : "0" }}>
          <div style={{ overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", paddingTop: "40px" }}>
              <div style={{ background: "rgb(255, 255, 255)", border: "1px solid rgb(229, 231, 235)", borderRadius: "16px", padding: "32px" }}>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "20px", fontWeight: "700", margin: "0px 0px 20px", color: "rgb(13, 21, 38)" }}>
                  Technical Specifications
                </h3>
                {SPECS.map((s) => (
                  <SpecRow key={s.label} label={s.label} value={s.value} />
                ))}
              </div>
              <div style={{ background: "rgb(255, 255, 255)", border: "1px solid rgb(229, 231, 235)", borderRadius: "16px", padding: "32px" }}>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "20px", fontWeight: "700", margin: "0px 0px 20px", color: "rgb(13, 21, 38)" }}>
                  Licensing
                </h3>
                {LICENSE_TERMS.map((t) => (
                  <LicenseRow key={t.title} mark={t.mark} title={t.title} description={t.description} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <button type="button" aria-expanded={open} onClick={toggle} className="fl-ix-scp6 fl-ix-scp5" style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "12px 24px", borderRadius: "999px", background: "rgb(255, 255, 255)", border: "1px solid rgb(209, 213, 219)", color: "rgb(31, 41, 55)", fontFamily: "Geist, sans-serif", fontSize: "14px", fontWeight: "600", cursor: "pointer", transition: "0.18s" }}>
            <span className="sc-interp">
              {open ? "Hide Technical Details ↑" : "View Technical Details ↓"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
