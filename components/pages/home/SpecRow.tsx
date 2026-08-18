export default function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "12px 0px", borderTop: "1px solid rgb(243, 244, 246)" }}>
      <span style={{ fontSize: "13px", color: "rgb(107, 114, 128)" }}>
        <span className="sc-interp">{label}</span>
      </span>
      <span style={{ fontSize: "13px", fontWeight: "600", color: "rgb(13, 21, 38)", textAlign: "right" }}>
        <span className="sc-interp">{value}</span>
      </span>
    </div>
  );
}
