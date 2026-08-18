import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TEMPLATE_ID = process.env.CONTACT_TEMPLATE_ID;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;

const RESEND_LICENSE_API_KEY = process.env.RESEND_LICENSE_API_KEY;
const RESEND_LICENSE_FROM_EMAIL = process.env.RESEND_LICENSE_FROM_EMAIL;
const LICENSE_TEMPLATE_ID = process.env.LICENSE_TEMPLATE_ID;

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
  if (!RESEND_LICENSE_API_KEY || !RESEND_LICENSE_FROM_EMAIL || !LICENSE_TEMPLATE_ID) {
    throw new Error(
      "Resend is not configured. Set RESEND_LICENSE_API_KEY, RESEND_LICENSE_FROM_EMAIL, and LICENSE_TEMPLATE_ID."
    );
  }

  const resend = new Resend(RESEND_LICENSE_API_KEY);

  const { error } = await resend.emails.send({
    template: {
      id: LICENSE_TEMPLATE_ID,
      variables: {
        customerName: fields.customerName,
        licenseType: fields.licenseType,
        licenseId: fields.licenseId,
        orderNumber: fields.orderNumber,
        purchaseDate: fields.purchaseDate,
        licenseActivatedDate: fields.licenseActivatedDate,
        supportValidUntil: fields.supportValidUntil,
        downloadUrl: fields.downloadUrl,
      },
    },
    from: RESEND_LICENSE_FROM_EMAIL,
    to: [fields.to],
    subject: `Your Fide Labs ${fields.licenseType} — Order ${fields.orderNumber}`,
  });

  if (error) {
    throw new Error(`Resend API error: ${JSON.stringify(error)}`);
  }
}
