import type { ReactNode } from "react";

export default function PreviewCard({
  headerLeft,
  headerRight,
  children,
}: {
  headerLeft: ReactNode;
  headerRight: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        background: "rgb(255, 255, 255)",
        border: "1px solid rgb(229, 231, 235)",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "box-shadow 0.4s",
        boxShadow: "rgba(20, 184, 166, 0.467) 0px 20px 44px -26px",
      }}
    >
      <div style={{ padding: "16px 18px", borderBottom: "1px solid rgb(243, 244, 246)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {headerLeft}
        {headerRight}
      </div>
      <div style={{ padding: "18px" }}>{children}</div>
    </div>
  );
}
