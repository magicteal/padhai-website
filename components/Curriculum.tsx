"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Award, Video, ShieldCheck, Users, Clock } from 'lucide-react';

const CURRICULUM_MODULES = [
  {
    title: 'AI Creativity & Prompting',
    description: 'Kids learn how to use AI like a smart assistant to create stories, drawings, videos, and school assignments safely.',
    icon: Sparkles,
    color: 'from-purple-500 to-violet-500',
  },
  {
    title: 'Management for Kids',
    description: 'Mind-Shaping Week teaching confidence, communication, time management, self-discipline, and habit building.',
    icon: Brain,
    color: 'from-purple-600 to-purple-400',
  },
  {
    title: 'Final Project + Rewards',
    description: 'Kids submit innovation projects (Science models, Storybooks, Game concepts) to win scholarships and kits.',
    icon: Award,
    color: 'from-violet-500 to-purple-500',
  },
];

const TRUST_FEATURES = [
  { title: 'Live Classes', description: 'Interactive, not passive watching.', icon: Video },
  { title: 'Safe Environment', description: 'Child-friendly tools only.', icon: ShieldCheck },
  { title: 'Mentorship', description: 'Weekly doubt solving & guidance.', icon: Users },
  { title: 'Bangalore Timings', description: 'Designed for busy schedules.', icon: Clock },
];

export default function Curriculum() {
  return (
    <>
      {/* Curriculum Section */}
      <section id="curriculum" className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-purple-300/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <motion.div 
              className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-100 flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Award className="w-8 h-8 text-purple-600" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 gradient-text">
              What Your Child Will Learn
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">A Future-Ready Skillset for Bangalore Kids</p>
          </motion.div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {CURRICULUM_MODULES.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-kid p-5 sm:p-6 relative overflow-hidden group"
              >
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${module.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
                
                <div className="relative z-10">
                  <motion.div 
                    className={`w-14 h-14 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <module.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{module.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{module.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-purple-800 via-purple-900 to-purple-800">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-[100px] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Why PadhAi Club <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-400">Works</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Because we don't just teach AI — we teach{' '}
              <span className="text-purple-300 font-bold">discipline, mindset, and values.</span>
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {TRUST_FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="group text-center p-4 sm:p-5 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <motion.div 
                  className="mx-auto mb-3 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-400/20 flex items-center justify-center group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="w-6 h-6 text-purple-300" />
                </motion.div>
                <h4 className="text-white font-bold mb-1.5 text-sm sm:text-base">{feature.title}</h4>
                <p className="text-slate-400 text-xs sm:text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom text */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="text-slate-300 text-sm sm:text-base">
              Bangalore is India's tech hub — your child deserves world-class learning early.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
