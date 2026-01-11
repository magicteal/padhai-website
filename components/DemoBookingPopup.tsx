"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxoNUPdL8iO0_Bi7WkM3EO0KXO7WRTPln9vbOnq0Tfj1DRnbXKevSy014xt4QRHgeqT/exec";

export default function DemoBookingPopup({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const close = () => {
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!childName.trim() || !childAge || !parentName.trim() || !email.trim() || !phoneNumber.trim()) return;

    setLoading(true);

    try {
      // Create form data for Google Apps Script
      const formData = new FormData();
      formData.append("childName", childName);
      formData.append("childAge", childAge);
      formData.append("parentName", parentName);
      formData.append("email", email);
      formData.append("phoneNumber", phoneNumber);
      formData.append("source", "Demo Booking Form");

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
      alert("Something went wrong. Please try again.");
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
          Book Your Free Demo Session
          <br />
          <span className="text-sm font-normal text-slate-600">Let your child experience AI learning firsthand</span>
        </h3>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
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
            <label className="text-xs text-slate-600">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200"
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
              className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full mt-2 rounded-full px-4 py-2 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white font-semibold disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Book Free Demo Session"}
          </button>
        </form>

        <p className="text-xs text-slate-500 mt-3 text-center">
          No spam. We'll reach out shortly to schedule your demo.
        </p>
      </div>
    </div>
  );
}
