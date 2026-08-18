export default function ChecklistRow({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{ display: "flex", alignItems: "center", gap: "9px", fontSize: "13px", color: "rgb(55, 65, 81)", transition: "transform 0.2s, color 0.2s" }}
    >
      <span style={{ color: "rgb(20, 184, 166)", fontSize: "11px" }}>✓</span>
      <span className="sc-interp">{text}</span>
    </div>
  );
}
