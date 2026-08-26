// One-off script, run manually with `bunx tsx scripts/uploadStaticPackages.ts`
// whenever zip/request-quote-hide-price-source-code.zip or
// zip/technical-documents.zip changes. Both files are identical for every
// customer, so they're uploaded to Cloudinary ONCE here rather than on every
// order — print the two secure_urls and paste them into SOURCE_CODE_PACKAGE_URL
// / DOCUMENTATION_BUNDLE_URL (in .env.local, and in the production env once
// deployed). The webhook then just reads those two fixed URLs instead of
// re-uploading identical bytes on every single order.
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import fs from "fs";
import path from "path";
import { uploadOrderFile } from "@/lib/cloudinaryUpload";

async function main() {
  const sourceCodeBuffer = fs.readFileSync(
    path.join(process.cwd(), "zip", "request-quote-hide-price-source-code.zip")
  );
  const sourceCodeUrl = await uploadOrderFile(
    sourceCodeBuffer,
    "source-code-site/static",
    "request-quote-hide-price-source-code.zip",
    true
  );
  console.log(`SOURCE_CODE_PACKAGE_URL=${sourceCodeUrl}`);

  const documentationBuffer = fs.readFileSync(path.join(process.cwd(), "zip", "technical-documents.zip"));
  const documentationUrl = await uploadOrderFile(
    documentationBuffer,
    "source-code-site/static",
    "technical-documents.zip",
    true
  );
  console.log(`DOCUMENTATION_BUNDLE_URL=${documentationUrl}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
