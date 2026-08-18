export default function TimelineStep({
  number,
  title,
  description,
  showConnector,
}: {
  number: string;
  title: string;
  description: string;
  showConnector: boolean;
}) {
  return (
    <div style={{ display: "flex", gap: "22px" }}>
      <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", width: "34px" }}>
        <div style={{ width: "34px", height: "34px", borderRadius: "999px", background: "rgb(255, 255, 255)", border: "2px solid rgb(20, 184, 166)", color: "rgb(13, 148, 136)", fontSize: "13px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {number}
        </div>
        {showConnector && (
          <div style={{ flex: "1 1 0%", width: "2px", background: "linear-gradient(rgb(20, 184, 166), rgb(47, 84, 235))", opacity: "0.35", margin: "6px 0px" }} />
        )}
      </div>
      <div style={{ paddingTop: "6px", paddingBottom: showConnector ? "32px" : "0px" }}>
        <div style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "18px", lineHeight: "1.3", fontWeight: "700", color: "rgb(13, 21, 38)", marginBottom: "7px" }}>
          {title}
        </div>
        <p style={{ fontSize: "14px", lineHeight: "1.7", color: "rgb(107, 114, 128)", margin: "0px", maxWidth: "700px" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
