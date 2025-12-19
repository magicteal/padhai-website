import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

type SectionVariant = 'white' | 'light' | 'dark' | 'brand';

const Section: React.FC<{
  id?: string;
  className?: string;
  variant?: SectionVariant;
  children: React.ReactNode;
}> = ({ id, className = '', variant = 'white', children }) => {
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

const REALITY_CHECKS: string[] = [
  'Parents working long hours',
  'Heavy traffic, late evenings',
  'Kids using phones/tablets',
  "Fear of 'bad screen time'",
  'Worry about future competition',
];

const SOLUTION_BENEFITS: string[] = [
  'Create stories, characters & animations',
  'Make school projects in minutes',
  'Use AI for homework & understanding tough topics',
  'Build discipline and communication',
  'Explore hobbies & early career paths',
  'Use technology safely with mentorship',
];

export default function ProblemSection() {
  return (
    <Section id="problem" variant="light">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand)' }}>
          The Bangalore Parenting Reality
        </h2>
        <p className="text-lg text-slate-600">
          Parents Are Busy. Kids Are On Screens. <br />
          <span className="font-bold" style={{ color: 'var(--brand)' }}>We convert that into good skill time.</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* The Problem */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-red-400 relative">
          <div className="absolute -top-6 left-8 bg-red-500 text-white px-4 py-2 rounded-lg font-bold shadow-md">
            The Struggle
          </div>
          <h3 className="text-xl font-bold mb-6 text-slate-800 mt-2">Every Bangalore family knows this story:</h3>
          <ul className="space-y-4">
            {REALITY_CHECKS.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-600">
                <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* The Solution */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-green-500 relative transform md:-translate-y-4 md:scale-105 z-10 ring-1 ring-black/5">
          <div className="absolute -top-6 left-8 bg-green-500 text-white px-4 py-2 rounded-lg font-bold shadow-md">
            The PadhAi Way
          </div>
          <h3 className="text-xl font-bold mb-6 text-slate-800 mt-2">Imagine if your child used the same screen to:</h3>
          <ul className="space-y-4">
            {SOLUTION_BENEFITS.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium">
                <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl font-display font-semibold text-brand-800 bg-brand-100 inline-block px-8 py-4 rounded-2xl">
          It is the first structured, safe, high-impact AI learning program <br /> designed specifically for Bangalore children.
        </p>
      </div>
    </Section>
  );
}