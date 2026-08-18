export default function TrustBadge({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap" }}>
      <span style={{ width: "22px", height: "22px", flex: "0 0 auto", borderRadius: "999px", background: "rgb(13, 148, 136)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 12.5 4.5 4.5L19 7" />
        </svg>
      </span>
      <span style={{ fontSize: "15px", fontWeight: "500", color: "rgb(13, 21, 38)" }}>
        {label}
      </span>
    </div>
  );
}
