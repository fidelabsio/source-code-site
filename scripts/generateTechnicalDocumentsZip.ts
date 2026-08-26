// One-off generator, run manually with `bunx tsx scripts/generateTechnicalDocumentsZip.ts`
// whenever the Notion documentation content changes. Converts every guide in
// content/documentation/ into a PDF and zips them into zip/technical-documents.zip.
// After regenerating, also re-run scripts/uploadStaticPackages.ts and update
// DOCUMENTATION_BUNDLE_URL — the zip is uploaded once and reused for every
// order, not rebuilt or re-uploaded per order.
import fs from "fs";
import path from "path";
import AdmZip from "adm-zip";
import { DOCUMENTATION_GUIDES, readGuideBody } from "@/lib/documentationContent";
import { buildDocumentationGuidePdf } from "@/lib/documentationPdf";

async function main() {
  const zip = new AdmZip();
  const guideCount = DOCUMENTATION_GUIDES.length;

  for (let i = 0; i < guideCount; i++) {
    const guide = DOCUMENTATION_GUIDES[i];
    const body = readGuideBody(guide);
    const buffer = await buildDocumentationGuidePdf({
      title: guide.title,
      body,
      guideNumber: i + 1,
      guideCount,
    });
    const filename = `${String(i + 1).padStart(2, "0")}-${guide.slug}.pdf`;
    zip.addFile(filename, buffer);
    console.log(`[technical-documents] built ${filename} (${buffer.length} bytes)`);
  }

  const outPath = path.join(process.cwd(), "zip", "technical-documents.zip");
  fs.writeFileSync(outPath, zip.toBuffer());
  console.log(`[technical-documents] wrote ${outPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
