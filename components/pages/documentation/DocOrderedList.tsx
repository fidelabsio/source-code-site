export default function DocOrderedList({ items }: { items: string[] }) {
  return (
    <ol style={{ margin: "4px 0px 16px", padding: "0px 0px 0px 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
      {items.map((item) => (
        <li key={item} style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
          <span className="sc-interp">{item}</span>
        </li>
      ))}
    </ol>
  );
}
