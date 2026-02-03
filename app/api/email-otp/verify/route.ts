import { NextResponse } from "next/server";

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

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as any;
  const otpId = String(body?.otpId ?? "").trim();
  const otp = String(body?.otp ?? "").trim();

  if (!otpId || !otp) {
    return NextResponse.json({ error: "Missing otpId or otp" }, { status: 400 });
  }

  const record = store.get(otpId);
  if (!record) {
    return NextResponse.json({ verified: false, error: "OTP not found or expired" }, { status: 400 });
  }

  if (Date.now() > record.expiresAt) {
    store.delete(otpId);
    return NextResponse.json({ verified: false, error: "OTP expired" }, { status: 400 });
  }

  record.attempts += 1;
  if (record.attempts > 6) {
    store.delete(otpId);
    return NextResponse.json({ verified: false, error: "Too many attempts" }, { status: 429 });
  }

  if (otp !== record.otp) {
    store.set(otpId, record);
    return NextResponse.json({ verified: false, error: "Invalid OTP" }, { status: 400 });
  }

  // OTP verified — remove it so it can't be reused
  store.delete(otpId);

  return NextResponse.json({ verified: true, email: record.email });
}
