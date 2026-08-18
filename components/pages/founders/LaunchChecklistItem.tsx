export default function LaunchChecklistItem({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
      <span style={{ flex: "0 0 auto", marginTop: "1px", color: "rgb(13, 148, 136)" }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <span style={{ fontSize: "14px", lineHeight: "1.55", color: "rgb(55, 65, 81)" }}>
        {text}
      </span>
    </div>
  );
}
