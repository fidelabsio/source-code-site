export default function ConfigFileButton({ label, active }: { label: string; active: boolean }) {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "13px 16px",
        borderRadius: "10px",
        fontFamily: "ui-monospace, Menlo, monospace",
        fontSize: "12.5px",
        fontWeight: "500",
        textAlign: "left",
        cursor: "pointer",
        transition: "0.2s cubic-bezier(0.2, 0.8, 0.2, 1)",
        background: active ? "rgba(20, 184, 166, 0.14)" : "rgba(255, 255, 255, 0.04)",
        border: active ? "1px solid rgba(20, 184, 166, 0.5)" : "1px solid rgb(31, 41, 55)",
        color: active ? "rgb(206, 255, 251)" : "rgb(156, 163, 175)",
      }}
    >
      <span style={{ fontSize: "11px", opacity: "0.7" }}>◻</span>
      <span className="sc-interp">{label}</span>
    </button>
  );
}
