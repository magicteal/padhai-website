import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";

type OtpRecord = {
  otp: string;
  email: string;
  expiresAt: number;
  attempts: number;
};

const globalWithOtp = global as typeof globalThis & {
  __emailOtpStore?: Map<string, OtpRecord>;
};

const store = globalWithOtp.__emailOtpStore ?? new Map<string, OtpRecord>();
if (!globalWithOtp.__emailOtpStore) globalWithOtp.__emailOtpStore = store;

function generateOtp(): string {
  const n = Math.floor(100000 + Math.random() * 900000);
  return String(n);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendOtpEmail(email: string, otp: string) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const fromEmail = process.env.SMTP_FROM || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.warn("SMTP not configured. OTP:", otp);
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: `"PadhAi Club" <${fromEmail}>`,
    to: email,
    subject: "Your OTP for Syllabus Download - PadhAi Club",
    text: `Your OTP is: ${otp}\n\nThis OTP is valid for 5 minutes.\n\n- PadhAi Club`,
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: auto;">
        <h2 style="color: #7c3aed;">PadhAi Club</h2>
        <p>Your OTP for downloading the syllabus is:</p>
        <div style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #7c3aed; margin: 24px 0;">
          ${otp}
        </div>
        <p style="color: #666;">This OTP is valid for 5 minutes.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
        <p style="font-size: 12px; color: #999;">
          If you didn't request this, please ignore this email.
        </p>
      </div>
    `,
  });

  return true;
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as any;
  const emailRaw = String(body?.email ?? "").trim().toLowerCase();

  if (!emailRaw || !isValidEmail(emailRaw)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const otpId = crypto.randomUUID();
  const otp = generateOtp();
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes

  store.set(otpId, {
    otp,
    email: emailRaw,
    expiresAt,
    attempts: 0,
  });

  try {
    await sendOtpEmail(emailRaw, otp);
  } catch (e) {
    console.error("Failed to send OTP email:", e);
    // Don't block — in dev, OTP is logged to console
  }

  const isProd = process.env.NODE_ENV === "production";

  return NextResponse.json({
    otpId,
    expiresInSec: 300,
    ...(isProd ? {} : { debugOtp: otp }), // Only show in dev
  });
}
