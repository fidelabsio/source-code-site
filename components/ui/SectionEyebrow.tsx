import type { CSSProperties, ReactNode } from "react";

const TONES: Record<string, { background: string; color: string; dot: string; dotShadow: string }> = {
  blue: {
    background: "rgb(240, 243, 255)",
    color: "rgb(47, 84, 235)",
    dot: "rgb(47, 84, 235)",
    dotShadow: "rgba(47, 84, 235, 0.133) 0px 0px 0px 3px, rgba(47, 84, 235, 0.733) 0px 0px 9px",
  },
  teal: {
    background: "rgb(224, 250, 248)",
    color: "rgb(13, 148, 136)",
    dot: "rgb(13, 148, 136)",
    dotShadow: "rgba(13, 148, 136, 0.133) 0px 0px 0px 3px, rgba(13, 148, 136, 0.733) 0px 0px 9px",
  },
  tealOnDark: {
    background: "rgba(20, 184, 166, 0.14)",
    color: "rgb(20, 184, 166)",
    dot: "rgb(20, 184, 166)",
    dotShadow: "rgba(20, 184, 166, 0.133) 0px 0px 0px 3px, rgba(20, 184, 166, 0.733) 0px 0px 9px",
  },
};

export default function SectionEyebrow({
  children,
  tone = "blue",
  style,
}: {
  children: ReactNode;
  tone?: keyof typeof TONES;
  style?: CSSProperties;
}) {
  const t = TONES[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "6px 14px",
        borderRadius: "999px",
        background: t.background,
        color: t.color,
        fontSize: "12px",
        fontWeight: "600",
        letterSpacing: "0.8px",
        marginBottom: "16px",
        ...style,
      }}
    >
      <span
        style={{
          width: "7px",
          height: "7px",
          flex: "0 0 auto",
          borderRadius: "999px",
          background: t.dot,
          boxShadow: t.dotShadow,
          animation: "2.4s ease-in-out 0s infinite normal none running fl-dot",
        }}
      />
      {children}
    </span>
  );
}
