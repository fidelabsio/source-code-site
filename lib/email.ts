import { Resend } from "resend";
import fs from "fs";
import path from "path";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TEMPLATE_ID = process.env.CONTACT_TEMPLATE_ID;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;

const RESEND_LICENSE_API_KEY = process.env.RESEND_LICENSE_API_KEY;
const RESEND_LICENSE_FROM_EMAIL = process.env.RESEND_LICENSE_FROM_EMAIL;

// Not tracked per-order anywhere yet — configurable via env so they can be
// updated without a code change once real data exists.
const PRODUCT_VERSION = process.env.PRODUCT_VERSION || "1.0.0";
const PACKAGE_SIZE = process.env.PACKAGE_SIZE || "Full Source Package (.zip)";

const LICENSE_TEMPLATE_PATH = path.join(process.cwd(), "email-templates", "fide-source-code-delivery.html");

// Renders the template ourselves instead of using a Resend-hosted Template —
// this guarantees the exact HTML we've tested is what gets sent, with no
// reformatting from Resend's own template importer.
function renderLicenseTemplate(variables: Record<string, string>) {
  let html = fs.readFileSync(LICENSE_TEMPLATE_PATH, "utf8");
  for (const [key, value] of Object.entries(variables)) {
    html = html.replaceAll(`{{{${key}}}}`, value);
  }
  return html;
}

export async function sendContactEmail(fields: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}) {
  if (!RESEND_API_KEY || !CONTACT_TEMPLATE_ID || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    throw new Error(
      "Resend is not configured. Set RESEND_API_KEY, CONTACT_TEMPLATE_ID, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL."
    );
  }

  const resend = new Resend(RESEND_API_KEY);
  const fullName = `${fields.firstName} ${fields.lastName}`;

  const { error } = await resend.emails.send({
    template: {
      id: CONTACT_TEMPLATE_ID,
      variables: {
        firstName: fields.firstName,
        lastName: fields.lastName,
        fullName,
        email: fields.email,
        message: fields.message,
      },
    },
    from: CONTACT_FROM_EMAIL,
    to: [CONTACT_TO_EMAIL],
    replyTo: fields.email,
  });

  if (error) {
    throw new Error(`Resend API error: ${JSON.stringify(error)}`);
  }
}

export async function sendLicenseEmail(fields: {
  to: string;
  customerName: string;
  licenseType: string;
  licenseId: string;
  orderNumber: string;
  purchaseDate: string;
  licenseActivatedDate: string;
  supportValidUntil: string;
  downloadUrl: string;
}) {
  if (!RESEND_LICENSE_API_KEY || !RESEND_LICENSE_FROM_EMAIL) {
    throw new Error("Resend is not configured. Set RESEND_LICENSE_API_KEY and RESEND_LICENSE_FROM_EMAIL.");
  }

  const resend = new Resend(RESEND_LICENSE_API_KEY);

  const html = renderLicenseTemplate({
    customerName: fields.customerName,
    licenseType: fields.licenseType,
    licenseId: fields.licenseId,
    productVersion: PRODUCT_VERSION,
    purchaseDate: fields.purchaseDate,
    licenseActivatedDate: fields.licenseActivatedDate,
    supportValidUntil: fields.supportValidUntil,
    packageSize: PACKAGE_SIZE,
    downloadUrl: fields.downloadUrl,
  });

  const { error } = await resend.emails.send({
    html,
    from: RESEND_LICENSE_FROM_EMAIL,
    to: [fields.to],
    subject: `Your Fide Labs ${fields.licenseType} — Order ${fields.orderNumber}`,
  });

  if (error) {
    throw new Error(`Resend API error: ${JSON.stringify(error)}`);
  }
}
