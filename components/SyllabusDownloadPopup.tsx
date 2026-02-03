"use client";

import React from "react";
import { X, ShieldCheck, FileText, Mail, CheckCircle } from "lucide-react";

type Props = {
  onClose: () => void;
  pdfUrl?: string;
};

type AgeGroup = "5-6" | "7-8" | "9-10" | "11-12" | "13-14";

type HelpWithOption =
  | "Homework takes too much time"
  | "Lack of understanding in subjects"
  | "Too much screen time"
  | "Want to introduce AI safely"
  | "Improve confidence & interest";

type LearningSupport =
  | "School only"
  | "Tuition"
  | "Online classes"
  | "Tuition + online"
  | "None right now";

type Budget =
  | "Up to ₹10,000"
  | "₹10,000 – ₹15,000"
  | "₹15,000 – ₹20,000"
  | "I want details first";

type Step = "form" | "otp" | "success";

type OtpState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "sent"; otpId: string }
  | { status: "verifying"; otpId: string }
  | { status: "verified"; otpId: string };

function classNames(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function SyllabusDownloadPopup({ onClose, pdfUrl = "/pdf/Python%20Fundamental%20Course.pdf" }: Props) {
  const [step, setStep] = React.useState<Step>("form");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Form fields
  const [childName, setChildName] = React.useState("");
  const [childAgeGroup, setChildAgeGroup] = React.useState<AgeGroup | "">("");
  const [helpWith, setHelpWith] = React.useState<HelpWithOption | "">("");
  const [learningSupport, setLearningSupport] = React.useState<LearningSupport | "">("");
  const [budget, setBudget] = React.useState<Budget | "">("");
  const [parentName, setParentName] = React.useState("");
  const [email, setEmail] = React.useState("");

  // OTP state
  const [otp, setOtp] = React.useState("");
  const [otpState, setOtpState] = React.useState<OtpState>({ status: "idle" });

  // Stored form data for email after OTP
  const [formData, setFormData] = React.useState<any>(null);

  const close = () => onClose();

  const ageGroups: Array<{ label: string; value: AgeGroup }> = [
    { label: "5–6", value: "5-6" },
    { label: "7–8", value: "7-8" },
    { label: "9–10", value: "9-10" },
    { label: "11–12", value: "11-12" },
    { label: "13–14", value: "13-14" },
  ];

  const helpWithOptions: HelpWithOption[] = [
    "Homework takes too much time",
    "Lack of understanding in subjects",
    "Too much screen time",
    "Want to introduce AI safely",
    "Improve confidence & interest",
  ];

  const learningSupportOptions: LearningSupport[] = [
    "School only",
    "Tuition",
    "Online classes",
    "Tuition + online",
    "None right now",
  ];

  const budgetOptions: Budget[] = [
    "Up to ₹10,000",
    "₹10,000 – ₹15,000",
    "₹15,000 – ₹20,000",
    "I want details first",
  ];

  const canSubmitForm =
    childName.trim().length > 0 &&
    !!childAgeGroup &&
    !!helpWith &&
    !!learningSupport &&
    !!budget &&
    parentName.trim().length > 0 &&
    isValidEmail(email) &&
    !loading;

  // Step 1: Submit form and send OTP to email
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!canSubmitForm) {
      setError("Please complete all fields.");
      return;
    }

    setLoading(true);

    try {
      // Store form data
      const data = {
        childName: childName.trim(),
        childAgeGroup,
        helpWith,
        learningSupport,
        budget,
        parentName: parentName.trim(),
        email: email.trim(),
        source: "Syllabus Download",
      };
      setFormData(data);

      // Send OTP to email
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
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const resendOtp = async () => {
    setError(null);
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

  // Step 2: Verify OTP and trigger download + send email
  const handleOtpVerify = async () => {
    setError(null);

    if (!otp.trim() || otp.trim().length < 4) {
      setError("Please enter the OTP sent to your email.");
      return;
    }

    if (otpState.status !== "sent") return;

    const otpId = otpState.otpId;
    setOtpState({ status: "verifying", otpId });
    setLoading(true);

    try {
      // Verify OTP
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

      // Send form data via email
      await fetch("/api/syllabus-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
      // Reset OTP state to allow retry — use the captured otpId
      setOtpState({ status: "sent", otpId });
      setError(e instanceof Error ? e.message : "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={close} />

      <div className="relative w-full max-w-xl mx-3 sm:mx-4 rounded-2xl bg-white shadow-xl border border-purple-100 overflow-hidden max-h-[92vh] flex flex-col">
        <button
          aria-label="Close"
          onClick={close}
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-700 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-5 sm:p-6 overflow-y-auto">
          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <div className="mt-0.5 p-2 rounded-xl bg-purple-50 text-purple-700">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-purple-800 leading-snug">
                {step === "success" ? "Download Started!" : "Download Syllabus PDF"}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {step === "form" && "Fill in your details to get the syllabus."}
                {step === "otp" && `We've sent an OTP to ${email}`}
                {step === "success" && "Your download should start automatically."}
              </p>
            </div>
          </div>

          {error && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Step 1: Form */}
          {step === "form" && (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-slate-800">Child's Name</label>
                <input
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="w-full mt-2 px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400"
                  placeholder="e.g. Aarav"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800">Child's Age</label>
                <select
                  value={childAgeGroup}
                  onChange={(e) => setChildAgeGroup(e.target.value as any)}
                  className="w-full mt-2 px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-slate-900"
                  required
                >
                  <option value="">Select age group</option>
                  {ageGroups.map((g) => (
                    <option key={g.value} value={g.value}>
                      {g.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800">What do you want help with?</label>
                <select
                  value={helpWith}
                  onChange={(e) => setHelpWith(e.target.value as any)}
                  className="w-full mt-2 px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-slate-900"
                  required
                >
                  <option value="">Select an option</option>
                  {helpWithOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800">Current learning support?</label>
                <select
                  value={learningSupport}
                  onChange={(e) => setLearningSupport(e.target.value as any)}
                  className="w-full mt-2 px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-slate-900"
                  required
                >
                  <option value="">Select learning support</option>
                  {learningSupportOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800">Your comfort budget?</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value as any)}
                  className="w-full mt-2 px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-slate-900"
                  required
                >
                  <option value="">Select budget</option>
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="rounded-xl border border-purple-100 bg-purple-50/40 p-4">
                <label className="text-sm font-semibold text-slate-800">Parent Contact</label>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-600">Parent Name</label>
                    <input
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full mt-1 px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400"
                      placeholder="Parent name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-600">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full mt-1 px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={!canSubmitForm}
                className={classNames(
                  "w-full rounded-full px-4 py-3 font-semibold",
                  canSubmitForm
                    ? "bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white"
                    : "bg-gray-200 text-gray-500"
                )}
              >
                {loading ? "Sending OTP..." : "Get Syllabus PDF"}
              </button>

              <div className="text-xs text-slate-600 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-700 mt-0.5" />
                <p>
                  By submitting, you agree to be contacted by PadhAi Club.
                  <br />
                  Your information is safe and never shared.
                </p>
              </div>
            </form>
          )}

          {/* Step 2: OTP Verification */}
          {step === "otp" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-purple-50 border border-purple-100">
                <Mail className="w-5 h-5 text-purple-600" />
                <span className="text-sm text-purple-800">
                  Check your email <strong>{email}</strong> for the OTP
                </span>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800">Enter OTP</label>
                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full mt-2 px-3 py-3 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400 text-center text-xl tracking-widest font-mono"
                  placeholder="• • • • • •"
                  inputMode="numeric"
                  maxLength={6}
                  autoFocus
                />
              </div>

              <button
                type="button"
                onClick={handleOtpVerify}
                disabled={loading || otpState.status === "verifying"}
                className={classNames(
                  "w-full rounded-full px-4 py-3 font-semibold",
                  "bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white"
                )}
              >
                {loading ? "Verifying..." : "Verify & Download"}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={resendOtp}
                  disabled={otpState.status === "sending"}
                  className="text-sm text-purple-600 hover:underline"
                >
                  {otpState.status === "sending" ? "Sending..." : "Didn't receive? Resend OTP"}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Success */}
          {step === "success" && (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">Download Started!</h4>
              <p className="text-sm text-slate-600 mb-4">
                If download doesn't start,{" "}
                <a href={pdfUrl} download className="text-purple-600 underline">
                  click here
                </a>
              </p>
              <button
                type="button"
                onClick={close}
                className="px-6 py-2 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
