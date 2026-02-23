"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { X, ShieldCheck, PhoneCall } from "lucide-react";

type Props = {
  onClose: () => void;
  source?: string;
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

type PreferredLanguage = "English" | "Hindi";

type OtpState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "sent"; otpId: string }
  | { status: "verifying"; otpId: string }
  | { status: "verified"; otpId: string };

function classNames(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function isValidIndianMobile(input: string) {
  const digits = input.replace(/[^\d]/g, "");
  // Accept 10-digit mobile, optionally prefixed with 91
  if (digits.length === 10) return true;
  if (digits.length === 12 && digits.startsWith("91")) return true;
  return false;
}

export default function DemoBookingSurveyPopup({ onClose, source }: Props) {
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const [childName, setChildName] = React.useState("");
  const [childAgeGroup, setChildAgeGroup] = React.useState<AgeGroup | "">("");

  const [helpWith, setHelpWith] = React.useState<HelpWithOption | "">("");
  const [learningSupport, setLearningSupport] = React.useState<LearningSupport | "">("");
  const [budget, setBudget] = React.useState<Budget | "">("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");

  // Parent contact removed per request
  

  const close = () => onClose();

  const otpVerified = true; // phone/OTP removed — treat as verified for submission flow

  const canSubmit =
    childName.trim().length > 0 &&
    !!childAgeGroup &&
    !!helpWith &&
    !!learningSupport &&
    !!budget &&
    phone.trim().length > 0 &&
    email.trim().length > 0 &&
    // parentName removed from requirement
    otpVerified &&
    !loading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!canSubmit) {
      setError("Please complete all fields.");
      return;
    }

    setLoading(true);

    try {
          const res = await fetch("/api/demo-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          childName: childName.trim(),
          childAgeGroup,
          helpWith: helpWith ? [helpWith] : [],
          learningSupport,
          budget,
          phone: phone.trim(),
          email: email.trim(),
          // parentName removed
          // preferredLanguage removed
          source: source ?? "Demo Booking Survey Popup",
        }),
      });

      const data = (await res.json().catch(() => null)) as any;
      if (!res.ok) {
        throw new Error(data?.error || "Failed to submit");
      }

      await fetch("/api/syllabus-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          childName: childName.trim(),
          childAgeGroup,
          helpWith: helpWith ? [helpWith] : [],
          learningSupport,
          budget,
          phone: phone.trim(),
          email: email.trim(),
          source: source ?? "Demo Booking Survey Popup",
        }),
      });

      router.push("/thank-you");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

  // PreferredLanguage removed — keep type for reference
  const languages: PreferredLanguage[] = ["English", "Hindi"];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={close} />

      <div className="relative w-full max-w-xl mx-3 sm:mx-4 rounded-2xl bg-white shadow-xl border border-purple-100 overflow-hidden max-h-[92vh] flex flex-col">
        <button
          aria-label="Close"
          onClick={close}
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-5 sm:p-6 overflow-y-auto">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 p-2 rounded-xl bg-purple-50 text-purple-700">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-purple-800 leading-snug">
                Book Free Demo Now
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Answer a few quick questions so we can personalize the demo.
              </p>
            </div>
          </div>

          {error && (
            <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            {/* Q1 */}
            <div>
              <label className="text-sm font-semibold text-slate-800">Q1. Child’s Name</label>
              <input
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                className="w-full mt-2 px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400"
                placeholder="e.g. Aarav"
                required
              />
            </div>

            {/* Q2 */}
            <div>
              <label className="text-sm font-semibold text-slate-800">Q2. Child’s Age</label>
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

            {/* Q3 */}
            <div>
              <label className="text-sm font-semibold text-slate-800">Q3. What do you want help with right now?</label>
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

            {/* Q4 */}
            <div>
              <label className="text-sm font-semibold text-slate-800">
                Q4. What learning support is your child currently using?
              </label>
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

            {/* Q5 */}
            <div>
              <label className="text-sm font-semibold text-slate-800">
                Q5. For a program that improves academics + builds future skills, your comfort budget is
              </label>
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

            {/* Q6 */}
            <div>
              <label className="text-sm font-semibold text-slate-800">Q6. Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mt-2 px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400"
                placeholder="e.g. 9876543210"
                required
              />
            </div>

            {/* Q7 */}
            <div>
              <label className="text-sm font-semibold text-slate-800">Q7. Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400"
                placeholder="e.g. parent@example.com"
                required
              />
            </div>

            {/* Parent contact removed — intentionally left empty */}

            {/* Desktop submit */}
            <div className="hidden sm:block">
              <button
                type="submit"
                disabled={!canSubmit}
                className={classNames(
                  "w-full rounded-full px-4 py-3 font-semibold",
                  canSubmit
                    ? "bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white"
                    : "bg-gray-200 text-gray-500"
                )}
              >
                {loading ? "Submitting…" : "Book Free Demo Now"}
              </button>

              <div className="mt-3 text-xs text-slate-600 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-700 mt-0.5" />
                <p>
                  By submitting, you agree to be contacted by PadhAi Club regarding the demo.
                  <br />
                  Your information is safe and never shared.
                </p>
              </div>
            </div>

            {/* Mobile sticky submit */}
            <div className="sm:hidden">
              <div className="h-24" />
              <div className="sticky bottom-0 z-[120] bg-white border-t border-purple-100 p-3 -mx-5">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={classNames(
                    "w-full rounded-full px-4 py-3 font-semibold",
                    canSubmit
                      ? "bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  )}
                >
                  {loading ? "Submitting…" : "Book Free Demo Now"}
                </button>
                <p className="mt-2 text-[11px] text-slate-600 text-center">
                  By submitting, you agree to be contacted by PadhAi Club regarding the demo. Your information is safe and never shared.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
