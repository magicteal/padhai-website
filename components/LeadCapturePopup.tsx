"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export default function LeadCapturePopup({ onClose }: { onClose?: () => void }) {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [loading, setLoading] = useState(false);

  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [childAge, setChildAge] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Only auto-show when used globally (no onClose handler passed)
    if (onClose) return;
    const timer = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const close = () => {
    setVisible(false);
    setDismissed(true);
    onClose?.();
  };

  const handleSubmit = async () => {
    if (!parentName || !phone || !childAge) return;

    setLoading(true);

    try {
      await fetch("/api/syllabus-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parentName,
          phone,
          childAge,
          source: "Lead Capture Popup",
        }),
      });

      // Redirect to thank-you page
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting lead:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const gated = !onClose; // when used globally, gate by timer
  if ((gated && !visible) || dismissed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={close} />

      <div className="relative w-full max-w-md mx-4 rounded-2xl bg-white p-6 shadow-xl border border-purple-100">
        <button
          aria-label="Close"
          onClick={close}
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-extrabold text-purple-700 leading-snug">
          Is your child between 5–14?
          <br />
          Let's convert screen time into real skills.
        </h3>

        <div className="mt-4 space-y-3">
          <div>
            <label className="text-xs text-slate-600">Parent Name</label>
            <input
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200"
              placeholder="Parent name"
              required
            />
          </div>

          <div>
            <label className="text-xs text-slate-600">Phone Number</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200"
              placeholder="+91 XXXXXXXXXX"
              inputMode="tel"
              required
            />
          </div>

          <div>
            <label className="text-xs text-slate-600">Child Age</label>
            <select
              value={childAge}
              onChange={(e) => setChildAge(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200"
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

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full mt-2 rounded-full px-4 py-2 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white font-semibold disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Book Free Child Skill Call"}
          </button>
        </div>

        <p className="text-xs text-slate-500 mt-3 text-center">
          No WhatsApp. No spam. We'll reach out shortly.
        </p>
      </div>
    </div>
  );
}
