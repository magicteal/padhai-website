"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">{children}</div>
    </section>
  );
};

type FAQItem = {
  question: string;
  answer: string;
  emoji: string;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Is AI safe for my child?',
    answer: 'Yes! We use fully child-safe tools and strict guidance. Your child learns in a protected environment with age-appropriate content.',
    emoji: '🛡️',
  },
  {
    question: "My child doesn't know English properly.",
    answer: 'No worries! Our trainers speak Kannada, Hindi, and English. We adapt to your child\'s comfort level.',
    emoji: '🗣️',
  },
  {
    question: 'My child is shy.',
    answer: 'Perfect! We slowly build confidence through gentle interaction and small group activities. Many shy kids bloom here!',
    emoji: '🌱',
  },
  {
    question: 'Will this help school studies?',
    answer: 'Absolutely! Your child will use AI for homework, projects, better understanding, and creative assignments. Teachers will notice the difference!',
    emoji: '📚',
  },
  {
    question: 'Will screen time increase?',
    answer: 'Yes — but in a healthy, productive way! This is GOOD screen time focused on learning, creating, and building skills.',
    emoji: '⏰',
  },
  {
    question: 'What if my child misses a class?',
    answer: 'No problem! We provide full class recordings AND doubt-solving sessions so your child never falls behind.',
    emoji: '🎥',
  },
];

const FAQAccordionItem: React.FC<{ item: FAQItem; index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const gradients = [
    'from-purple-100 to-violet-100',
    'from-violet-100 to-indigo-100',
    'from-indigo-100 to-purple-100',
    'from-purple-100 to-indigo-100',
    'from-violet-100 to-purple-100',
    'from-indigo-100 to-violet-100',
  ];

  return (
    <div className={`bg-gradient-to-r ${gradients[index % gradients.length]} rounded-xl shadow-lg border-3 border-white overflow-hidden hover:scale-102 transition-all`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/30 transition-colors"
      >
        <div className="flex items-start gap-3 pr-3">
          <span className="text-3xl shrink-0">{item.emoji}</span>
          <span className="font-extrabold text-slate-900 text-base">{item.question}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-[var(--brand)] shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pl-16">
          <p className="text-slate-800 font-medium text-sm leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQSection() {
  return (
    <Section id="faq" variant="light" className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      <div className="text-center mb-10">
        <div className="inline-block mb-2">
          <span className="text-4xl">❓</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold leading-tight mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-slate-700 font-bold">💬 Bangalore Parent Style 💬</p>
      </div>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item, idx) => (
          <FAQAccordionItem key={idx} item={item} index={idx} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <div className="inline-block px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-200 via-violet-200 to-indigo-200 shadow-xl border-3 border-white">
          <p className="text-slate-900 font-extrabold text-lg">
            🤔 Still have questions? <span className="text-[var(--brand)]">Book a FREE call with us!</span> 📞
          </p>
        </div>
      </div>
    </Section>
  );
}
