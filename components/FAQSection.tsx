"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, HelpCircle, Shield, MessageCircle, Sprout, BookOpen, Clock, Video } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
  emoji: string;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Is AI safe for my child?',
    answer: 'Yes! We use fully child-safe tools and strict guidance. Your child learns in a protected environment with age-appropriate content.',
    emoji: 'shield',
  },
  {
    question: "My child doesn't know English properly.",
    answer: 'No worries! Our trainers speak Kannada, Hindi, and English. We adapt to your child\'s comfort level.',
    emoji: 'message',
  },
  {
    question: 'My child is shy.',
    answer: 'Perfect! We slowly build confidence through gentle interaction and small group activities. Many shy kids bloom here!',
    emoji: 'sprout',
  },
  {
    question: 'Will this help school studies?',
    answer: 'Absolutely! Your child will use AI for homework, projects, better understanding, and creative assignments. Teachers will notice the difference!',
    emoji: 'book',
  },
  {
    question: 'Will screen time increase?',
    answer: 'Yes — but in a healthy, productive way! This is GOOD screen time focused on learning, creating, and building skills.',
    emoji: 'clock',
  },
  {
    question: 'What if my child misses a class?',
    answer: 'No problem! We provide full class recordings AND doubt-solving sessions so your child never falls behind.',
    emoji: 'video',
  },
];

const FAQAccordionItem: React.FC<{ item: FAQItem; index: number; isOpen: boolean; onToggle: () => void }> = ({ 
  item, 
  index, 
  isOpen, 
  onToggle 
}) => {
  const gradients = [
    'from-purple-50 to-purple-100',
    'from-purple-100 to-violet-100',
    'from-violet-50 to-purple-50',
    'from-purple-50 to-violet-100',
    'from-violet-100 to-purple-100',
    'from-purple-100 to-purple-50',
  ];

  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-5 h-5 text-purple-600" };
    switch(iconName) {
      case 'shield': return <Shield {...iconProps} />;
      case 'message': return <MessageCircle {...iconProps} />;
      case 'sprout': return <Sprout {...iconProps} />;
      case 'book': return <BookOpen {...iconProps} />;
      case 'clock': return <Clock {...iconProps} />;
      case 'video': return <Video {...iconProps} />;
      default: return <HelpCircle {...iconProps} />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`bg-gradient-to-r ${gradients[index % gradients.length]} rounded-xl sm:rounded-2xl shadow-md border-2 border-white overflow-hidden`}
    >
      <motion.button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-white/50 transition-colors touch-target"
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-start gap-2 sm:gap-3 pr-3">
          <motion.div 
            className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0"
            animate={isOpen ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {getIcon(item.emoji)}
          </motion.div>
          <span className="font-bold text-slate-900 text-sm sm:text-base mt-2">{item.question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-purple-600" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pb-4 sm:px-5 sm:pb-5 pl-12 sm:pl-16">
              <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-300/20 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <motion.div 
            className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-100 flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <HelpCircle className="w-8 h-8 text-purple-600" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-medium">Common questions from Bangalore parents</p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <FAQAccordionItem 
              key={idx} 
              item={item} 
              index={idx}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 text-center"
        >
          <motion.div 
            className="inline-block px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white shadow-lg border-2 border-purple-100"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-slate-900 font-bold text-sm sm:text-lg flex items-center gap-2 justify-center flex-wrap">
              Still have questions? 
              <span className="gradient-text">Book a FREE call with us!</span> 
              <Phone className="w-5 h-5 text-purple-600" />
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
