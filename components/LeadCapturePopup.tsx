"use client";
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

function toWaMeNumber(input: string) {
  return input.replace(/[^\d]/g, "");
}

function buildWhatsAppUrl(numberRaw: string, message?: string) {
  const number = toWaMeNumber(numberRaw);
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export default function LeadCapturePopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [childAge, setChildAge] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    let fired = false;
    const delayMs = 8000; // fixed 8 sec
    const timer = window.setTimeout(() => {
      if (!fired) {
        fired = true;
        setVisible(true);
      }
    }, delayMs);

    const onScroll = () => {
      const denom = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const scrollPercent = window.scrollY / denom;
      if (scrollPercent > 0.3 && !fired) {
        fired = true;
        setVisible(true);
        clearTimeout(timer);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const close = () => {
    setVisible(false);
    setDismissed(true);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!parentName.trim() || !phone.trim() || !childAge) return;

    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91 98765 43210";
    const msg = `Book Free Child Skill Call - Parent: ${parentName} | Phone: ${phone} | Child age: ${childAge}`;
    const url = buildWhatsAppUrl(number, msg);
    window.open(url, "_blank");
    close();
  };

  if (!visible || dismissed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
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
          Is your child between 5–14?
          <br />Let’s convert screen time into real skills.
        </h3>

        <form onSubmit={onSubmit} className="mt-4 space-y-3">
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
              placeholder="+91 9XXXXXXXXX"
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
                  {age}
                </option>
              ))}
            </select>
          </div>

          <button className="w-full mt-2 rounded-full px-4 py-2 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white font-semibold">
            Book Free Child Skill Call
          </button>
        </form>

        <p className="text-xs text-slate-500 mt-3">We’ll message you on WhatsApp to schedule. No email required.</p>
      </div>
    </div>
  );
}
