export default function ConfigJsonLine({
  fieldKey,
  value,
  valueColor,
  trailingComma,
}: {
  fieldKey: string;
  value: string;
  valueColor: string;
  trailingComma: boolean;
}) {
  return (
    <div style={{ paddingLeft: "12px", fontSize: "14px" }}>
      <span style={{ color: "rgb(20, 184, 166)" }}>{`"${fieldKey}"`}</span>
      {": "}
      <span style={{ color: valueColor }}>
        {'"'}
        <span className="sc-interp">{value}</span>
        {'"'}
      </span>
      {trailingComma ? "," : null}
    </div>
  );
}
