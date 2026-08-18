const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL;

export async function sendLicenseEmail(to: string, orderName: string, licenseKey: string) {
  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL) {
    throw new Error("Resend is not configured. Set RESEND_API_KEY and RESEND_FROM_EMAIL.");
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: RESEND_FROM_EMAIL,
      to,
      subject: `Your Fide Labs Commercial License — Order ${orderName}`,
      html: `
        <p>Thanks for your purchase — order <strong>${orderName}</strong> is confirmed.</p>
        <p>Your Commercial License key:</p>
        <p style="font-family: monospace; font-size: 16px;"><strong>${licenseKey}</strong></p>
        <p>Keep this key for your records. Your download link and documentation follow separately.</p>
      `,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend API error: ${res.status} ${body}`);
  }
}
