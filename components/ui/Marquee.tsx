export default function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items];
  return (
    <div style={{ display: "flex", width: "max-content", gap: "0px", animation: "30s linear 0s infinite normal none running fl-marquee" }}>
      {track.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "0px 28px" }}>
          <span style={{ color: "rgb(20, 184, 166)", fontSize: "12px" }}>◆</span>
          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "15px", fontWeight: "600", color: "rgb(229, 231, 235)", whiteSpace: "nowrap" }}>
            <span className="sc-interp">{item}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
