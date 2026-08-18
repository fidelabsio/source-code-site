export default function ExcludedRow({ text }: { text: string }) {
  return (
    <div className="fl-ix-scpf" style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "default" }}>
      <span style={{ position: "relative", flex: "0 0 auto", width: "30px", height: "30px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--x-bg,#FEE2E280)", color: "rgb(220, 38, 38)", fontSize: "12px", fontWeight: "700", transition: "background 0.2s, transform 0.2s", transform: "scale(var(--x-scale,1))" }}>
        {"✕\n"}
        <span style={{ position: "absolute", inset: "0px", borderRadius: "999px", border: "1.5px solid rgb(220, 38, 38)", opacity: "0", pointerEvents: "none" }} />
      </span>
      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "rgb(55, 65, 81)" }}>
        <span className="sc-interp">{text}</span>
      </span>
    </div>
  );
}
