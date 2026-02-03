import { NextResponse } from "next/server";
import crypto from "crypto";

type OtpRecord = {
  otp: string;
  phone: string;
  expiresAt: number;
  attempts: number;
};

const globalWithOtp = global as typeof globalThis & {
  __demoOtpStore?: Map<string, OtpRecord>;
};

const store = globalWithOtp.__demoOtpStore ?? new Map<string, OtpRecord>();
if (!globalWithOtp.__demoOtpStore) globalWithOtp.__demoOtpStore = store;

function normalizePhone(input: string): string {
  return input.replace(/[^\d]/g, "");
}

function isValidPhone(input: string): boolean {
  const digits = normalizePhone(input);
  if (digits.length === 10) return true;
  if (digits.length === 12 && digits.startsWith("91")) return true;
  return false;
}

function generateOtp(): string {
  const n = Math.floor(100000 + Math.random() * 900000);
  return String(n);
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as any;
  const phoneRaw = String(body?.phone ?? "").trim();

  if (!phoneRaw || !isValidPhone(phoneRaw)) {
    return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
  }

  const otpId = crypto.randomUUID();
  const otp = generateOtp();
  const expiresAt = Date.now() + 5 * 60 * 1000;

  store.set(otpId, {
    otp,
    phone: normalizePhone(phoneRaw),
    expiresAt,
    attempts: 0,
  });

  // NOTE: This is a demo OTP implementation.
  // To send real SMS, integrate a provider (MSG91/Twilio/etc) here.

  const isProd = process.env.NODE_ENV === "production";

  return NextResponse.json({
    otpId,
    expiresInSec: 300,
    ...(isProd ? {} : { debugOtp: otp }),
  });
}
