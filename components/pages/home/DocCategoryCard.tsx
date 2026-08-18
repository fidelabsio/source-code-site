import type { ReactNode } from "react";

export type DocCardTone = {
  peek1Bg: string;
  peek1Border: string;
  peek2Bg: string;
  peek2Border: string;
  iconBg: string;
  iconColor: string;
};

export default function DocCategoryCard({
  tone,
  icon,
  title,
  description,
  links,
  footer,
  href,
}: {
  tone: DocCardTone;
  icon: ReactNode;
  title: string;
  description: string;
  links: string[];
  footer: string;
  href: string;
}) {
  return (
    <div className="fl-ix-scp1" style={{ position: "relative", display: "flex" }}>
      <div style={{ position: "absolute", left: "14px", right: "14px", top: "0px", height: "100%", borderRadius: "16px", background: tone.peek1Bg, border: `1px solid ${tone.peek1Border}`, transformOrigin: "center top", transition: "transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.35s", transform: "translateY(0px) scale(0.99)", opacity: "0" }} />
      <div style={{ position: "absolute", left: "26px", right: "26px", top: "0px", height: "100%", borderRadius: "16px", background: tone.peek2Bg, border: `1px solid ${tone.peek2Border}`, transformOrigin: "center top", transition: "transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.45s", transform: "translateY(0px)", opacity: "0" }} />
      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", background: "rgb(255, 255, 255)", border: "1px solid rgb(229, 231, 235)", borderRadius: "16px", padding: "32px", transition: "transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s, border-color 0.25s", transform: "translateY(0px)", boxShadow: "none" }}>
        <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: tone.iconBg, display: "flex", alignItems: "center", justifyContent: "center", color: tone.iconColor, marginBottom: "20px" }}>
          {icon}
        </div>
        <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "20px", fontWeight: "700", margin: "0px 0px 8px", color: "rgb(13, 21, 38)" }}>
          <span className="sc-interp">{title}</span>
        </h3>
        <p style={{ fontSize: "14px", lineHeight: "1.6", color: "rgb(107, 114, 128)", margin: "0px 0px 20px" }}>
          <span className="sc-interp">{description}</span>
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginBottom: "20px", flex: "1 1 0%" }}>
          {links.map((link) => (
            <div key={link} style={{ display: "flex", alignItems: "center", gap: "9px", fontSize: "13px", color: "rgb(55, 65, 81)" }}>
              <span style={{ color: "rgb(156, 163, 175)", fontSize: "11px" }}>›</span>
              <span className="sc-interp">{link}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "16px", borderTop: "1px solid rgb(243, 244, 246)" }}>
          <span style={{ fontSize: "12px", fontWeight: "600", color: "rgb(107, 114, 128)" }}>
            <span className="sc-interp">{footer}</span>
          </span>
          <a href={href} className="fl-ix-scpg fl-ix-scph" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 20px", background: "transparent", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", color: "rgb(13, 148, 136)", fontSize: "14px", fontWeight: "600", whiteSpace: "nowrap", transition: "color 0.18s, gap 0.18s" }}>
            {"Open docs "}
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
