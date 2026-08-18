export default function DocChecklist({ items }: { items: string[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "4px 0px 18px" }}>
      {items.map((item) => (
        <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
          <span style={{ flex: "0 0 auto", marginTop: "1px", color: "rgb(13, 148, 136)" }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <span style={{ fontSize: "14.5px", lineHeight: "1.6", color: "rgb(55, 65, 81)" }}>
            <span className="sc-interp">{item}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
