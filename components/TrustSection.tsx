import React from 'react';
import { CheckCircle } from 'lucide-react';

type SectionVariant = 'white' | 'light' | 'dark' | 'brand';

const Section: React.FC<{
  id?: string;
  className?: string;
  variant?: SectionVariant;
  children: React.ReactNode;
}> = ({ id, className = '', variant = 'light', children }) => {
  const variants: Record<SectionVariant, string> = {
    white: 'bg-white',
    light: 'bg-brand-50',
    dark: 'bg-slate-900 text-white',
    brand: 'bg-brand-700 text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 relative overflow-hidden ${variants[variant]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">{children}</div>
    </section>
  );
};

const TRUST_POINTS: string[] = [
  'Live Classes (Not just videos)',
  'Class Recordings Provided',
  'Weekly Doubt Solving',
  'Dedicated Mentorship',
  'PTM-Level Parent Support',
  'Safe AI Environment (Child-Friendly Tools)',
  'Bangalore-Lifestyle Friendly Timings',
  'Early Career Exposure',
];

export default function TrustSection() {
  const iconColors = [
    'from-purple-400 to-violet-500',
    'from-indigo-400 to-purple-500',
    'from-violet-400 to-purple-600',
    'from-purple-500 to-indigo-600',
    'from-violet-500 to-purple-700',
    'from-purple-600 to-indigo-700',
    'from-indigo-500 to-violet-600',
    'from-purple-400 to-violet-600',
  ];
  
  return (
    <Section id="trust" variant="white" className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      <div className="text-center mb-10">
        <div className="inline-block mb-2">
          <span className="text-4xl">✅</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold leading-tight mb-3 bg-gradient-to-r from-[var(--brand)] to-[#7c3aed] bg-clip-text text-transparent">
          Why PadhAi Club Works
        </h2>
        <p className="text-slate-700 text-lg font-medium max-w-3xl mx-auto">
          🌟 Because we don't just teach AI — we teach <span className="text-[var(--brand)] font-bold">discipline, mindset, and values!</span> 🌟
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {(() => {
          const left = TRUST_POINTS.slice(0, 4);
          const right = TRUST_POINTS.slice(4);
          return [left, right].map((col, colIdx) => (
            <div key={colIdx} className="space-y-5">
              {col.map((text, idx) => {
                const globalIdx = colIdx * 4 + idx;
                return (
                  <div
                    key={globalIdx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-xl border-3 border-white/80 hover:scale-105 transition-all duration-300 group"
                  >
                    <div className={`w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br ${iconColors[globalIdx]} shadow-lg group-hover:scale-110 transition-transform`}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-800 font-semibold text-base leading-snug pt-2">{text}</span>
                  </div>
                );
              })}
            </div>
          ));
        })()}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-block px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-100 via-violet-100 to-indigo-100 shadow-lg border-3 border-white">
          <p className="text-slate-900 text-lg font-bold">
            🏛️ Bangalore is India's tech hub —
            <span className="bg-gradient-to-r from-[var(--brand)] to-[#7c3aed] bg-clip-text text-transparent"> your child deserves world-class learning early!</span> 🚀
          </p>
        </div>
      </div>
    </Section>
  );
}
