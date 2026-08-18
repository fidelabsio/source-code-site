import type { ReactNode } from "react";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export type LegalSection = {
  number: string;
  title: string;
  blocks: LegalBlock[];
};

const INLINE_PATTERN = /\*\*(.+?)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g;

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = INLINE_PATTERN.exec(text))) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));

    if (match[1] !== undefined) {
      nodes.push(<strong key={`${keyPrefix}-${i}`}>{match[1]}</strong>);
    } else if (match[2] !== undefined) {
      nodes.push(
        <code
          key={`${keyPrefix}-${i}`}
          style={{ background: "rgb(243, 244, 246)", border: "1px solid rgb(229, 231, 235)", borderRadius: 4, padding: "1px 6px", fontSize: "0.92em" }}
        >
          {match[2]}
        </code>
      );
    } else if (match[3] !== undefined) {
      nodes.push(
        <a key={`${keyPrefix}-${i}`} href={match[4]} style={{ color: "rgb(13, 148, 136)", fontWeight: 600 }}>
          {match[3]}
        </a>
      );
    }

    lastIndex = INLINE_PATTERN.lastIndex;
    i++;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

function renderMultiline(text: string, keyPrefix: string): ReactNode[] {
  const lines = text.split("\n");
  const nodes: ReactNode[] = [];
  lines.forEach((line, idx) => {
    if (idx > 0) nodes.push(<br key={`${keyPrefix}-br-${idx}`} />);
    nodes.push(...renderInline(line, `${keyPrefix}-${idx}`));
  });
  return nodes;
}

const paragraphStyle = { fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" };
const listStyle = { margin: "0px 0px 12px", paddingLeft: "20px", display: "flex", flexDirection: "column" as const, gap: "6px" };
const listItemStyle = { fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" };
const h3Style = { fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "-0.3px", margin: "22px 0px 10px", color: "rgb(13, 21, 38)" };

function LegalTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div style={{ margin: "6px 0px 20px", border: "1px solid rgb(229, 231, 235)", borderRadius: "14px", overflow: "hidden", boxShadow: "rgba(13, 21, 38, 0.24) 0px 12px 28px -22px" }}>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13.5px" }}>
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th key={i} style={{ textAlign: "left", padding: "13px 16px", background: "rgb(249, 250, 251)", borderBottom: "1px solid rgb(229, 231, 235)", fontWeight: 700, color: "rgb(13, 21, 38)" }}>
                  {renderInline(header, `th-${i}`)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: "13px 16px", borderBottom: "1px solid rgb(243, 244, 246)", color: "rgb(55, 65, 81)", verticalAlign: "top" }}>
                    {renderMultiline(cell, `td-${i}-${j}`)}
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

export function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "p") {
          return (
            <p key={i} style={paragraphStyle}>
              {renderMultiline(block.text, `p-${i}`)}
            </p>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} style={listStyle}>
              {block.items.map((item, j) => (
                <li key={j} style={listItemStyle}>
                  {renderInline(item, `li-${i}-${j}`)}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={i} style={h3Style}>
              {renderInline(block.text, `h3-${i}`)}
            </h3>
          );
        }
        if (block.type === "quote") {
          return (
            <div
              key={i}
              style={{ display: "flex", gap: "12px", margin: "6px 0px 20px", padding: "14px 18px", borderRadius: "12px", border: "1px solid rgb(199, 210, 254)", background: "rgb(240, 243, 255)" }}
            >
              <div style={{ fontSize: "14px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>{renderInline(block.text, `quote-${i}`)}</div>
            </div>
          );
        }
        if (block.type === "table") {
          return <LegalTable key={i} headers={block.headers} rows={block.rows} />;
        }
        return null;
      })}
    </>
  );
}
