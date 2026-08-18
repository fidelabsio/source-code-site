export default function CodeLine({ text, color }: { text: string; color: string }) {
  return (
    <div style={{ whiteSpace: "pre", color }}>
      <span className="sc-interp">{text}</span>
    </div>
  );
}
