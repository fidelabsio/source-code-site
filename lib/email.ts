import { Resend } from "resend";
import { render } from "@react-email/render";
import * as React from "react";
import { SourceCodeDeliveryEmail } from "@/emails/SourceCodeDeliveryEmail";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TEMPLATE_ID = process.env.CONTACT_TEMPLATE_ID;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;

const RESEND_LICENSE_API_KEY = process.env.RESEND_LICENSE_API_KEY;
const RESEND_LICENSE_FROM_EMAIL = process.env.RESEND_LICENSE_FROM_EMAIL;
const EMAIL_ASSET_BASE_URL = process.env.EMAIL_ASSET_BASE_URL || "https://fidelabs.io/email-assets";

// Not tracked per-order anywhere yet — configurable via env so they can be
// updated without a code change once real data exists.
const PRODUCT_VERSION = process.env.PRODUCT_VERSION || "1.0.0";
const PACKAGE_SIZE = process.env.PACKAGE_SIZE || "Full Source Package (.zip)";

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
  attachment: { filename: string; content: Buffer };
}) {
  if (!RESEND_LICENSE_API_KEY || !RESEND_LICENSE_FROM_EMAIL) {
    throw new Error("Resend is not configured. Set RESEND_LICENSE_API_KEY and RESEND_LICENSE_FROM_EMAIL.");
  }

  const resend = new Resend(RESEND_LICENSE_API_KEY);

  const element = React.createElement(SourceCodeDeliveryEmail, {
    customerName: fields.customerName,
    licenseType: fields.licenseType,
    licenseId: fields.licenseId,
    purchaseDate: fields.purchaseDate,
    licenseActivatedDate: fields.licenseActivatedDate,
    supportValidUntil: fields.supportValidUntil,
    packageFilename: fields.attachment.filename,
    productVersion: PRODUCT_VERSION,
    packageSize: PACKAGE_SIZE,
    assetBaseUrl: EMAIL_ASSET_BASE_URL,
  });

  const html = await render(element);

  const { error } = await resend.emails.send({
    html,
    from: RESEND_LICENSE_FROM_EMAIL,
    to: [fields.to],
    subject: `Your Fide Labs ${fields.licenseType} — Order ${fields.orderNumber}`,
    attachments: [{ filename: fields.attachment.filename, content: fields.attachment.content }],
  });

  if (error) {
    throw new Error(`Resend API error: ${JSON.stringify(error)}`);
  }
}
