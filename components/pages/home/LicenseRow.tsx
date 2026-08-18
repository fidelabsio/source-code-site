export default function LicenseRow({
  mark,
  title,
  description,
}: {
  mark: "check" | "cross";
  title: string;
  description: string;
}) {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "11px 0px", borderTop: "1px solid rgb(243, 244, 246)" }}>
      <span style={{ color: mark === "check" ? "rgb(20, 184, 166)" : "rgb(220, 38, 38)", fontSize: "12px", marginTop: "2px" }}>
        <span className="sc-interp">{mark === "check" ? "✓" : "✕"}</span>
      </span>
      <div>
        <div style={{ fontSize: "13.5px", fontWeight: "600", color: "rgb(13, 21, 38)" }}>
          <span className="sc-interp">{title}</span>
        </div>
        <div style={{ fontSize: "12.5px", color: "rgb(107, 114, 128)", lineHeight: "1.5" }}>
          <span className="sc-interp">{description}</span>
        </div>
      </div>
    </div>
  );
}
