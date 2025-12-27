"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, HelpCircle, Shield, MessageCircle, Sprout, BookOpen, Clock, Video, Bot, Sparkles, Star, Heart, Lightbulb, Brain, Rocket } from 'lucide-react';
import { KidFriendlyShapes } from './DecorativeElements';

type FAQItem = {
  question: string;
  answer: string;
  emoji: string;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Is AI really safe for my child?',
    answer:
      'Yes. We use child-safe, filtered AI tools designed for students, with no harmful content, no social media exposure, and no unsafe chats. Children learn only age-appropriate topics inside monitored live classes with trained mentors. Your child learns skills, not random internet browsing.',
    emoji: 'shield',
  },
  {
    question: 'Will screen time increase?',
    answer:
      'Screen time may increase, but it becomes good screen time. Instead of mindless scrolling, gaming addiction, or cartoon binge watching, your child will do projects, homework, creative building, science models, and design & presentations. We follow: Bad screen time → Good skill time.',
    emoji: 'clock',
  },
  {
    question: 'My child is weak in studies. Will this help?',
    answer:
      'Yes, often these children improve the most. AI helps kids complete homework faster, understand concepts visually, build confidence, ask more questions, and enjoy learning. We do not judge marks; we unlock curiosity.',
    emoji: 'book',
  },
  {
    question: 'My child is shy or introvert. Will they be able to participate?',
    answer:
      'Yes. Many of our best performers were shy initially. We ensure small engaging batches, friendly teachers, camera-off comfort at the start, gradual confidence building, and appreciation-based learning. Confidence is built safely.',
    emoji: 'sprout',
  },
  {
    question: 'What exactly will my child learn in this course?',
    answer:
      'AI Skills: prompt writing; image & video creation; presentations with AI; homework assistance; chatbot usage; research using AI. Management & Life Skills: discipline; self-management; communication; goal clarity; curiosity; creativity; problem-solving. This is not just AI; it is mindset building.',
    emoji: 'book',
  },
  {
    question: 'What if my child misses a class?',
    answer:
      'No worries. We provide full class recordings, notes & assignments, and doubt-solving sessions, so your child never falls behind.',
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
      
      {/* Kid-friendly floating shapes */}
      <KidFriendlyShapes />
      
      {/* Mobile decorations */}
      <motion.div
        className="absolute top-8 right-4 md:hidden"
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" }, scale: { repeat: Infinity, duration: 2.5 } }}
      >
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-70" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-3 md:hidden"
        animate={{ y: [0, -6, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Heart className="w-3 h-3 text-pink-400 fill-pink-400 opacity-60" />
      </motion.div>
      <motion.div
        className="absolute top-1/4 left-2 md:hidden"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <Sparkles className="w-4 h-4 text-purple-400 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-3 md:hidden"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      >
        <Bot className="w-4 h-4 text-purple-500 opacity-40" />
      </motion.div>
      
      {/* Desktop Floating AI icons */}
      <motion.div
        className="absolute top-24 right-[8%] hidden lg:block"
        animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl shadow-lg flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-[5%] hidden xl:block"
        animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
      >
        <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-[6%] hidden xl:block"
        animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 6, delay: 1 }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg shadow-md flex items-center justify-center">
          <Brain className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-[10%] hidden lg:block"
        animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4.5 }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl shadow-lg flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
      </motion.div>
      
      {/* Desktop Floating stars and hearts */}
      <motion.div
        className="absolute top-16 left-[15%] hidden lg:block"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" }, scale: { repeat: Infinity, duration: 2 } }}
      >
        <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-[12%] hidden xl:block"
        animate={{ y: [0, -8, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Heart className="w-5 h-5 text-red-400 fill-red-400 drop-shadow-lg" />
      </motion.div>
      
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
