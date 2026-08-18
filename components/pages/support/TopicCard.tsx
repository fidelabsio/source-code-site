import type { ReactNode } from "react";
import IconTile from "@/components/ui/IconTile";

export default function TopicCard({
  icon,
  title,
  description,
  href,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div
      className="fl-sup-scp5"
      style={{
        flex: "0 1 auto",
        width: "calc(25% - 15px)",
        minWidth: "230px",
        background: "rgb(255, 255, 255)",
        border: "1px solid rgb(229, 231, 235)",
        borderRadius: "16px",
        padding: "28px",
        transition: "transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.28s, border-color 0.28s",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <IconTile size={44} style={{ marginBottom: "18px" }}>
        {icon}
      </IconTile>
      <div
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: "16.5px",
          fontWeight: "700",
          color: "rgb(13, 21, 38)",
          marginBottom: "8px",
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontSize: "13.5px",
          lineHeight: "1.65",
          color: "rgb(107, 114, 128)",
          margin: "0px 0px 18px",
          flex: "1 1 0%",
        }}
      >
        {description}
      </p>
      <a
        href={href}
        className="fl-sup-scp6"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "7px",
          fontSize: "14px",
          fontWeight: "600",
          color: "rgb(13, 148, 136)",
          transition: "gap 0.2s",
        }}
      >
        {"Open doc "}
        <span>→</span>
      </a>
    </div>
  );
}
