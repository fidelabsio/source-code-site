export default function PrerequisiteCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="fl-fd-scp8" style={{ flex: "0 1 auto", width: "calc(25% - 15px)", minWidth: "250px", background: "rgb(255, 255, 255)", border: "1px solid rgb(229, 231, 235)", borderRadius: "16px", padding: "24px", display: "flex", gap: "13px", alignItems: "flex-start", transition: "transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.28s, border-color 0.28s" }}>
      <span style={{ flex: "0 0 auto", marginTop: "2px", color: "rgb(13, 148, 136)" }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <div>
        <div style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "15.5px", fontWeight: "700", color: "rgb(13, 21, 38)", marginBottom: "5px" }}>
          {title}
        </div>
        <div style={{ fontSize: "13.5px", lineHeight: "1.6", color: "rgb(107, 114, 128)" }}>
          {description}
        </div>
      </div>
    </div>
  );
}
