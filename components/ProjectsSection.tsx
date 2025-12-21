import React from 'react';

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

type ProjectItem = {
  title: string;
  grade: string;
  caption: string;
  imageSrc?: string | null;
};

const PROJECTS: ProjectItem[] = [
  {
    title: 'Fire-Fighting Robot',
    grade: 'Grade 6',
    caption: '“This student used AI to plan, design, and optimize the model.”',
    imageSrc: null,
  },
  {
    title: 'Drone Prototype',
    grade: 'Grade 7',
    caption: '“AI helped him understand aerodynamics and testing concepts.”',
    imageSrc: null,
  },
  {
    title: 'Arduino Coding Model',
    grade: 'Grade 8',
    caption: '“AI taught him coding logic step-by-step.”',
    imageSrc: null,
  },
  {
    title: 'Smart Safety Project',
    grade: 'Grade 5',
    caption: '“A complete school exhibition model powered by AI explanations.”',
    imageSrc: null,
  },
  {
    title: 'Human Dummy Research',
    grade: 'Grade 9',
    caption: '“AI-assisted research on crash safety for advanced presentation.”',
    imageSrc: null,
  },
];

export default function ProjectsSection() {
  return (
    <Section id="projects" variant="white" className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block mb-2">
          <span className="text-4xl">🎨</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold leading-tight mb-3 bg-gradient-to-r from-[var(--brand)] to-[#7c3aed] bg-clip-text text-transparent">
          What Real Kids Are Already Creating
        </h2>
        <p className="text-slate-700 text-base font-medium">🌟 Made by PadhAi Students 🌟</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, idx) => (
          <figure
            key={idx}
            className="bg-white rounded-[1.5rem] shadow-xl border-3 border-white/80 overflow-hidden hover:scale-105 transition-transform duration-300 group"
          >
            <div className="w-full h-40 sm:h-44 md:h-48 bg-gradient-to-br from-purple-200 via-violet-200 to-indigo-300 flex items-center justify-center relative overflow-hidden">
              {p.imageSrc ? (
                <img src={p.imageSrc} alt={`${p.title} photo`} className="w-full h-full object-cover" />
              ) : (
                <div className="text-center">
                  <div className="text-4xl mb-1">💡</div>
                  <div className="text-[var(--brand)] font-semibold text-xs">Photo coming soon</div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <figcaption className="p-5 bg-gradient-to-br from-white to-purple-50">
              <div className="flex items-start gap-2 mb-1.5">
                <span className="text-2xl mt-0.5">🏆</span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                  <span className="inline-block mt-1 px-2.5 py-0.5 bg-gradient-to-r from-[var(--brand)] to-[#7c3aed] text-white text-xs rounded-full font-medium">{p.grade}</span>
                </div>
              </div>
              <p className="text-slate-700 text-sm mt-2 leading-relaxed">{p.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-block px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-100 via-violet-100 to-indigo-100 shadow-lg border-3 border-white">
          <p className="text-slate-900 font-bold text-base">
            🌟 Kids start simple. <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-[var(--brand)] to-[#7c3aed] bg-clip-text text-transparent">With the right guidance, they build amazing things!</span> 🚀
          </p>
        </div>
      </div>
    </Section>
  );
}
