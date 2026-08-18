import type { ReactNode } from "react";

export default function GradientButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "16px 28px",
        borderRadius: "999px",
        background: "linear-gradient(135deg, rgb(3, 162, 145), rgb(47, 84, 235))",
        color: "rgb(255, 255, 255)",
        fontSize: "15px",
        fontWeight: "600",
        boxShadow: "rgba(20, 184, 166, 0.3) 0px 6px 20px",
        transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.18s",
      }}
    >
      {children}
    </a>
  );
}
