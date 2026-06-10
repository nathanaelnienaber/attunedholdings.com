import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

type ContactPayload = {
  email?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const defaultFromEmail = "Contact Form <contact@attunedholdings.com>";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatSubmittedAt(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "America/Los_Angeles",
  }).format(date);
}

function validatePayload(body: ContactPayload) {
  const email = body.email?.trim() ?? "";

  if (!email || !emailPattern.test(email)) {
    return { error: "A valid email address is required.", status: 400 as const };
  }

  return { data: { email } };
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validation = validatePayload(body);

  if ("error" in validation) {
    return NextResponse.json({ error: validation.error }, { status: validation.status });
  }

  const { email } = validation.data;
  const submittedAt = formatSubmittedAt(new Date());
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? defaultFromEmail;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? site.email;

  const text = [
    "New follow-up request from attunedholdings.com",
    "",
    `Submitted: ${submittedAt}`,
    `Email: ${email}`,
    "",
    "Please follow up with this contact.",
  ].join("\n");

  const html = `
    <h2>New follow-up request from attunedholdings.com</h2>
    <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p>Please follow up with this contact.</p>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject: `Follow-up request: ${email}`,
    text,
    html,
  });

  if (error) {
    console.error("Resend contact form error:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
