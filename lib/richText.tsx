import type { ReactNode } from "react";

const INLINE_PATTERN = /\*\*(.+?)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)|\bQ(\d+)\b/g;

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
          style={{ background: "#F3F4F6", border: "1px solid #E5E7EB", borderRadius: 4, padding: "1px 6px", fontSize: "0.92em" }}
        >
          {match[2]}
        </code>
      );
    } else if (match[3] !== undefined) {
      nodes.push(
        <a key={`${keyPrefix}-${i}`} href={match[4]} style={{ color: "#0D9488", fontWeight: 600, textDecoration: "underline" }}>
          {match[3]}
        </a>
      );
    } else if (match[5] !== undefined) {
      nodes.push(
        <a key={`${keyPrefix}-${i}`} href={`#q-${match[5]}`} style={{ color: "#2F54EB", fontWeight: 600 }}>
          Q{match[5]}
        </a>
      );
    }

    lastIndex = INLINE_PATTERN.lastIndex;
    i++;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

const paragraphStyle = { fontSize: 14.5, lineHeight: 1.7, color: "#4B5563", margin: "0 0 10px" };
const listStyle = { margin: "0 0 10px", paddingLeft: 20, display: "flex", flexDirection: "column" as const, gap: 6 };
const listItemStyle = { fontSize: 14.5, lineHeight: 1.7, color: "#4B5563" };

export function renderAnswer(raw: string): ReactNode {
  const lines = raw
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const ulMatch = /^-\s+(.*)/.exec(lines[i]);
    const olMatch = /^\d+\.\s+(.*)/.exec(lines[i]);

    if (ulMatch) {
      const items: string[] = [];
      while (i < lines.length) {
        const m = /^-\s+(.*)/.exec(lines[i]);
        if (!m) break;
        items.push(m[1]);
        i++;
      }
      blocks.push(
        <ul key={`ul-${key}`} style={listStyle}>
          {items.map((it, idx) => (
            <li key={idx} style={listItemStyle}>
              {renderInline(it, `ul-${key}-${idx}`)}
            </li>
          ))}
        </ul>
      );
      key++;
      continue;
    }

    if (olMatch) {
      const items: string[] = [];
      while (i < lines.length) {
        const m = /^\d+\.\s+(.*)/.exec(lines[i]);
        if (!m) break;
        items.push(m[1]);
        i++;
      }
      blocks.push(
        <ol key={`ol-${key}`} style={listStyle}>
          {items.map((it, idx) => (
            <li key={idx} style={listItemStyle}>
              {renderInline(it, `ol-${key}-${idx}`)}
            </li>
          ))}
        </ol>
      );
      key++;
      continue;
    }

    blocks.push(
      <p key={`p-${key}`} style={paragraphStyle}>
        {renderInline(lines[i], `p-${key}`)}
      </p>
    );
    key++;
    i++;
  }

  return blocks;
}
