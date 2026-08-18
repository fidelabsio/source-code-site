const TONES = {
  dark: { iconColor: "rgb(127, 243, 228)", textColor: "rgba(255, 255, 255, 0.88)", fontSize: "13.5px" },
  light: { iconColor: "rgb(20, 184, 166)", textColor: "rgb(55, 65, 81)", fontSize: "13px" },
};

export default function ReceiveListRow({ text, tone }: { text: string; tone: "dark" | "light" }) {
  const t = TONES[tone];
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "9px", fontSize: t.fontSize, lineHeight: "1.5", color: t.textColor }}>
      <span style={{ color: t.iconColor, fontSize: "11px", marginTop: "2px" }}>✓</span>
      <span className="sc-interp">{text}</span>
    </div>
  );
}
