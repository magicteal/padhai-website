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
  return (
    <Section id="curriculum">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand)' }}>
          What Your Child Will Learn
        </h2>
        <p className="text-slate-600">A Future-Ready Skillset for Bangalore Kids</p>
      </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CURRICULUM_MODULES.map((module, idx) => (
              <div
                key={idx}
                className="bg-[var(--brand-50)] p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[var(--brand)] group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md text-[var(--brand)] group-hover:bg-[var(--brand)] group-hover:text-white transition-colors duration-300">
                  <module.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-[var(--brand)] mb-3">{module.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{module.description}</p>
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
       
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Why PadhAi Club Works
        </h2>
        <p className="text-slate-300 text-lg">
          Because we don’t just teach AI — we teach <span className="text-accent-400 font-bold">discipline, mindset, and values.</span>
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        {TRUST_FEATURES.map((feature, idx) => (
          <div key={idx} className="group text-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="mx-auto mb-4 p-3 rounded-full bg-white/5 transition-colors duration-200 group-hover:bg-[var(--brand)]">
              <feature.icon className="w-6 h-6 text-accent-400 group-hover:text-white transition-colors duration-200" />
            </div>
            <h4 className="text-white font-bold mb-2">{feature.title}</h4>
            <p className="text-slate-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center text-slate-300 relative z-10">
        Bangalore is India’s tech hub — your child deserves world-class learning early.
      </div>
    </Section>
  );
};

export default Curriculum;