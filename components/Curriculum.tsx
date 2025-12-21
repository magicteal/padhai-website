import React from 'react';
import { Sparkles, Brain, Award, Video, ShieldCheck, Users, Clock } from 'lucide-react';

type SectionVariant = 'white' | 'light' | 'dark' | 'brand';

export const Section: React.FC<{
  id?: string;
  className?: string;
  children: React.ReactNode;
  variant?: SectionVariant;
}> = ({ id, className = '', children, variant = 'white' }) => {
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

type FeatureItem = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const CURRICULUM_MODULES: FeatureItem[] = [
  {
    title: 'AI Creativity & Prompting',
    description:
      'Kids learn how to use AI like a smart assistant to create stories, drawings, videos, and school assignments safely.',
    icon: Sparkles,
  },
  {
    title: 'Management for Kids',
    description:
      'Mind-Shaping Week teaching confidence, communication, time management, self-discipline, and habit building.',
    icon: Brain,
  },
  {
    title: 'Final Project + Rewards',
    description:
      'Kids submit innovation projects (Science models, Storybooks, Game concepts) to win scholarships and kits.',
    icon: Award,
  },
];

const TRUST_FEATURES: FeatureItem[] = [
  { title: 'Live Classes', description: 'Interactive, not passive watching.', icon: Video },
  { title: 'Safe Environment', description: 'Child-friendly tools only.', icon: ShieldCheck },
  { title: 'Mentorship', description: 'Weekly doubt solving & guidance.', icon: Users },
  { title: 'Bangalore Timings', description: 'Designed for busy schedules.', icon: Clock },
];

export const Curriculum: React.FC = () => {
  const emojis = ['✨', '🧠', '🏆'];
  return (
    <Section id="curriculum" variant="light">
      <div className="text-center mb-10">
        <div className="inline-block mb-2">
          <span className="text-4xl">📚</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-[var(--brand)] to-[#7c3aed] bg-clip-text text-transparent">
          What Your Child Will Learn
        </h2>
        <p className="text-slate-600 text-base">🎯 A Future-Ready Skillset for Bangalore Kids 🚀</p>
      </div>

          <div className="grid md:grid-cols-3 gap-5">
            {CURRICULUM_MODULES.map((module, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white via-purple-50 to-pink-50 p-6 rounded-[1.5rem] shadow-xl border-2 border-white/60 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-3">{emojis[idx]}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--brand)] to-[#7c3aed] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{module.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{module.description}</p>
                </div>
              </div>
            ))}
          </div>
    </Section>
  );
};

export const Trust: React.FC = () => {
  return (
    <Section id="trust" variant="dark" className="relative">
       <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-[100px] opacity-20"></div>
       <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 rounded-full blur-[100px] opacity-20"></div>
       
      <div className="text-center mb-12 relative z-10">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
          Why PadhAi Club Works
        </h2>
        <p className="text-slate-300 text-base">
          Because we don’t just teach AI — we teach <span className="text-accent-400 font-bold">discipline, mindset, and values.</span>
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        {TRUST_FEATURES.map((feature, idx) => (
          <div key={idx} className="group text-center p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="mx-auto mb-3 p-2 rounded-full bg-white/5 transition-colors duration-200 group-hover:bg-[var(--brand)]">
              <feature.icon className="w-5 h-5 text-accent-400 group-hover:text-white transition-colors duration-200" />
            </div>
            <h4 className="text-white font-bold mb-1.5 text-sm">{feature.title}</h4>
            <p className="text-slate-400 text-xs">{feature.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center text-slate-300 text-sm relative z-10">
        Bangalore is India’s tech hub — your child deserves world-class learning early.
      </div>
    </Section>
  );
};

export default Curriculum;