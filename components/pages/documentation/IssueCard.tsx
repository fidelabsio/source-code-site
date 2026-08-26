import type { ReactNode } from "react";

const SEVERITY_STYLES: Record<string, { bg: string; color: string }> = {
  High: { bg: "rgb(254, 226, 226)", color: "rgb(185, 28, 28)" },
  Medium: { bg: "rgb(254, 243, 199)", color: "rgb(161, 98, 7)" },
  Low: { bg: "rgb(229, 231, 235)", color: "rgb(75, 85, 99)" },
};

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.5px", color: "rgb(156, 163, 175)", marginBottom: "4px", textTransform: "uppercase" }}>
        {label}
      </div>
      <div style={{ fontSize: "14px", lineHeight: "1.65", color: "rgb(55, 65, 81)" }}>{children}</div>
    </div>
  );
}

export function Code({ lines }: { lines: string[] }) {
  return (
    <div style={{ marginTop: "6px", padding: "10px 12px", borderRadius: "8px", background: "rgb(249, 250, 251)", border: "1px solid rgb(229, 231, 235)", display: "flex", flexDirection: "column", gap: "4px" }}>
      {lines.map((line) => (
        <code key={line} style={{ fontFamily: "monospace", fontSize: "12.5px", color: "rgb(13, 21, 38)" }}>
          {line}
        </code>
      ))}
    </div>
  );
}

export default function IssueCard({
  id,
  title,
  severity,
  symptom,
  cause,
  resolution,
  verification,
  notes,
}: {
  id: string;
  title: string;
  severity: "Low" | "Medium" | "High";
  symptom: ReactNode;
  cause: ReactNode;
  resolution: ReactNode;
  verification: ReactNode;
  notes?: ReactNode;
}) {
  const sev = SEVERITY_STYLES[severity];
  return (
    <div id={id} style={{ scrollMarginTop: "110px", border: "1px solid rgb(229, 231, 235)", borderRadius: "14px", padding: "20px 22px", margin: "0px 0px 18px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", flexWrap: "wrap" }}>
        <span style={{ fontFamily: "monospace", fontSize: "12.5px", fontWeight: "700", color: "rgb(13, 148, 136)" }}>{id}</span>
        <span style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)" }}>{title}</span>
        <span style={{ marginLeft: "auto", padding: "3px 10px", borderRadius: "999px", fontSize: "10.5px", fontWeight: "700", letterSpacing: "0.3px", background: sev.bg, color: sev.color }}>
          {severity.toUpperCase()}
        </span>
      </div>
      <Field label="Symptom">{symptom}</Field>
      <Field label="Probable cause">{cause}</Field>
      <Field label="Resolution">{resolution}</Field>
      <Field label="Verification">{verification}</Field>
      {notes ? <Field label="Notes">{notes}</Field> : null}
    </div>
  );
}
