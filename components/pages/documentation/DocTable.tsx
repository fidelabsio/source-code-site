export default function DocTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div style={{ margin: "6px 0px 22px", border: "1px solid rgb(229, 231, 235)", borderRadius: "14px", overflow: "hidden", boxShadow: "rgba(13, 21, 38, 0.24) 0px 12px 28px -22px" }}>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13.5px" }}>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} style={{ textAlign: "left", padding: "13px 16px", background: "rgb(249, 250, 251)", borderBottom: "1px solid rgb(229, 231, 235)", fontWeight: "700", color: "rgb(13, 21, 38)", whiteSpace: "nowrap" }}>
                  <span className="sc-interp">{header}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: "13px 16px", borderBottom: "1px solid rgb(243, 244, 246)", color: "rgb(55, 65, 81)", verticalAlign: "top" }}>
                    <span className="sc-interp">{cell}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
