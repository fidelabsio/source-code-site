import AdmZip from "adm-zip";
import path from "path";

const BASE_ZIP_PATH = path.join(process.cwd(), "zip", "fide-request-quote-hide-price-source-code-master.zip");

export interface LicenseFileDetails {
  licenseKey: string;
  licenseType: string;
  customerName: string;
  customerEmail: string;
  orderNumber: string;
  purchaseDate: string;
  supportValidUntil: string;
}

function buildLicenseFileContent(details: LicenseFileDetails): string {
  return `FIDE LABS — COMMERCIAL LICENSE
================================

Licensed Customer:            ${details.customerName} <${details.customerEmail}>
License Type:                 ${details.licenseType}
License ID:                   ${details.licenseKey}
Order Number:                 ${details.orderNumber}
Purchase Date:                ${details.purchaseDate}
Update & Support Valid Until: ${details.supportValidUntil}

This source code is licensed, not sold, to the customer named above under the
FIDE Labs Commercial License Agreement. Redistribution, resale, or sharing of
this package or its contents without written permission from FIDE Labs is
prohibited.

Support: support@fidelabs.io
Docs:    https://docs.fidelabs.io

© FIDE Labs (OPC) Private Limited. All rights reserved.
`;
}

// Reads the base product zip fresh on every call (no shared AdmZip instance)
// so concurrent webhook deliveries can't race on the same in-memory archive.
export function buildLicensedPackage(details: LicenseFileDetails): { buffer: Buffer; filename: string } {
  const zip = new AdmZip(BASE_ZIP_PATH);
  const entries = zip.getEntries();
  if (entries.length === 0) {
    throw new Error(`Base product zip at ${BASE_ZIP_PATH} is empty or unreadable.`);
  }

  const rootDir = entries[0].entryName.split("/")[0];
  zip.addFile(`${rootDir}/CUSTOMER-LICENSE.txt`, Buffer.from(buildLicenseFileContent(details), "utf8"));

  return {
    buffer: zip.toBuffer(),
    filename: `fide-source-code-${details.licenseKey}.zip`,
  };
}
