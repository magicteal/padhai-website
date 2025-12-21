import React from 'react';

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

export default function StorySection() {
  return (
    <Section id="story" variant="white" className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Copy column */}
        <div>
          <div className="inline-block mb-3">
            <span className="text-4xl">📖</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold leading-tight mb-5 bg-gradient-to-r from-[var(--brand)] to-[#7c3aed] bg-clip-text text-transparent">
            The PadhAi Story
          </h2>
          <p className="text-slate-800 text-lg mb-6 font-medium">✨ Every Bangalore parent wants their child to stand out.</p>

          <div className="bg-white rounded-[1.5rem] shadow-xl border-3 border-purple-200 p-6 mb-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span>😔</span>
              <span className="text-slate-900">But here's the reality:</span>
            </h3>
            <ul className="space-y-2.5 text-slate-800 text-base">
              <li className="flex items-start gap-2">
                <span>📱</span>
                <span>Kids are on screens.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>😰</span>
                <span>Parents are stressed.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🏫</span>
                <span>Schools are overloaded.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>⚠️</span>
                <span>Future skills are not being taught.</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
            <span>✨</span>
            <span className="bg-gradient-to-r from-[var(--brand)] to-[#7c3aed] bg-clip-text text-transparent">So we created PadhAi Club.</span>
          </h3>
          <div className="bg-white rounded-[1.5rem] shadow-xl border-3 border-indigo-200 p-6 mb-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-3xl">📱</span>
                <div>
                  <p className="text-slate-900 font-bold text-base">Screen time becomes skill time</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-3xl">🎨</span>
                <div>
                  <p className="text-slate-900 font-bold text-base">Creativity becomes confidence</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-3xl">🤝</span>
                <div>
                  <p className="text-slate-900 font-bold text-base">Mentorship becomes guidance</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-3xl">🧠</span>
                <div>
                  <p className="text-slate-900 font-bold text-base">AI becomes a tool for learning, not distraction</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-200 via-violet-200 to-indigo-200 text-slate-900 px-6 py-4 rounded-2xl shadow-xl border-3 border-white">
            <p className="text-lg font-bold text-center">
              🌟 This is where children learn to think smarter, grow faster, and dream bigger! 🚀
            </p>
          </div>
        </div>

        {/* Visual column */}
        <div className="relative">
          <div className="rounded-[2rem] h-80 md:h-[28rem] w-full bg-gradient-to-br from-purple-200 via-violet-200 to-indigo-300 border-3 border-white shadow-xl flex items-center justify-center p-6">
            <div className="text-center">
              <div className="text-5xl mb-4">🤖</div>
              <div className="text-2xl font-extrabold mb-3 text-[var(--brand)]">PadhAi Club</div>
              <p className="text-slate-700 text-base font-medium max-w-md leading-relaxed">
                Mentor-led sessions, playful projects, and safe tools turn everyday screen time into future-ready learning! 🎯
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
