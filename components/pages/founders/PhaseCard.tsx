import IconTile from "@/components/ui/IconTile";

export default function PhaseCard({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="fl-fd-scp8" style={{ position: "relative", background: "rgb(255, 255, 255)", border: "1px solid rgb(229, 231, 235)", borderRadius: "16px", padding: "28px", transition: "transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.28s, border-color 0.28s" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <IconTile
          size={38}
          radius={11}
          style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "14px", fontWeight: "700" }}
        >
          {number}
        </IconTile>
        <h3 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "16px", fontWeight: "700", margin: "0px", color: "rgb(13, 21, 38)" }}>
          {title}
        </h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
        {items.map((item) => (
          <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "9px", fontSize: "13px", lineHeight: "1.55", color: "rgb(55, 65, 81)" }}>
            <span style={{ color: "rgb(156, 163, 175)", fontSize: "11px", marginTop: "2px" }}>
              ›
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
