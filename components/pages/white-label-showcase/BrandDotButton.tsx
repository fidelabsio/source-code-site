export default function BrandDotButton({
  dotColor,
  label,
  active,
}: {
  dotColor: string;
  label: string;
  active: boolean;
}) {
  return (
    <button
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "9px",
        padding: "11px 20px",
        borderRadius: "999px",
        fontFamily: "Geist, sans-serif",
        fontSize: "13.5px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "0.22s cubic-bezier(0.2, 0.8, 0.2, 1)",
        background: "rgb(255, 255, 255)",
        border: active ? "1px solid rgb(20, 184, 166)" : "1px solid rgb(229, 231, 235)",
        color: active ? "rgb(13, 21, 38)" : "rgb(107, 114, 128)",
        boxShadow: active ? "rgba(20, 184, 166, 0.533) 0px 8px 20px -12px" : "none",
      }}
    >
      <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: dotColor, display: "inline-block" }} />
      <span className="sc-interp">{label}</span>
    </button>
  );
}
