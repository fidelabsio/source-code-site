import type { ReactNode } from "react";

export default function Eyebrow({
  background,
  color,
  dotColor,
  dotShadow,
  marginBottom = "16px",
  children,
}: {
  background: string;
  color: string;
  dotColor: string;
  dotShadow: string;
  marginBottom?: string;
  children: ReactNode;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "6px 14px",
        borderRadius: "999px",
        background,
        color,
        fontSize: "11px",
        fontWeight: "600",
        letterSpacing: "0.8px",
        marginBottom,
      }}
    >
      <span
        style={{
          width: "7px",
          height: "7px",
          flex: "0 0 auto",
          borderRadius: "999px",
          background: dotColor,
          boxShadow: dotShadow,
          animation: "2.4s ease-in-out 0s infinite normal none running fl-dot",
        }}
      />
      {children}
    </span>
  );
}
