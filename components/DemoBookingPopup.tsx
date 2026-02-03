"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxoNUPdL8iO0_Bi7WkM3EO0KXO7WRTPln9vbOnq0Tfj1DRnbXKevSy014xt4QRHgeqT/exec";

type Props = {
  onClose: () => void;
  variant?: "demo" | "syllabus";
  pdfUrl?: string;
};

type Step = "form" | "otp" | "success";

type OtpState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "sent"; otpId: string }
  | { status: "verifying"; otpId: string }
  | { status: "verified"; otpId: string };

function isValidEmail(input: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
}

export default function DemoBookingPopup({ onClose, variant = "demo", pdfUrl = "/pdf/Python%20Fundamental%20Course.pdf" }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<Step>("form");

  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [otp, setOtp] = useState("");
  const [otpState, setOtpState] = useState<OtpState>({ status: "idle" });
  const [pendingPayload, setPendingPayload] = useState<any>(null);

  const close = () => {
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (!childName.trim() || !childAge || !parentName.trim() || !email.trim() || !phoneNumber.trim()) return;
    if (!isValidEmail(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        childName: childName.trim(),
        childAge,
        parentName: parentName.trim(),
        email: email.trim(),
        phoneNumber: phoneNumber.trim(),
        source: variant === "syllabus" ? "Syllabus Download" : "Demo Booking Form",
      };

      // For syllabus: send OTP first, then verify, then download.
      if (variant === "syllabus") {
        setPendingPayload(payload);

        const res = await fetch("/api/email-otp/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email.trim() }),
        });

        const result = (await res.json().catch(() => null)) as any;
        if (!res.ok) {
          throw new Error(result?.error || "Failed to send OTP");
        }

        setOtpState({ status: "sent", otpId: result.otpId });
        setStep("otp");
        return;
      }

      // Create form data for Google Apps Script
      const formData = new FormData();
      formData.append("childName", payload.childName);
      formData.append("childAge", payload.childAge);
      formData.append("parentName", payload.parentName);
      formData.append("email", payload.email);
      formData.append("phoneNumber", payload.phoneNumber);
      formData.append("source", payload.source);

      // Use no-cors mode to bypass CORS restrictions
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      // Redirect to thank-you page
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting demo booking:", error);
      setError(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    setError(null);
    if (!isValidEmail(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setOtpState({ status: "sending" });
    try {
      const res = await fetch("/api/email-otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const result = (await res.json().catch(() => null)) as any;
      if (!res.ok) {
        throw new Error(result?.error || "Failed to resend OTP");
      }

      setOtpState({ status: "sent", otpId: result.otpId });
      setOtp("");
    } catch (e) {
      setOtpState({ status: "idle" });
      setError(e instanceof Error ? e.message : "Failed to resend OTP");
    }
  };

  const verifyOtpAndDownload = async () => {
    setError(null);
    if (!otp.trim() || otp.trim().length < 4) {
      setError("Please enter the OTP sent to your email.");
      return;
    }

    if (otpState.status !== "sent") return;
    const otpId = otpState.otpId;

    setLoading(true);
    setOtpState({ status: "verifying", otpId });

    try {
      const verifyRes = await fetch("/api/email-otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otpId, otp: otp.trim() }),
      });

      const verifyResult = (await verifyRes.json().catch(() => null)) as any;
      if (!verifyRes.ok || !verifyResult?.verified) {
        throw new Error(verifyResult?.error || "Invalid OTP");
      }

      setOtpState({ status: "verified", otpId });

      // Notify via email (server-side) with all details.
      await fetch("/api/syllabus-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pendingPayload ?? {
          childName: childName.trim(),
          childAge,
          parentName: parentName.trim(),
          email: email.trim(),
          phoneNumber: phoneNumber.trim(),
          source: "Syllabus Download",
        }),
      });

      // Trigger PDF download
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "PadhAi-Club-Syllabus.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setStep("success");
    } catch (e) {
      setOtpState({ status: "sent", otpId });
      setError(e instanceof Error ? e.message : "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={close} />

      <div className="relative w-full max-w-md mx-4 rounded-2xl bg-white p-6 shadow-xl border border-purple-100 animate-bounce-in">
        <button
          aria-label="Close"
          onClick={close}
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-extrabold text-purple-700 leading-snug">
          {variant === "syllabus" ? "Download Syllabus PDF" : "Book Your Free Demo Session"}
          <br />
          <span className="text-sm font-normal text-slate-600">
            {variant === "syllabus"
              ? "Fill details, verify OTP, then download." 
              : "Let your child experience AI learning firsthand"}
          </span>
        </h3>

        {error && (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        {step === "form" && (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="text-xs text-slate-600">Child Name</label>
            <input
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400"
              placeholder="Enter child's name"
              required
            />
          </div>

          <div>
            <label className="text-xs text-slate-600">Child Age</label>
            <select
              value={childAge}
              onChange={(e) => setChildAge(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200 bg-white text-slate-900"
              required
            >
              <option value="">Select age</option>
              {Array.from({ length: 10 }, (_, i) => 5 + i).map((age) => (
                <option key={age} value={age}>
                  {age} years
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs text-slate-600">Parent Name</label>
            <input
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="text-xs text-slate-600">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400"
              placeholder="+91 XXXXXXXXXX"
              required
            />
          </div>

          <div>
            <label className="text-xs text-slate-600">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full mt-2 rounded-full px-4 py-2 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white font-semibold disabled:opacity-60"
          >
            {loading
              ? variant === "syllabus" ? "Sending OTP..." : "Submitting..."
              : variant === "syllabus" ? "Get OTP" : "Book Free Demo Session"}
          </button>
        </form>
        )}

        {step === "otp" && (
          <div className="mt-4 space-y-3">
            <div>
              <label className="text-xs text-slate-600">Enter OTP (sent to {email.trim()})</label>
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400 text-center text-lg tracking-widest font-mono"
                placeholder="• • • • • •"
                inputMode="numeric"
                maxLength={6}
                autoFocus
              />
            </div>

            <button
              type="button"
              onClick={verifyOtpAndDownload}
              disabled={loading || otpState.status === "verifying"}
              className="w-full mt-2 rounded-full px-4 py-2 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white font-semibold disabled:opacity-60"
            >
              {loading ? "Verifying..." : "Verify & Download"}
            </button>

            <button
              type="button"
              onClick={resendOtp}
              disabled={otpState.status === "sending"}
              className="w-full text-sm text-purple-700 font-semibold hover:underline"
            >
              {otpState.status === "sending" ? "Sending..." : "Resend OTP"}
            </button>
          </div>
        )}

        {step === "success" && (
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-700 font-semibold">Download started.</p>
            <p className="text-xs text-slate-500 mt-2">
              If it didn’t start, <a className="text-purple-700 underline" href={pdfUrl} download>click here</a>.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-4 rounded-full px-4 py-2 bg-purple-700 text-white font-semibold"
            >
              Close
            </button>
          </div>
        )}

        {variant !== "syllabus" && (
          <p className="text-xs text-slate-500 mt-3 text-center">
            No spam. We'll reach out shortly to schedule your demo.
          </p>
        )}
      </div>
    </div>
  );
}
