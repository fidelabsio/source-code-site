import { randomBytes } from "crypto";
import { tagOrder } from "@/lib/shopifyAdmin";

export function generateLicenseKey() {
  const segments = Array.from({ length: 4 }, () => randomBytes(2).toString("hex").toUpperCase());
  return `FIDE-${segments.join("-")}`;
}

export async function issueLicenseForOrder(orderGid: string) {
  const licenseKey = generateLicenseKey();
  await tagOrder(orderGid, [`license:${licenseKey}`]);
  return licenseKey;
}
