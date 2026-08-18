import type { CSSProperties, ReactNode } from "react";

export default function IconTile({
  children,
  size = 40,
  radius = 12,
  background = "rgb(224, 250, 248)",
  color = "rgb(13, 148, 136)",
  style,
}: {
  children: ReactNode;
  size?: number;
  radius?: number;
  background?: string;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        flex: "0 0 auto",
        borderRadius: `${radius}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background,
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
