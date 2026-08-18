export default function ComparisonRow({
  milestone,
  buildValue,
  fideValue,
}: {
  milestone: string;
  buildValue: string;
  fideValue: string;
}) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0px, 1.4fr) minmax(0px, 1fr) minmax(0px, 1fr)", gap: "0px", padding: "16px 24px", borderTop: "1px solid rgb(229, 231, 235)", alignItems: "center" }}>
      <span style={{ fontSize: "16px", fontWeight: "600", color: "rgb(13, 21, 38)" }}>
        <span className="sc-interp">
          {milestone}
        </span>
      </span>
      <span style={{ fontSize: "16px", fontWeight: "400", color: "rgb(107, 114, 128)", textAlign: "right" }}>
        <span className="sc-interp">
          {buildValue}
        </span>
      </span>
      <span style={{ fontSize: "16px", fontWeight: "600", color: "rgb(13, 148, 136)", textAlign: "right" }}>
        <span className="sc-interp">
          {fideValue}
        </span>
      </span>
    </div>
  );
}
