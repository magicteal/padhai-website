"use client";
import { motion } from 'framer-motion';
import {
  Check,
  Video,
  Users,
  Award,
  Star,
  CalendarDays,
  Languages,
  Gift,
  ScrollText,
  Camera,
  Gamepad,
  FlaskConical,
  BadgeCheck,
  Bot,
  Sparkles,
  Brain,
  Palette,
  Lightbulb,
  Heart,
  Rocket
} from 'lucide-react';
import { DoodleDecorations } from './DecorativeElements';

const PROGRAM_ITEMS = [
  { text: 'Course Duration: 6 Weeks (5 Weeks AI + 1 Week Management)', icon: CalendarDays },
  { text: 'Mode: Live online classes + recordings available', icon: Video },
  { text: 'Batch Size: 20–22 kids (personal attention)', icon: Users },
];

const INCLUDE_ITEMS = [
  { text: 'Doubt-solving', icon: Check },
  { text: 'Parent–teacher style meetings', icon: BadgeCheck },
  { text: 'Progress tracking & small tests', icon: ScrollText },
];

const PROJECT_ITEMS = [
  { text: 'Science model ideas', icon: FlaskConical },
  { text: 'Video storytelling', icon: Video },
  { text: 'Gaming or creative model', icon: Gamepad },
];

const AWARD_ITEMS = [
  { text: '50% Scholarship', icon: Award },
  { text: 'Certificate', icon: ScrollText },
  { text: 'Feature in our Gallery', icon: Camera },
];

export default function TrustSection() {
  const colors = [
    'from-purple-500 to-fuchsia-500',
    'from-blue-500 to-cyan-500',
    'from-fuchsia-500 to-pink-500',
    'from-violet-500 to-purple-500',
    'from-pink-500 to-rose-500',
    'from-cyan-500 to-blue-500',
    'from-orange-500 to-yellow-500',
    'from-green-500 to-emerald-500',
  ];
  
  return (
    <section id="trust" className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-purple-300/20 rounded-full blur-3xl" />
      
      {/* Doodle decorations */}
      <DoodleDecorations />
      
      {/* Mobile decorations */}
      <motion.div
        className="absolute top-6 right-4 md:hidden"
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" }, scale: { repeat: Infinity, duration: 2.5 } }}
      >
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-70" />
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-3 md:hidden"
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
        animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      >
        <Bot className="w-4 h-4 text-purple-500 opacity-40" />
      </motion.div>
      
      {/* Desktop Floating AI tool icons */}
      <motion.div
        className="absolute top-20 left-[6%] hidden xl:block"
        animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl shadow-lg flex items-center justify-center">
          <Bot className="w-7 h-7 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-40 right-[8%] hidden lg:block"
        animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5, delay: 1 }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl shadow-lg flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-[10%] hidden xl:block"
        animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 6, delay: 0.5 }}
      >
        <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-24 right-[15%] hidden lg:block"
        animate={{ rotate: [0, 10, -10, 0], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4.5 }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg shadow-md flex items-center justify-center">
          <Brain className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      
      {/* Desktop Floating hearts and stars */}
      <motion.div
        className="absolute top-1/3 left-[3%] hidden lg:block"
        animate={{ y: [0, -10, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Heart className="w-6 h-6 text-red-400 fill-red-400 drop-shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute top-1/4 right-[5%] hidden xl:block"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <Star className="w-7 h-7 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <motion.span 
            className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-3"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Check className="w-7 h-7 text-green-600" />
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3 gradient-text">
            Program Structure - Clear, Simple, Trusted
          </h2>
          <p className="text-slate-700 text-sm sm:text-lg font-medium max-w-3xl mx-auto">
            6 Weeks Total: 5 Weeks AI + real skills, 1 Week Management & Mindset
          </p>
        </motion.div>

        {/* Program Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {PROGRAM_ITEMS.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="card-kid p-4 sm:p-5 flex items-center gap-3 sm:gap-4"
            >
              <motion.div 
                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${colors[idx % colors.length]} shadow-md flex-shrink-0`}
                whileHover={{ rotate: 5 }}
              >
                <point.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-slate-800 font-semibold text-sm sm:text-base">{point.text}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Includes */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {INCLUDE_ITEMS.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="card-kid p-4 sm:p-5 flex items-center gap-3 sm:gap-4"
            >
              <motion.div 
                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${colors[idx % colors.length]} shadow-md flex-shrink-0`}
                whileHover={{ rotate: 5 }}
              >
                <point.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-slate-800 font-semibold text-sm sm:text-base">{point.text}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 sm:my-10 h-px bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200" />

        {/* Final Project, Certificate & Scholarship */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h3 className="text-xl sm:text-2xl font-extrabold leading-tight gradient-text">
            Final Project, Certificate & Scholarship
          </h3>
          <p className="text-slate-700 text-sm sm:text-base max-w-2xl mx-auto">
            Every child completes a final AI project and presents it live.
          </p>
        </motion.div>

        {/* Project Types */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {PROJECT_ITEMS.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="card-kid p-4 sm:p-5 flex items-center gap-3 sm:gap-4"
            >
              <motion.div 
                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${colors[idx % colors.length]} shadow-md flex-shrink-0`}
                whileHover={{ rotate: 5 }}
              >
                <point.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-slate-800 font-semibold text-sm sm:text-base">{point.text}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {AWARD_ITEMS.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="card-kid p-4 sm:p-5 flex items-center gap-3 sm:gap-4"
            >
              <motion.div 
                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${colors[idx % colors.length]} shadow-md flex-shrink-0`}
                whileHover={{ rotate: 5 }}
              >
                <point.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-slate-800 font-semibold text-sm sm:text-base">{point.text}</span>
              </div>
            </motion.div>
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
            <p className="text-slate-900 text-sm sm:text-lg font-bold">
              A clear path: learn, build, and showcase with real outcomes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
