import PDFDocument from "pdfkit";
import path from "path";
import { LICENSE_AGREEMENT_BODY } from "@/lib/licenseAgreementContent";

export interface LicenseAgreementDetails {
  licenseKey: string;
  licenseType: string;
  customerName: string;
  customerEmail: string;
  orderNumber: string;
  issueDate: Date;
  termExpiry: Date;
  acceptedAt: Date;
  deliveredVersion: string;
}

// Fixed by current published pricing (Schedule B) — not derived from the
// order total, since a renewal order's charge (~USD 149) is a different
// figure from the one-time License Fee this field documents.
const PRODUCT_NAME = "Request a Quote & Hide Price";
const LICENSE_FEE = "USD 599 (one-time)";
const SUPPORT_TERM = "12 months from the Issue Date";
const ANNUAL_RENEWAL_FEE = "USD 149 per year";
const AGREEMENT_VERSION = "1.0";

const LOGO_PATH = path.join(process.cwd(), "public", "email-assets", "logo-header.png");

/* ============================================================================
 * Minimal markdown-lite parser for LICENSE_AGREEMENT_BODY.
 * Supports: ### / #### / ##### headings, **bold** inline spans, "- " bullet
 * lists, "N. " numbered lists, and "| a | b |" tables (a "---" row is the
 * header separator and is dropped). Anything else is a paragraph.
 * ========================================================================== */

type InlineRun = { text: string; bold: boolean };

type Block =
  | { type: "heading"; level: 1 | 2 | 3; runs: InlineRun[] }
  | { type: "paragraph"; runs: InlineRun[] }
  | { type: "bullet-list"; items: InlineRun[][] }
  | { type: "numbered-list"; items: InlineRun[][] }
  | { type: "table"; header: string[]; rows: string[][] };

function parseInline(text: string): InlineRun[] {
  const runs: InlineRun[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      runs.push({ text: text.slice(lastIndex, match.index), bold: false });
    }
    runs.push({ text: match[1], bold: true });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    runs.push({ text: text.slice(lastIndex), bold: false });
  }
  return runs;
}

function isSeparatorRow(cells: string[]): boolean {
  return cells.every((c) => /^:?-+:?$/.test(c.trim()) || c.trim() === "");
}

function parseTableRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|").map((c) => c.trim());
}

export function parseLicenseAgreementBody(source: string): Block[] {
  const lines = source.split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "") {
      i++;
      continue;
    }

    if (trimmed.startsWith("##### ")) {
      blocks.push({ type: "heading", level: 3, runs: parseInline(trimmed.slice(6)) });
      i++;
      continue;
    }
    if (trimmed.startsWith("#### ")) {
      blocks.push({ type: "heading", level: 2, runs: parseInline(trimmed.slice(5)) });
      i++;
      continue;
    }
    if (trimmed.startsWith("### ")) {
      blocks.push({ type: "heading", level: 1, runs: parseInline(trimmed.slice(4)) });
      i++;
      continue;
    }

    if (trimmed.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }
      const rows = tableLines.map(parseTableRow);
      const header = rows[0];
      const body = rows.slice(1).filter((r) => !isSeparatorRow(r));
      blocks.push({ type: "table", header, rows: body });
      continue;
    }

    if (/^-\s+/.test(trimmed)) {
      const items: InlineRun[][] = [];
      while (i < lines.length && /^-\s+/.test(lines[i].trim())) {
        items.push(parseInline(lines[i].trim().replace(/^-\s+/, "")));
        i++;
      }
      blocks.push({ type: "bullet-list", items });
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items: InlineRun[][] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(parseInline(lines[i].trim().replace(/^\d+\.\s+/, "")));
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

/* ============================================================================
 * pdfkit rendering. pdfkit is a plain imperative Node PDF library with no
 * React involvement at all — chosen specifically because @react-pdf/renderer
 * (React.createElement + a custom reconciler) kept crashing with React error
 * #31 when invoked from inside a Next.js App Router route handler: Next's
 * webpack bundling for anything reachable from app/ ends up giving that
 * library's internal reconciler a different "react" module instance than
 * the one used to build the element tree, and no combination of
 * serverExternalPackages/config reliably fixed it. pdfkit has no such
 * dependency, so this whole class of bug can't happen here.
 * ========================================================================== */

const PAGE_MARGIN = 48;
const INK = "#0b1c30";
const MUTED = "#666666";
const BORDER = "#d1d5db";
const HEADER_FILL = "#f2f6fe";
const ACCEPTANCE_BORDER = "#006c4b";
const ACCEPTANCE_FILL = "#f5fbf8";

function ensureSpace(doc: PDFKit.PDFDocument, height: number) {
  const bottom = doc.page.height - doc.page.margins.bottom;
  if (doc.y + height > bottom) {
    doc.addPage();
  }
}

function renderRuns(doc: PDFKit.PDFDocument, runs: InlineRun[], fontSize: number, options?: PDFKit.Mixins.TextOptions) {
  runs.forEach((run, i) => {
    doc.font(run.bold ? "Helvetica-Bold" : "Helvetica").fontSize(fontSize);
    doc.text(run.text, { continued: i < runs.length - 1, ...options });
  });
}

function renderHeading(doc: PDFKit.PDFDocument, level: 1 | 2 | 3, runs: InlineRun[]) {
  const fontSize = level === 1 ? 12 : level === 2 ? 10.5 : 9.5;
  const marginTop = level === 1 ? 14 : level === 2 ? 10 : 8;
  ensureSpace(doc, fontSize + marginTop + 6);
  doc.moveDown(marginTop / 12);
  doc.font("Helvetica-Bold").fontSize(fontSize).fillColor(INK);
  runs.forEach((run, i) => doc.text(run.text, { continued: i < runs.length - 1 }));
  doc.moveDown(0.3);
}

function renderParagraph(doc: PDFKit.PDFDocument, runs: InlineRun[]) {
  doc.fillColor(INK);
  renderRuns(doc, runs, 9.5, { align: "justify" });
  doc.moveDown(0.4);
}

function renderList(doc: PDFKit.PDFDocument, items: InlineRun[][], numbered: boolean) {
  doc.fillColor(INK);
  items.forEach((runs, i) => {
    const marker = numbered ? `${i + 1}.` : "•";
    doc.font("Helvetica").fontSize(9.5);
    doc.text(`${marker} `, { continued: true });
    renderRuns(doc, runs, 9.5);
  });
  doc.moveDown(0.4);
}

function drawTable(
  doc: PDFKit.PDFDocument,
  header: string[],
  rows: string[][],
  columnWidths?: number[]
) {
  const usableWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
  const widths = columnWidths || header.map(() => usableWidth / header.length);
  const startX = doc.page.margins.left;

  function measureRowHeight(cells: string[], bold: boolean): number {
    doc.font(bold ? "Helvetica-Bold" : "Helvetica").fontSize(8.5);
    let max = 0;
    cells.forEach((cell, i) => {
      const h = doc.heightOfString(cell, { width: widths[i] - 10 });
      if (h > max) max = h;
    });
    return Math.max(max, 12) + 10;
  }

  function drawRow(cells: string[], bold: boolean, fill?: string) {
    const height = measureRowHeight(cells, bold);
    ensureSpace(doc, height);
    const y = doc.y;
    let x = startX;
    if (fill) {
      doc.rect(startX, y, widths.reduce((a, b) => a + b, 0), height).fill(fill);
    }
    doc.lineWidth(0.5).strokeColor(BORDER);
    cells.forEach((cell, i) => {
      doc.rect(x, y, widths[i], height).stroke();
      doc
        .fillColor(INK)
        .font(bold ? "Helvetica-Bold" : "Helvetica")
        .fontSize(8.5)
        .text(cell, x + 5, y + 5, { width: widths[i] - 10 });
      x += widths[i];
    });
    doc.y = y + height;
  }

  drawRow(header, true, HEADER_FILL);
  rows.forEach((row) => drawRow(row, false));
  // Every cell above is drawn at an explicit x/y, which leaves doc.x
  // wherever the last .text() call put it — reset it, or the next flowing
  // (non-positioned) paragraph renders in a narrow column starting from
  // that stale x instead of the page margin.
  doc.x = doc.page.margins.left;
  doc.moveDown(0.4);
}

function renderBlock(doc: PDFKit.PDFDocument, block: Block) {
  switch (block.type) {
    case "heading":
      renderHeading(doc, block.level, block.runs);
      break;
    case "paragraph":
      renderParagraph(doc, block.runs);
      break;
    case "bullet-list":
      renderList(doc, block.items, false);
      break;
    case "numbered-list":
      renderList(doc, block.items, true);
      break;
    case "table":
      drawTable(doc, block.header, block.rows);
      break;
  }
}

function drawDetailsTable(doc: PDFKit.PDFDocument, rows: [string, string][]) {
  const usableWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
  const labelWidth = usableWidth * 0.38;
  const valueWidth = usableWidth - labelWidth;
  const startX = doc.page.margins.left;

  rows.forEach(([label, value]) => {
    doc.font("Helvetica-Bold").fontSize(9);
    const labelHeight = doc.heightOfString(label, { width: labelWidth - 12 });
    doc.font("Helvetica").fontSize(9);
    const valueHeight = doc.heightOfString(value, { width: valueWidth - 12 });
    const height = Math.max(labelHeight, valueHeight, 12) + 12;

    ensureSpace(doc, height);
    const y = doc.y;
    doc.rect(startX, y, labelWidth, height).fillAndStroke("#f9faff", BORDER);
    doc.rect(startX + labelWidth, y, valueWidth, height).fillAndStroke("#ffffff", BORDER);
    doc.fillColor(INK).font("Helvetica-Bold").fontSize(9).text(label, startX + 6, y + 6, { width: labelWidth - 12 });
    doc.fillColor(INK).font("Helvetica").fontSize(9).text(value, startX + labelWidth + 6, y + 6, { width: valueWidth - 12 });
    doc.y = y + height;
  });
  doc.x = doc.page.margins.left;
  doc.moveDown(0.5);
}

function formatDMY(date: Date): string {
  const dd = String(date.getUTCDate()).padStart(2, "0");
  const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
  const yyyy = date.getUTCFullYear();
  return `${dd} / ${mm} / ${yyyy}`;
}

export async function buildLicenseAgreementPdf(details: LicenseAgreementDetails): Promise<Buffer> {
  const blocks = parseLicenseAgreementBody(LICENSE_AGREEMENT_BODY);

  // Insert the electronic acceptance record right before Schedule A, i.e.
  // immediately after the static "Acceptance" section's text.
  const scheduleIndex = blocks.findIndex(
    (b) => b.type === "heading" && b.runs.map((r) => r.text).join("").startsWith("Schedule A")
  );
  const beforeSchedules = scheduleIndex === -1 ? blocks : blocks.slice(0, scheduleIndex);
  const schedules = scheduleIndex === -1 ? [] : blocks.slice(scheduleIndex);

  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A4",
      margin: PAGE_MARGIN,
      bufferPages: true,
      info: { Title: `FIDE Labs Commercial License Agreement - ${details.licenseKey}` },
    });
    const chunks: Buffer[] = [];
    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    try {
      doc.image(LOGO_PATH, PAGE_MARGIN, PAGE_MARGIN, { width: 110 });
      doc.y = PAGE_MARGIN + 40;
      doc.fillColor(INK).font("Helvetica-Bold").fontSize(16).text("Commercial License Agreement");
      doc.fillColor(MUTED).font("Helvetica").fontSize(8.5).text(`Agreement Version ${AGREEMENT_VERSION}`);
      doc.moveDown(0.6);

      drawDetailsTable(doc, [
        ["License ID", details.licenseKey],
        ["Issue Date", formatDMY(details.issueDate)],
        ["Product", PRODUCT_NAME],
        ["Delivery Version", details.deliveredVersion],
        ["License Tier", "Commercial"],
        ["License Fee", LICENSE_FEE],
        ["Update & Support Term", SUPPORT_TERM],
        ["Term Expiry", formatDMY(details.termExpiry)],
        ["Annual Renewal Fee", ANNUAL_RENEWAL_FEE],
      ]);

      renderHeading(doc, 1, [{ text: "Licensee Information", bold: false }]);
      drawDetailsTable(doc, [
        ["Customer / Company Name", details.customerName],
        ["Authorized Contact Name", details.customerName],
        ["Email Address", details.customerEmail],
        ["Purchase / Invoice No.", details.orderNumber],
      ]);

      beforeSchedules.forEach((b) => renderBlock(doc, b));

      // Electronic Acceptance Record
      const acceptanceRows: [string, string][] = [
        ["License ID:", details.licenseKey],
        ["Agreement Version:", AGREEMENT_VERSION],
        ["Accepted At:", `${formatDMY(details.acceptedAt)} (electronic acceptance at checkout)`],
        ["Purchase Reference:", details.orderNumber],
      ];
      const boxWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
      doc.font("Helvetica").fontSize(9.5);
      const rowHeights = acceptanceRows.map(
        ([, value]) => doc.heightOfString(value, { width: boxWidth - 20 - 140 })
      );
      const boxHeight = 10 + 16 + rowHeights.reduce((a, h) => a + Math.max(h, 12) + 2, 0) + 10;
      ensureSpace(doc, boxHeight);
      const boxY = doc.y;
      doc.rect(doc.page.margins.left, boxY, boxWidth, boxHeight).fillAndStroke(ACCEPTANCE_FILL, ACCEPTANCE_BORDER);
      let cursorY = boxY + 10;
      doc.fillColor(ACCEPTANCE_BORDER).font("Helvetica-Bold").fontSize(10).text("Electronic Acceptance Record", doc.page.margins.left + 10, cursorY);
      cursorY += 16;
      acceptanceRows.forEach(([label, value], i) => {
        doc.fillColor(INK).font("Helvetica-Bold").fontSize(9.5).text(label, doc.page.margins.left + 10, cursorY, { width: 140, continued: false });
        doc.fillColor(INK).font("Helvetica").fontSize(9.5).text(value, doc.page.margins.left + 150, cursorY, { width: boxWidth - 20 - 140 });
        cursorY += Math.max(rowHeights[i], 12) + 2;
      });
      doc.x = doc.page.margins.left;
      doc.y = boxY + boxHeight + 10;

      schedules.forEach((b) => renderBlock(doc, b));

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}
