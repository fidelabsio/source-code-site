import type { ReactNode } from "react";
import IconTile from "@/components/ui/IconTile";

export default function ResourceCard({
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
    <a
      href={href}
      className="fl-sup-scp7"
      style={{
        flex: "0 1 auto",
        width: "calc(25% - 15px)",
        minWidth: "230px",
        position: "relative",
        display: "block",
        cursor: "pointer",
        color: "inherit",
        background: "rgb(255, 255, 255)",
        border: "1px solid rgb(229, 231, 235)",
        borderRadius: "16px",
        padding: "28px",
        transition: "transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.28s, border-color 0.28s",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          display: "flex",
          color: "var(--ac,#9CA3AF)",
          transition: "transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.28s",
          transform: "translate(var(--ax,0),var(--ay,0))",
        }}
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </span>
      <IconTile size={44} style={{ marginBottom: "18px" }}>
        {icon}
      </IconTile>
      <div
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: "17px",
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
          margin: "0px",
        }}
      >
        {description}
      </p>
    </a>
  );
}
