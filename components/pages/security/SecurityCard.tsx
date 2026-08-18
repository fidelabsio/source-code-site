import type { ReactNode } from "react";
import IconTile from "@/components/ui/IconTile";

export default function SecurityCard({
  icon,
  title,
  description,
  items,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div
      className="fl-sec-scp5"
      style={{
        background: "rgb(255, 255, 255)",
        border: "1px solid rgb(229, 231, 235)",
        borderRadius: "16px",
        padding: "28px",
        transition: "transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.28s, border-color 0.28s",
      }}
    >
      <IconTile size={44} radius={12} style={{ marginBottom: "18px" }}>
        {icon}
      </IconTile>
      <div
        style={{
          fontFamily: "\"Bricolage Grotesque\", sans-serif",
          fontSize: "17px",
          fontWeight: "700",
          color: "rgb(13, 21, 38)",
          marginBottom: "8px",
        }}
      >
        {title}
      </div>
      <p style={{ fontSize: "13.5px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px" }}>
        {description}
      </p>
      <ul
        style={{
          margin: "14px 0px 0px",
          padding: "0px 0px 0px 18px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {items.map((item) => (
          <li key={item} style={{ fontSize: "13.5px", lineHeight: "1.6", color: "rgb(107, 114, 128)" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
