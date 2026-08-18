export default function FormField({
  id,
  label,
  type,
  placeholder,
  fullWidth,
  rows,
}: {
  id: string;
  label: string;
  type: "text" | "email" | "url" | "textarea";
  placeholder: string;
  fullWidth?: boolean;
  rows?: number;
}) {
  return (
    <div style={{ gridColumn: fullWidth ? "1 / -1" : "auto", display: "flex", flexDirection: "column", gap: "7px" }}>
      <label htmlFor={id} style={{ fontSize: "12.5px", fontWeight: "600", color: "rgb(55, 65, 81)", letterSpacing: "0.2px" }}>
        {`${label} `}
        <span aria-hidden="true" style={{ color: "rgb(220, 38, 38)", fontWeight: "600" }}>
          *
        </span>
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          required
          rows={rows}
          placeholder={placeholder}
          className="fl-ct-scp5"
          style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1px solid rgb(229, 231, 235)", background: "rgb(255, 255, 255)", fontFamily: "Geist, system-ui, sans-serif", fontSize: "14px", lineHeight: "1.6", color: "rgb(13, 21, 38)", outline: "none", resize: "vertical", transition: "border-color 0.18s, box-shadow 0.18s" }}
        />
      ) : (
        <input
          id={id}
          name={id}
          required
          type={type}
          placeholder={placeholder}
          className="fl-ct-scp5"
          style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1px solid rgb(229, 231, 235)", background: "rgb(255, 255, 255)", fontFamily: "Geist, system-ui, sans-serif", fontSize: "14px", color: "rgb(13, 21, 38)", outline: "none", transition: "border-color 0.18s, box-shadow 0.18s" }}
        />
      )}
    </div>
  );
}
