import type { CSSProperties, ReactNode } from "react";

export default function GradientHeading({
  lead,
  highlight,
  as = "h2",
  size = 40,
  color = "rgb(13, 21, 38)",
  style,
}: {
  lead: ReactNode;
  highlight: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: number;
  color?: string;
  style?: CSSProperties;
}) {
  const Tag = as;
  return (
    <Tag
      style={{
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontWeight: "800",
        fontSize: `${size}px`,
        letterSpacing: "-1.4px",
        margin: "0px 0px 12px",
        color,
        ...style,
      }}
    >
      {lead}
      <span
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)",
          backgroundSize: "200% 100%",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
          animation: "6s linear 0s infinite normal none running fl-grad",
        }}
      >
        {highlight}
      </span>
    </Tag>
  );
}
