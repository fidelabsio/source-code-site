export default function StatTile({
  value,
  unit,
  label,
  className,
}: {
  value: string;
  unit: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{ background: "rgb(249, 250, 251)", border: "1px solid rgb(243, 244, 246)", borderRadius: "16px", padding: "28px 24px", transition: "transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.2s" }}
    >
      <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "32px", fontWeight: "800", letterSpacing: "-1.2px", marginBottom: "8px", color: "rgb(47, 84, 235)" }}>
        <span className="sc-interp">{value}</span>
        <span style={{ fontSize: "24px" }}>
          <span className="sc-interp">{unit}</span>
        </span>
      </div>
      <div style={{ fontSize: "13px", lineHeight: "1.45", color: "rgb(107, 114, 128)" }}>
        <span className="sc-interp">{label}</span>
      </div>
    </div>
  );
}
