export default function ReasonRow({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", padding: "24px 0px", borderTop: "1px solid rgb(243, 244, 246)" }}>
      <div style={{ flex: "0 0 auto", width: "46px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "28px", lineHeight: "1.28", fontWeight: "800", letterSpacing: "-1px", color: "rgb(13, 148, 136)" }}>
        {number}
      </div>
      <div>
        <div style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "18px", lineHeight: "1.3", fontWeight: "700", color: "rgb(13, 21, 38)", marginBottom: "7px" }}>
          {title}
        </div>
        <p style={{ fontSize: "14px", lineHeight: "1.7", color: "rgb(107, 114, 128)", margin: "0px", maxWidth: "760px" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
