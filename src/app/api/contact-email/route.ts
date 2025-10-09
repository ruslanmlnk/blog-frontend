import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email?: string;
  phone?: string;
  message?: string;
};

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env: ${name}`);
  return v;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const message = (body.message || "").trim();

    // Require at least a name; message may be optional for short forms
    if (!name) {
      return NextResponse.json(
        { ok: false, error: "Name is required" },
        { status: 400 }
      );
    }

    const host = requireEnv("SMTP_HOST");
    const port = Number(requireEnv("SMTP_PORT"));
    const secure = String(process.env.SMTP_SECURE || "false").toLowerCase() === "true";
    const user = requireEnv("SMTP_USER");
    const pass = requireEnv("SMTP_PASS");
    const to = process.env.CONTACT_TO_EMAIL || process.env.EMAIL_TO || user;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const subject = `New contact message from ${name}`;
    const textLines = [
      `Name: ${name}`,
      email ? `Email: ${email}` : undefined,
      phone ? `Phone: ${phone}` : undefined,
      message ? "\nMessage:" : undefined,
      message || undefined,
    ].filter(Boolean) as string[];

    await transporter.sendMail({
      from: { name: "Contact Form", address: user },
      to,
      subject,
      text: textLines.join("\n"),
      replyTo: email || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/contact-email error", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
