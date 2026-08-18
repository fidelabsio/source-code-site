import { NextRequest, NextResponse } from "next/server";
import { flattenError } from "zod";
import { sendContactEmail } from "@/lib/email";
import { contactFormSchema } from "@/lib/contactSchema";

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TEMPLATE_ID) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });
  }

  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input.", fieldErrors: flattenError(parsed.error).fieldErrors },
      { status: 400 }
    );
  }

  const { "first-name": firstName, "last-name": lastName, email, message } = parsed.data;

  try {
    await sendContactEmail({ firstName, lastName, email, message });
  } catch (error) {
    console.error("[contact form] failed to send", error);
    return NextResponse.json({ error: "Could not send your message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
