import { Resend } from "resend";
import { render } from "@react-email/render";
import * as React from "react";
import { SourceCodeDeliveryEmail } from "@/emails/SourceCodeDeliveryEmail";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;

const RESEND_LICENSE_API_KEY = process.env.RESEND_LICENSE_API_KEY;
const RESEND_LICENSE_FROM_EMAIL = process.env.RESEND_LICENSE_FROM_EMAIL;
const EMAIL_ASSET_BASE_URL = process.env.EMAIL_ASSET_BASE_URL || "https://fidelabs.io/email-assets";

// Not tracked per-order anywhere yet — configurable via env so they can be
// updated without a code change once real data exists.
const PRODUCT_VERSION = process.env.PRODUCT_VERSION || "1.0.0";
const PACKAGE_SIZE = process.env.PACKAGE_SIZE || "Full Source Package (.zip)";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail(fields: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}) {
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    throw new Error("Resend is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL.");
  }

  const resend = new Resend(RESEND_API_KEY);
  const fullName = `${fields.firstName} ${fields.lastName}`;

  const html = `
    <p><strong>From:</strong> ${escapeHtml(fullName)} (${escapeHtml(fields.email)})</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(fields.message).replace(/\n/g, "<br>")}</p>
  `;

  const { error } = await resend.emails.send({
    html,
    subject: `New contact form message from ${fullName}`,
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
  packageDownloadUrl: string;
  agreementDownloadUrl: string;
  documentationDownloadUrl: string;
  installationVideoUrl: string;
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
    packageDownloadUrl: fields.packageDownloadUrl,
    agreementDownloadUrl: fields.agreementDownloadUrl,
    documentationDownloadUrl: fields.documentationDownloadUrl,
    installationVideoUrl: fields.installationVideoUrl,
    productVersion: PRODUCT_VERSION,
    packageSize: PACKAGE_SIZE,
    assetBaseUrl: EMAIL_ASSET_BASE_URL,
  });

  const html = await render(element);

  // No attachments — Gmail (and other providers) hard-blocks emails carrying
  // zip/archive attachments as a content-security risk, which is exactly
  // what was silently bouncing every delivery email. Everything (source
  // code, technical docs, license agreement) is a Cloudinary download link
  // instead, same as the "watch video" row.
  const { data, error } = await resend.emails.send({
    html,
    from: RESEND_LICENSE_FROM_EMAIL,
    to: [fields.to],
    subject: `Your Fide Labs ${fields.licenseType} — Order ${fields.orderNumber}`,
  });

  if (error) {
    throw new Error(`Resend API error: ${JSON.stringify(error)}`);
  }

  // Resend accepting the send only means it queued the message for delivery
  // — it says nothing about whether the receiving server actually delivered
  // it. Log the id so a specific send's real outcome (delivered/bounced/
  // spam-complaint) can be looked up at resend.com/emails or via
  // GET https://api.resend.com/emails/{id}.
  console.log("[email] license email queued by Resend", { id: data?.id, to: fields.to });
}
