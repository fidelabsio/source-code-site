import type { ReactNode } from "react";
import IconTile from "@/components/ui/IconTile";

export default function HeroFeature({
  icon,
  fontSize,
  line1,
  line2,
}: {
  icon: ReactNode;
  fontSize: string;
  line1: string;
  line2: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
      <IconTile size={44}>{icon}</IconTile>
      <div style={{ fontSize, fontWeight: "600", lineHeight: "1.35", color: "rgb(13, 21, 38)" }}>
        {line1}
        <br />
        {line2}
      </div>
    </div>
  );
}
