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

const TESTIMONIAL_VIDEOS: string[] = [
  'https://res.cloudinary.com/di98qhrpu/video/upload/v1766146752/Testimonial-three_w0jrjs.mp4',
  'https://res.cloudinary.com/di98qhrpu/video/upload/v1766144351/Testimonial-two_pr7z6d.mp4',
  'https://res.cloudinary.com/di98qhrpu/video/upload/v1766144343/Testimonial-one_rbjmsn.mp4',
];

export default function ProblemSection() {
  return (
    <section 
      id="problem" 
      className="py-16 md:py-24 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/problemsection.png)' }}
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> 
        <div className="text-center max-w-3xl mx-auto mb-10 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold leading-tight mb-3 text-slate-900">
            Bangalore Parents Section
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start relative z-10">
        {/* Left Card - Problem (message bubble from left) */}
        <div className="relative bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border-2 border-purple-200 max-w-sm md:-translate-y-6">
          <h3 className="text-lg font-bold text-slate-900 mb-3">😔 The Struggle</h3>
          <ul className="space-y-2.5 text-sm">
            {REALITY_CHECKS.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-400 to-violet-500 shadow-md flex-shrink-0">
                  <XCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-800 font-medium pt-1">{item}</span>
              </li>
            ))}
          </ul>
          {/* tail */}
          <span
            aria-hidden
            style={{
              position: 'absolute',
              left: '-20px',
              bottom: '18px',
              width: 0,
              height: 0,
              borderTop: '14px solid transparent',
              borderBottom: '14px solid transparent',
              borderRight: '22px solid rgba(255,255,255,0.95)'
            }}
          />
        </div>

        {/* Center - Building illustration (empty space for background) */}
        <div className="hidden md:block h-64"></div>

        {/* Right Card - Solution (message bubble from right) */}
        <div className="relative bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border-2 border-indigo-200 max-w-sm ml-auto md:translate-y-2">
          <h3 className="text-lg font-bold text-slate-900 mb-3">✨ The PadhAi Way</h3>
          <ul className="space-y-2.5 text-sm">
            {SOLUTION_BENEFITS.slice(0, 5).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-500 shadow-md flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-800 font-medium pt-1">{item}</span>
              </li>
            ))}
          </ul>
          {/* tail */}
          <span
            aria-hidden
            style={{
              position: 'absolute',
              right: '-18px',
              bottom: '18px',
              width: 0,
              height: 0,
              borderTop: '12px solid transparent',
              borderBottom: '12px solid transparent',
              borderLeft: '20px solid rgba(255,255,255,0.95)'
            }}
          />
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-center gap-2 mb-5">
          <span className="text-3xl">🎥</span>
          <h4 className="text-xl font-extrabold text-slate-900">Watch Kids Share Their Experience!</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 justify-items-center">
          {TESTIMONIAL_VIDEOS.map((src, i) => (
            <div key={i} className="w-full max-w-xs">
              <video
                src={src}
                controls
                playsInline
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-[1.5rem] shadow-xl border-3 border-white bg-slate-50"
                aria-label={`Testimonial video ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="inline-block px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-200 via-violet-200 to-indigo-200 shadow-xl border-3 border-white">
          <p className="text-slate-900 font-extrabold text-lg">
            🌟 First structured, safe AI program for Bangalore kids! 🚀
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}