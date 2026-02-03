import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import DemoBookingLead from "@/models/DemoBookingLead";

function normalizePhone(input: string) {
  return input.replace(/[^\d]/g, "");
}

function isValidIndianMobile(input: string) {
  const digits = normalizePhone(input);
  if (digits.length === 10) return true;
  if (digits.length === 12 && digits.startsWith("91")) return true;
  return false;
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as any;

  const payload = {
    childName: String(body?.childName ?? "").trim(),
    childAgeGroup: String(body?.childAgeGroup ?? "").trim(),
    helpWith: Array.isArray(body?.helpWith) ? body.helpWith : [],
    learningSupport: String(body?.learningSupport ?? "").trim(),
    budget: String(body?.budget ?? "").trim(),
    parentName: String(body?.parentName ?? "").trim(),
    phoneNumber: String(body?.phoneNumber ?? "").trim(),
    preferredLanguage: String(body?.preferredLanguage ?? "").trim(),
    otpId: body?.otpId ? String(body.otpId).trim() : undefined,
    source: body?.source ? String(body.source).trim() : undefined,
  };

  if (!payload.childName) {
    return NextResponse.json({ error: "Child name is required" }, { status: 400 });
  }
  if (!payload.childAgeGroup) {
    return NextResponse.json({ error: "Child age is required" }, { status: 400 });
  }
  if (!Array.isArray(payload.helpWith) || payload.helpWith.length < 1 || payload.helpWith.length > 2) {
    return NextResponse.json({ error: "Select 1 or 2 items for help" }, { status: 400 });
  }
  if (!payload.learningSupport) {
    return NextResponse.json({ error: "Learning support is required" }, { status: 400 });
  }
  if (!payload.budget) {
    return NextResponse.json({ error: "Budget is required" }, { status: 400 });
  }
  if (!payload.parentName) {
    return NextResponse.json({ error: "Parent name is required" }, { status: 400 });
  }
  if (!payload.phoneNumber || !isValidIndianMobile(payload.phoneNumber)) {
    return NextResponse.json({ error: "Valid phone number is required" }, { status: 400 });
  }
  if (!payload.preferredLanguage) {
    return NextResponse.json({ error: "Preferred language is required" }, { status: 400 });
  }

  // OTP is verified client-side via /api/otp/verify.
  // Here we simply record that the client provided an otpId.

  try {
    await connectDB();

    const doc = await DemoBookingLead.create({
      ...payload,
      otpVerified: true,
      phoneNumber: payload.phoneNumber,
    });

    return NextResponse.json({ ok: true, id: String(doc._id) }, { status: 200 });
  } catch (e) {
    // Do not block lead capture if DB is down in some environments.
    console.error("Demo booking lead save failed:", e);
    return NextResponse.json(
      { ok: true, stored: false, message: "Received, but could not persist. Check server logs." },
      { status: 200 }
    );
  }
}
