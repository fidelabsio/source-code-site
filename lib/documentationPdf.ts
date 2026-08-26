import { Document, Image, Page, StyleSheet, Text, View, Link, renderToBuffer } from "@react-pdf/renderer";
import * as React from "react";
import path from "path";
import { serializePdfRender } from "@/lib/pdfRenderQueue";

const LOGO_PATH = path.join(process.cwd(), "public", "email-assets", "logo-header.png");

/* ============================================================================
 * Parser for the Notion-flavored markup used in content/documentation/*.txt.
 * Supports: # / ## / ### / #### headings, **bold**, `code`, [text](url) links,
 * "- " bullet lists (one tab of indent = one nesting level), "N. " numbered
 * lists (the literal number from the source is kept, since Notion's own
 * numbering sometimes restarts around an interruption), "- [ ]"/"- [x]"
 * checklists, "| ... |"-free HTML-ish <table><tr><td> blocks (<colgroup> is
 * ignored), <callout icon="" color=""> boxes (recursively parsed — a callout
 * can contain its own bullet list), fenced ``` code blocks, "> " blockquotes,
 * "---" rules, and "![](...)" images (rendered as an omitted-screenshot
 * placeholder, since the referenced Notion attachments aren't available here).
 * ========================================================================== */

export type InlineRun = { text: string; bold?: boolean; code?: boolean; link?: string };

export type DocumentationBlock =
  | { type: "heading"; level: 1 | 2 | 3 | 4; runs: InlineRun[] }
  | { type: "paragraph"; runs: InlineRun[] }
  | { type: "bullet-list"; items: { runs: InlineRun[]; indent: number }[] }
  | { type: "numbered-list"; items: { number: string; runs: InlineRun[]; indent: number }[] }
  | { type: "checklist"; items: { checked: boolean; runs: InlineRun[] }[] }
  | { type: "table"; header: InlineRun[][]; rows: InlineRun[][][] }
  | { type: "callout"; icon: string; color: string; blocks: DocumentationBlock[] }
  | { type: "quote"; runs: InlineRun[] }
  | { type: "code"; lang: string; text: string }
  | { type: "rule" }
  | { type: "image" };

// The standard 14 PDF fonts (Helvetica) only support WinAnsi-encoded glyphs —
// no emoji, no arrow characters. Notion's raw text is full of both, so every
// run of text is sanitized before rendering: arrows become "->" and
// emoji/dingbats are dropped. Em-dash, curly quotes, ellipsis, and bullet are
// all within WinAnsi and are left alone.
function sanitizeText(text: string): string {
  return text
    .replace(/[←-⇿]/gu, "->") // arrow block (incl. →) -> ASCII arrow
    .replace(/[☀-➿\u{1f000}-\u{1ffff}️‍]/gu, "") // dingbats/emoji/variation selectors/ZWJ
    .replace(/[ \t]{2,}/g, " ");
}

function parseInline(rawText: string): InlineRun[] {
  const runs: InlineRun[] = [];
  const text = sanitizeText(rawText);
  const regex = /\*\*(.+?)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      runs.push({ text: text.slice(lastIndex, match.index) });
    }
    if (match[1] !== undefined) {
      runs.push({ text: match[1], bold: true });
    } else if (match[2] !== undefined) {
      runs.push({ text: match[2], code: true });
    } else {
      const linkText = match[3];
      const url = match[4];
      runs.push({ text: linkText, link: /^https?:|^mailto:/.test(url) ? url : undefined });
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    runs.push({ text: text.slice(lastIndex) });
  }
  return runs;
}

function stripIndent(line: string): { indent: number; content: string } {
  let indent = 0;
  let i = 0;
  while (line[i] === "\t") {
    indent++;
    i++;
  }
  return { indent, content: line.slice(i) };
}

export function parseDocumentationBody(source: string): DocumentationBlock[] {
  const lines = source.split("\n");
  return parseBlockLines(lines);
}

function parseBlockLines(lines: string[]): DocumentationBlock[] {
  const blocks: DocumentationBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const { content } = stripIndent(lines[i]);
    const trimmed = content.trim();

    if (trimmed === "") {
      i++;
      continue;
    }

    if (trimmed === "---") {
      blocks.push({ type: "rule" });
      i++;
      continue;
    }

    if (trimmed === "<table_of_contents/>" || trimmed === "<empty-block/>") {
      i++;
      continue;
    }

    const fenceMatch = trimmed.match(/^```(\w*)$/);
    if (fenceMatch) {
      const lang = fenceMatch[1] || "";
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && lines[i].trim() !== "```") {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      blocks.push({ type: "code", lang, text: codeLines.join("\n") });
      continue;
    }

    const calloutOpen = trimmed.match(/^<callout icon="([^"]*)"(?:\s+color="([^"]*)")?\s*>$/);
    if (calloutOpen) {
      const icon = calloutOpen[1];
      const color = calloutOpen[2] || "gray_bg";
      const innerLines: string[] = [];
      i++;
      while (i < lines.length && lines[i].trim() !== "</callout>") {
        innerLines.push(lines[i]);
        i++;
      }
      i++;
      const dedented = innerLines.map((l) => (l.startsWith("\t") ? l.slice(1) : l));
      blocks.push({ type: "callout", icon, color, blocks: parseBlockLines(dedented) });
      continue;
    }

    if (/^<table\b/.test(trimmed)) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim() !== "</table>") {
        tableLines.push(lines[i].trim());
        i++;
      }
      i++;
      const rows: string[][] = [];
      let currentRow: string[] | null = null;
      for (const l of tableLines) {
        if (l === "<tr>") {
          currentRow = [];
          continue;
        }
        if (l === "</tr>") {
          if (currentRow) rows.push(currentRow);
          currentRow = null;
          continue;
        }
        const tdMatch = l.match(/^<td>(.*)<\/td>$/);
        if (tdMatch && currentRow) {
          currentRow.push(tdMatch[1]);
        }
      }
      const header = rows[0] || [];
      const body = rows.slice(1);
      blocks.push({
        type: "table",
        header: header.map(parseInline),
        rows: body.map((r) => r.map(parseInline)),
      });
      continue;
    }

    if (trimmed.startsWith(">")) {
      const quoteParts: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteParts.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({ type: "quote", runs: parseInline(quoteParts.join(" ")) });
      continue;
    }

    if (/^!\[.*\]\(.*\)$/.test(trimmed)) {
      blocks.push({ type: "image" });
      i++;
      continue;
    }

    const heading = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length as 1 | 2 | 3 | 4;
      blocks.push({ type: "heading", level, runs: parseInline(heading[2]) });
      i++;
      continue;
    }

    if (/^-\s\[( |x|X)\]\s+/.test(trimmed)) {
      const items: { checked: boolean; runs: InlineRun[] }[] = [];
      while (i < lines.length) {
        const t2 = stripIndent(lines[i]).content.trim();
        const m2 = t2.match(/^-\s\[( |x|X)\]\s+(.+)$/);
        if (!m2) break;
        items.push({ checked: m2[1].toLowerCase() === "x", runs: parseInline(m2[2]) });
        i++;
      }
      blocks.push({ type: "checklist", items });
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const items: { runs: InlineRun[]; indent: number }[] = [];
      while (i < lines.length) {
        const { indent, content: c2 } = stripIndent(lines[i]);
        const t2 = c2.trim();
        if (t2 === "") break;
        const m2 = t2.match(/^[-*]\s+(.+)$/);
        if (!m2) break;
        items.push({ runs: parseInline(m2[1]), indent: Math.min(indent, 1) });
        i++;
      }
      blocks.push({ type: "bullet-list", items });
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items: { number: string; runs: InlineRun[]; indent: number }[] = [];
      while (i < lines.length) {
        const { indent, content: c2 } = stripIndent(lines[i]);
        const t2 = c2.trim();
        if (t2 === "") break;
        const m2 = t2.match(/^(\d+)\.\s+(.+)$/);
        if (!m2) break;
        items.push({ number: m2[1], runs: parseInline(m2[2]), indent: Math.min(indent, 1) });
        i++;
      }
      blocks.push({ type: "numbered-list", items });
      continue;
    }

    blocks.push({ type: "paragraph", runs: parseInline(trimmed) });
    i++;
  }

  return blocks;
}

// Notion's callout icon is almost always an emoji, which the standard PDF
// fonts can't render (see sanitizeText above) — so the box uses a plain-text
// label derived from the callout's color instead of the icon glyph.
const CALLOUT_COLORS: Record<string, { bg: string; border: string; label: string }> = {
  blue_bg: { bg: "#eff6ff", border: "#93c5fd", label: "NOTE" },
  yellow_bg: { bg: "#fffbeb", border: "#fbbf24", label: "WARNING" },
  red_bg: { bg: "#fef2f2", border: "#fca5a5", label: "IMPORTANT" },
  gray_bg: { bg: "#f9fafb", border: "#d1d5db", label: "INFO" },
  purple_bg: { bg: "#f5f3ff", border: "#c4b5fd", label: "SEE ALSO" },
};

const styles = StyleSheet.create({
  page: { padding: 44, fontSize: 9.5, fontFamily: "Helvetica", lineHeight: 1.4, color: "#0b1c30" },
  logo: { width: 100, height: 26, marginBottom: 14 },
  title: { fontSize: 17, fontFamily: "Helvetica-Bold", marginBottom: 4 },
  subtitle: { fontSize: 8.5, color: "#666666", marginBottom: 16 },
  heading1: { fontSize: 13, fontFamily: "Helvetica-Bold", marginTop: 14, marginBottom: 6, color: "#0d1526" },
  heading2: { fontSize: 11, fontFamily: "Helvetica-Bold", marginTop: 10, marginBottom: 5, color: "#0d1526" },
  heading3: { fontSize: 10, fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 4, color: "#0d1526" },
  heading4: { fontSize: 9.5, fontFamily: "Helvetica-Bold", marginTop: 6, marginBottom: 3, color: "#0d1526" },
  paragraph: { marginBottom: 6, textAlign: "justify" },
  bold: { fontFamily: "Helvetica-Bold" },
  code: { fontFamily: "Courier" },
  link: { color: "#2f54eb", textDecoration: "underline" },
  listItem: { flexDirection: "row", marginBottom: 3 },
  listItemIndent: { flexDirection: "row", marginBottom: 3, paddingLeft: 16 },
  listMarker: { width: 16 },
  listText: { flex: 1, textAlign: "justify" },
  checkbox: { width: 16 },
  quoteBox: {
    marginTop: 4,
    marginBottom: 8,
    padding: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#93c5fd",
    backgroundColor: "#f7f9fc",
  },
  ruleLine: { marginTop: 10, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: "#e5e7eb" },
  imagePlaceholder: {
    marginTop: 4,
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "#fafafa",
  },
  imagePlaceholderText: { fontSize: 8, fontStyle: "italic", color: "#9ca3af", textAlign: "center" },
  codeBox: {
    marginTop: 4,
    marginBottom: 8,
    padding: 8,
    backgroundColor: "#0d1526",
    borderRadius: 3,
  },
  codeLine: { fontFamily: "Courier", fontSize: 7.8, color: "#e5e7eb", lineHeight: 1.35 },
  table: { marginTop: 4, marginBottom: 8, borderWidth: 1, borderColor: "#d1d5db" },
  tableRow: { flexDirection: "row" },
  tableCellHeader: {
    flex: 1,
    padding: 5,
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    backgroundColor: "#f2f6fe",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#d1d5db",
  },
  tableCell: {
    flex: 1,
    padding: 5,
    fontSize: 8.5,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#d1d5db",
  },
  calloutLabel: { fontSize: 7.5, fontFamily: "Helvetica-Bold", letterSpacing: 0.5, marginBottom: 3, color: "#4b5563" },
});

function InlineText({ runs }: { runs: InlineRun[] }) {
  return React.createElement(
    React.Fragment,
    null,
    runs.map((run, i) => {
      const style = [run.bold ? styles.bold : null, run.code ? styles.code : null, run.link ? styles.link : null].filter(
        (s): s is NonNullable<typeof s> => s !== null
      );
      if (run.link) {
        return React.createElement(Link, { key: i, src: run.link, style }, run.text);
      }
      return React.createElement(Text, { key: i, style: style.length ? style : undefined }, run.text);
    })
  );
}

function renderBlock(block: DocumentationBlock, key: string | number): React.ReactNode {
  switch (block.type) {
    case "heading": {
      const style =
        block.level === 1 ? styles.heading1 : block.level === 2 ? styles.heading2 : block.level === 3 ? styles.heading3 : styles.heading4;
      return React.createElement(Text, { key, style }, React.createElement(InlineText, { runs: block.runs }));
    }
    case "paragraph":
      return React.createElement(Text, { key, style: styles.paragraph }, React.createElement(InlineText, { runs: block.runs }));
    case "quote":
      return React.createElement(
        View,
        { key, style: styles.quoteBox },
        React.createElement(Text, null, React.createElement(InlineText, { runs: block.runs }))
      );
    case "rule":
      return React.createElement(View, { key, style: styles.ruleLine });
    case "image":
      return React.createElement(
        View,
        { key, style: styles.imagePlaceholder },
        React.createElement(Text, { style: styles.imagePlaceholderText }, "[Screenshot omitted from this PDF — see the live app for the current UI]")
      );
    case "code":
      return React.createElement(
        View,
        { key, style: styles.codeBox },
        block.text.split("\n").map((line, li) => React.createElement(Text, { key: li, style: styles.codeLine }, line || " "))
      );
    case "bullet-list":
      return React.createElement(
        View,
        { key },
        block.items.map((item, i) =>
          React.createElement(
            View,
            { key: i, style: item.indent > 0 ? styles.listItemIndent : styles.listItem },
            React.createElement(Text, { style: styles.listMarker }, "•"),
            React.createElement(Text, { style: styles.listText }, React.createElement(InlineText, { runs: item.runs }))
          )
        )
      );
    case "numbered-list":
      return React.createElement(
        View,
        { key },
        block.items.map((item, i) =>
          React.createElement(
            View,
            { key: i, style: item.indent > 0 ? styles.listItemIndent : styles.listItem },
            React.createElement(Text, { style: styles.listMarker }, `${item.number}.`),
            React.createElement(Text, { style: styles.listText }, React.createElement(InlineText, { runs: item.runs }))
          )
        )
      );
    case "checklist":
      return React.createElement(
        View,
        { key },
        block.items.map((item, i) =>
          React.createElement(
            View,
            { key: i, style: styles.listItem },
            React.createElement(Text, { style: styles.checkbox }, item.checked ? "[x]" : "[ ]"),
            React.createElement(Text, { style: styles.listText }, React.createElement(InlineText, { runs: item.runs }))
          )
        )
      );
    case "table":
      return React.createElement(
        View,
        { key, style: styles.table },
        React.createElement(
          View,
          { style: styles.tableRow },
          block.header.map((cellRuns, i) =>
            React.createElement(Text, { key: i, style: styles.tableCellHeader }, React.createElement(InlineText, { runs: cellRuns }))
          )
        ),
        block.rows.map((row, r) =>
          React.createElement(
            View,
            { key: r, style: styles.tableRow },
            row.map((cellRuns, c) =>
              React.createElement(Text, { key: c, style: styles.tableCell }, React.createElement(InlineText, { runs: cellRuns }))
            )
          )
        )
      );
    case "callout": {
      const colors = CALLOUT_COLORS[block.color] || CALLOUT_COLORS.gray_bg;
      return React.createElement(
        View,
        { key, style: { marginTop: 4, marginBottom: 8, padding: 8, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.bg } },
        React.createElement(Text, { style: styles.calloutLabel }, colors.label),
        block.blocks.map((b, i) => renderBlock(b, `${key}-${i}`))
      );
    }
  }
}

export interface DocumentationGuideDetails {
  title: string;
  body: string;
  guideNumber: number;
  guideCount: number;
}

export async function buildDocumentationGuidePdf(details: DocumentationGuideDetails): Promise<Buffer> {
  const blocks = parseDocumentationBody(details.body);

  const document = React.createElement(
    Document,
    { title: `${details.title} — FIDE Labs Technical Documentation` },
    React.createElement(
      Page,
      { size: "A4", style: styles.page, wrap: true },
      React.createElement(Image, { src: LOGO_PATH, style: styles.logo }),
      React.createElement(Text, { style: styles.title }, details.title),
      React.createElement(
        Text,
        { style: styles.subtitle },
        `FIDE Labs Technical Documentation — Guide ${details.guideNumber} of ${details.guideCount}`
      ),
      blocks.map((b, i) => renderBlock(b, i))
    )
  );

  return serializePdfRender(() => renderToBuffer(document as any));
}
