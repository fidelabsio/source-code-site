export default function NumberedProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="fl-ix-scpa" style={{ background: "rgb(255, 255, 255)", border: "1px solid rgb(229, 231, 235)", borderRadius: "16px", padding: "28px", transition: "transform 0.22s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.22s" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <span style={{ position: "relative", width: "32px", height: "32px", flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ position: "absolute", inset: "-6px", borderRadius: "12px", border: "1px dashed rgba(13, 148, 136, 0.5)", animation: "9s linear 0s infinite normal none running fl-spin" }} />
          <span style={{ width: "32px", height: "32px", borderRadius: "999px", background: "rgb(224, 250, 248)", color: "rgb(13, 148, 136)", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="sc-interp">{number}</span>
          </span>
        </span>
        <span style={{ height: "1px", flex: "1 1 0%", background: "rgb(229, 231, 235)" }} />
      </div>
      <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "18px", fontWeight: "700", margin: "0px 0px 8px", color: "rgb(13, 21, 38)", overflowWrap: "anywhere" }}>
        <span className="sc-interp">{title}</span>
      </h3>
      <p style={{ fontSize: "14px", lineHeight: "1.6", color: "rgb(107, 114, 128)", margin: "0px" }}>
        <span className="sc-interp">{description}</span>
      </p>
    </div>
  );
}
