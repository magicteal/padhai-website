import React from 'react';

type SectionVariant = 'white' | 'light' | 'dark' | 'brand';

const Section: React.FC<{
  id?: string;
  className?: string;
  variant?: SectionVariant;
  children: React.ReactNode;
}> = ({ id, className = '', variant = 'brand', children }) => {
  const variants: Record<SectionVariant, string> = {
    white: 'bg-white',
    light: 'bg-brand-50',
    dark: 'bg-slate-900 text-white',
    brand: 'bg-gradient-to-br from-[var(--brand)] via-[#7c3aed] to-[var(--brand)] text-white',
  };

  return (
    <section id={id} className={`py-20 md:py-28 relative overflow-hidden ${variants[variant]} ${className}`}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMjBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">{children}</div>
    </section>
  );
};

export default function CTASection() {
  return (
    <Section id="cta" variant="brand">
      <div className="mb-5">
        <div className="text-6xl mb-3">🦸</div>
      </div>
      
      <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-5">
        Give Your Child a <span className="text-violet-300">Superpower</span> This January! 🌟
      </h2>
      
      <p className="text-xl md:text-2xl mb-3 font-bold">
        ✨ Turn screen time into skill time! ✨
      </p>
      <p className="text-lg md:text-xl mb-8 text-white/90">
        🎯 Start with a <span className="font-bold text-violet-300">FREE counselling call!</span> 📞
      </p>

      <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-6">
        <button className="group bg-white text-[var(--brand)] hover:bg-violet-200 hover:text-slate-900 font-extrabold py-4 px-8 rounded-full shadow-xl transition-all transform hover:scale-110 text-lg flex items-center gap-2">
          <span className="text-2xl group-hover:animate-bounce">📞</span>
          Book Free Call
        </button>
        <button className="group bg-violet-400 text-white hover:bg-violet-300 font-extrabold py-4 px-8 rounded-full shadow-xl transition-all transform hover:scale-110 text-lg flex items-center gap-2">
          <span className="text-2xl group-hover:animate-bounce">🚀</span>
          Enroll Now – Limited Seats!
        </button>
      </div>

      <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border-2 border-white/30">
        <p className="text-white font-bold text-base flex items-center gap-2 flex-wrap justify-center">
          <span className="text-xl">⏰</span>
          Only 40 seats left!
          <span className="text-xl">🔥</span>
        </p>
      </div>
    </Section>
  );
}
