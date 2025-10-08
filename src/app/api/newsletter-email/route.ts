import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env: ${name}`);
  return v;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { email?: string };
    const email = (body.email || "").trim();

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Email is required" },
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

    await transporter.sendMail({
      from: { name: "Newsletter", address: user },
      to,
      subject: `New newsletter subscription`,
      text: `New subscription email: ${email}`,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/newsletter-email error", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send newsletter email" },
      { status: 500 }
    );
  }
}

