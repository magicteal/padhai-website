"use client";
import React, { useState } from "react";
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

export default function DemoBookingPopup({ onClose }: { onClose: () => void }) {
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!childName.trim() || !childAge || !parentName.trim() || !email.trim()) return;

    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91 98765 43210";
    const msg = `Book Demo Seat - Child: ${childName} (${childAge} years) | Parent: ${parentName} | Email: ${email}`;
    const url = buildWhatsAppUrl(number, msg);
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative w-full max-w-md mx-4 rounded-2xl bg-white p-6 shadow-xl border border-purple-100 animate-bounce-in">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-extrabold text-purple-700 leading-snug">
          Book Your Free Demo Session
          <br />
          <span className="text-sm font-normal text-slate-600">Let your child experience AI learning firsthand</span>
        </h3>

        <form onSubmit={onSubmit} className="mt-4 space-y-3">
          <div>
            <label className="text-xs text-slate-600">Child Name</label>
            <input
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200"
              placeholder="Enter child's name"
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

          <div>
            <label className="text-xs text-slate-600">Parent Name</label>
            <input
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="text-xs text-slate-600">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <button className="w-full mt-2 rounded-full px-4 py-2 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white font-semibold">
            Book Free Demo Session
          </button>
        </form>

        <p className="text-xs text-slate-500 mt-3">We'll contact you on WhatsApp to schedule your demo session.</p>
      </div>
    </div>
  );
}
