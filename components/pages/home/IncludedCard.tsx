import type { ReactNode } from "react";
import IconTile from "@/components/ui/IconTile";
import ChecklistRow from "@/components/ui/ChecklistRow";

export default function IncludedCard({
  icon,
  label,
  title,
  items,
  delay,
}: {
  icon: ReactNode;
  label: string;
  title: string;
  items: string[];
  delay: number;
}) {
  return (
    <div
      style={{
        background: "rgb(255, 255, 255)",
        border: "1px solid rgb(229, 231, 235)",
        borderRadius: "16px",
        padding: "28px",
        transition: "transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.28s cubic-bezier(0.2, 0.8, 0.2, 1)",
        animation: `0.7s cubic-bezier(0.2, 0.9, 0.25, 1) ${delay}s 1 normal both running fl-rise`,
        transform: "translateY(0px)",
        boxShadow: "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
        <IconTile radius={12}>{icon}</IconTile>
        <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: "0.7px", color: "rgb(13, 148, 136)", background: "rgb(224, 250, 248)", padding: "4px 9px", borderRadius: "999px" }}>
          <span className="sc-interp">{label}</span>
        </span>
      </div>
      <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "20px", fontWeight: "700", margin: "0px 0px 16px", color: "rgb(13, 21, 38)" }}>
        <span className="sc-interp">{title}</span>
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {items.map((item) => (
          <ChecklistRow key={item} text={item} className="fl-ix-scp7" />
        ))}
      </div>
    </div>
  );
}
