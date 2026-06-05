import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  businessName?: string;
  revenue?: string;
  message?: string;
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

function validatePayload(body: ContactPayload) {
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const role = body.role?.trim() ?? "";
  const businessName = body.businessName?.trim() ?? "";
  const revenue = body.revenue?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name) {
    return { error: "Name is required.", status: 400 as const };
  }

  if (!email || !emailPattern.test(email)) {
    return { error: "A valid email address is required.", status: 400 as const };
  }

  if (!role) {
    return { error: "Role is required.", status: 400 as const };
  }

  if (!businessName) {
    return { error: "Business name is required.", status: 400 as const };
  }

  if (!message) {
    return { error: "Message is required.", status: 400 as const };
  }

  return {
    data: { name, email, phone, role, businessName, revenue, message },
  };
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

  const { name, email, phone, role, businessName, revenue, message } = validation.data;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? defaultFromEmail;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? site.email;

  const text = [
    "New confidential inquiry from attunedholdings.com",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Role: ${role}`,
    `Business Name: ${businessName}`,
    `Revenue: ${revenue || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h2>New confidential inquiry from attunedholdings.com</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
    <p><strong>Role:</strong> ${escapeHtml(role)}</p>
    <p><strong>Business Name:</strong> ${escapeHtml(businessName)}</p>
    <p><strong>Revenue:</strong> ${escapeHtml(revenue || "Not provided")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject: `Confidential inquiry: ${businessName} (${role})`,
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
