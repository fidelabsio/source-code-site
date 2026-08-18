import type { CSSProperties, ReactNode } from "react";
import IconTile from "@/components/ui/IconTile";

export default function FeatureCard({
  icon,
  title,
  description,
  style,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className="fl-ab-scp5"
      style={{
        background: "rgb(255, 255, 255)",
        border: "1px solid rgb(229, 231, 235)",
        borderRadius: "16px",
        padding: "28px",
        transition: "transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.28s, border-color 0.28s",
        ...style,
      }}
    >
      <IconTile size={44} style={{ marginBottom: "18px" }}>
        {icon}
      </IconTile>
      <div style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "17px", fontWeight: "700", color: "rgb(13, 21, 38)", marginBottom: "8px" }}>
        {title}
      </div>
      <p style={{ fontSize: "13.5px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px" }}>
        {description}
      </p>
    </div>
  );
}
