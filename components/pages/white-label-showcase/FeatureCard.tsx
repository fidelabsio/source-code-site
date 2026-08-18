import type { ReactNode } from "react";
import IconTile from "@/components/ui/IconTile";
import ChecklistRow from "@/components/ui/ChecklistRow";

export default function FeatureCard({
  icon,
  title,
  items,
}: {
  icon: ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div
      className="fl-wl-scp7"
      style={{
        background: "rgb(255, 255, 255)",
        border: "1px solid rgb(229, 231, 235)",
        borderRadius: "16px",
        padding: "28px",
        transition: "transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.28s, border-color 0.28s",
      }}
    >
      <IconTile size={38} radius={11} style={{ marginBottom: "18px" }}>
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </IconTile>
      <h3 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "17px", fontWeight: "700", margin: "0px 0px 16px", color: "rgb(13, 21, 38)" }}>
        <span className="sc-interp">{title}</span>
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {items.map((item) => (
          <ChecklistRow key={item} text={item} />
        ))}
      </div>
    </div>
  );
}
