export default function BrandSwitchButton({
  dotColor,
  label,
  active,
  onClick,
}: {
  dotColor: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "9px",
        padding: "10px 18px",
        borderRadius: "999px",
        fontFamily: "Geist, sans-serif",
        fontSize: "13px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "0.2s cubic-bezier(0.2, 0.8, 0.2, 1)",
        background: active ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.06)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: active ? dotColor : "rgb(31, 41, 55)",
        color: active ? "rgb(13, 21, 38)" : "rgb(156, 163, 175)",
      }}
    >
      <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: dotColor, display: "inline-block" }} />
      <span className="sc-interp">{label}</span>
    </button>
  );
}
