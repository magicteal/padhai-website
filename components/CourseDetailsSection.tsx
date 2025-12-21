import React from 'react';
import { Check } from 'lucide-react';

export default function CourseDetailsSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-900 text-center mb-16">
          Pricing Card
        </h2>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            {/* ================= PRICING CARD ================= */}
            <div className="relative z-10 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 backdrop-blur-md rounded-3xl border border-purple-200/40 shadow-2xl p-8 text-center overflow-hidden">

              {/* Ribbons moved INSIDE card so they're clipped by edges */}
              <img
                src="/images/ribbon-tr.svg"
                className="absolute -top-24 -right-28 z-0 w-[420px] h-[220px] pointer-events-none"
                alt=""
                aria-hidden="true"
              />

              <img
                src="/images/ribbon-bl.svg"
                className="absolute -bottom-28 -left-32 z-0 w-[420px] h-[220px] pointer-events-none"
                alt=""
                aria-hidden="true"
              />

              <h3 className="text-3xl md:text-4xl font-bold text-purple-700 mb-2">
                New Year Offer: ₹16,000
              </h3>

              <p className="text-lg text-purple-400 line-through mb-8">
                Original: ₹22,600
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start justify-center gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-left">
                    Get benefits and fixing problems
                  </span>
                </li>

                <li className="flex items-start justify-center gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-left">
                    Process all bank transaction and its generated
                  </span>
                </li>

                <li className="flex items-start justify-center gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-left">
                    Get to know about our active location
                  </span>
                </li>
              </ul>

              <button className="w-full rounded-full bg-gradient-to-r from-purple-600 to-purple-700 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:brightness-110">
                Boost Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
