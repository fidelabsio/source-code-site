import { LegalBlocks, type LegalSection } from "./LegalBlocks";

export default function LegalDocPage({
  badgeLabel,
  titleLead,
  titleHighlight,
  subtitle,
  version,
  effectiveDate,
  lastUpdated,
  sections,
  ctaHeading,
  ctaBody,
  ctaHref,
  ctaLabel,
}: {
  badgeLabel: string;
  titleLead: string;
  titleHighlight: string;
  subtitle: string;
  version: string;
  effectiveDate: string;
  lastUpdated: string;
  sections: LegalSection[];
  ctaHeading: string;
  ctaBody: string;
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <>
      <section style={{ background: "rgb(247, 252, 252)", padding: "64px 32px 40px", borderBottom: "1px solid rgb(238, 242, 242)" }}>
        <div style={{ maxWidth: "820px", margin: "0px auto", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", background: "rgb(224, 250, 248)", color: "rgb(13, 148, 136)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.8px", marginBottom: "20px" }}>
            <span style={{ width: "7px", height: "7px", flex: "0 0 auto", borderRadius: "999px", background: "rgb(20, 184, 166)", boxShadow: "rgba(20, 184, 166, 0.13) 0px 0px 0px 3px, rgba(20, 184, 166, 0.73) 0px 0px 9px", animation: "2.4s ease-in-out 0s infinite normal none running fl-dot" }} />
            {badgeLabel}
          </span>
          <h1 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: 800, fontSize: "44px", lineHeight: "1.1", letterSpacing: "-1.6px", margin: "0px auto 14px", color: "rgb(13, 21, 38)", maxWidth: "760px", textWrap: "pretty" }}>
            {`${titleLead} `}
            <span style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", animation: "6s linear 0s infinite normal none running fl-grad" }}>
              {titleHighlight}
            </span>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px auto 24px", maxWidth: "640px" }}>
            {subtitle}
          </p>
          <div style={{ display: "inline-flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "999px", background: "rgb(255, 255, 255)", border: "1px solid rgb(229, 231, 235)", fontSize: "12.5px", color: "rgb(55, 65, 81)" }}>
              {"Version "}
              <strong style={{ color: "rgb(13, 21, 38)" }}>{version}</strong>
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "999px", background: "rgb(255, 255, 255)", border: "1px solid rgb(229, 231, 235)", fontSize: "12.5px", color: "rgb(55, 65, 81)" }}>
              {"Effective date "}
              <strong style={{ color: "rgb(13, 21, 38)" }}>{effectiveDate}</strong>
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "999px", background: "rgb(255, 255, 255)", border: "1px solid rgb(229, 231, 235)", fontSize: "12.5px", color: "rgb(55, 65, 81)" }}>
              {"Last updated "}
              <strong style={{ color: "rgb(13, 21, 38)" }}>{lastUpdated}</strong>
            </span>
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(255, 255, 255)", padding: "64px 32px 72px" }}>
        <div style={{ maxWidth: "820px", margin: "0px auto" }}>
          {sections.map((section, i) => (
            <div
              key={section.number}
              style={{
                padding: i === 0 ? "0px 0px 32px" : i === sections.length - 1 ? "32px 0px 0px" : "32px 0px",
                borderBottom: i === sections.length - 1 ? undefined : "1px solid rgb(243, 244, 246)",
              }}
            >
              <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: 700, fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
                <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>{section.number}</span>
                {section.title}
              </h2>
              <LegalBlocks blocks={section.blocks} />
            </div>
          ))}

          <div style={{ marginTop: "44px", borderRadius: "20px", padding: "48px 32px", textAlign: "center", background: "linear-gradient(135deg, rgb(47, 84, 235), rgb(3, 162, 145))", boxShadow: "rgba(47, 84, 235, 0.55) 0px 26px 54px -28px" }}>
            <div style={{ width: "52px", height: "52px", margin: "0px auto 20px", borderRadius: "15px", background: "rgba(255, 255, 255, 0.16)", border: "1px solid rgba(255, 255, 255, 0.24)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgb(255, 255, 255)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
              </svg>
            </div>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: 800, fontSize: "28px", letterSpacing: "-1px", margin: "0px 0px 10px", color: "rgb(255, 255, 255)" }}>
              {ctaHeading}
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.65", color: "rgba(255, 255, 255, 0.82)", margin: "0px auto 26px", maxWidth: "520px" }}>
              {ctaBody}
            </p>
            <a href={ctaHref} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 30px", borderRadius: "999px", background: "rgb(255, 255, 255)", color: "rgb(13, 21, 38)", fontSize: "14.5px", fontWeight: 600, boxShadow: "rgba(13, 21, 38, 0.5) 0px 10px 26px -12px" }}>
              {`${ctaLabel} `}
              <span>→</span>
            </a>
          </div>

          <p style={{ fontSize: "13px", lineHeight: "1.7", color: "rgb(156, 163, 175)", margin: "32px 0px 0px", textAlign: "center" }}>
            <strong>Copyright © 2026 FIDE LAB (OPC) PRIVATE LIMITED. All rights reserved.</strong>
          </p>
        </div>
      </section>
    </>
  );
}
