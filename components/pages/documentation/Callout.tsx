import type { ReactNode } from "react";

export default function Callout({
  borderColor,
  background,
  accentColor,
  icon,
  label,
  children,
}: {
  borderColor: string;
  background: string;
  accentColor: string;
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: "13px", margin: "6px 0px 20px", padding: "16px 18px", borderRadius: "12px", border: `1px solid ${borderColor}`, background }}>
      <span style={{ flex: "0 0 auto", marginTop: "1px", color: accentColor }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </span>
      <div>
        <div style={{ fontSize: "12.5px", fontWeight: "700", letterSpacing: "0.3px", color: accentColor, marginBottom: "5px" }}>
          <span className="sc-interp">{label}</span>
        </div>
        <div style={{ fontSize: "14px", lineHeight: "1.65", color: "rgb(55, 65, 81)" }}>
          <span className="sc-interp">{children}</span>
        </div>
      </div>
    </div>
  );
}
