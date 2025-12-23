"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function StorySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const problems = [
    { icon: '📱', title: 'Screen Addicted', desc: 'Kids on screens' },
    { icon: '😰', title: 'Parents Stressed', desc: 'Worried about future' },
    { icon: '🏫', title: 'Schools Overloaded', desc: 'No time for new skills' },
    { icon: '⚠️', title: 'Skills Gap', desc: 'Future not taught' }
  ];

  const transformations = [
    { before: '📱 Screen time', after: '🎯 Skill time' },
    { before: '🎨 Creativity', after: '💪 Confidence' },
    { before: '❓ Questions', after: '🤝 Mentorship' },
    { before: '🤖 AI distraction', after: '🧠 AI learning tool' }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-purple-50">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-indigo-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <motion.span 
            className="text-5xl sm:text-6xl inline-block"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            📖
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text">
            The PadhAi Story
          </h2>
          <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            ✨ Every Bangalore parent wants their child to stand out.
          </p>
        </motion.div>

        {/* Problem Cards - Grid */}
        <div className="space-y-8">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-3"
          >
            <span>😔</span>
            <span className="text-slate-900">But here's the reality:</span>
          </motion.h3>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {problems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center space-y-3 border-2 border-slate-100"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h4 className="font-bold text-lg text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Transformation Flow */}
        <div className="space-y-8">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-3"
          >
            <span>✨</span>
            <span className="gradient-text">So we created PadhAi Club.</span>
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {transformations.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-center gap-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6"
              >
                <div className="flex-1 text-center p-4 bg-slate-100 rounded-xl">
                  <p className="text-sm sm:text-base font-medium text-slate-600">{item.before}</p>
                </div>
                <div className="text-2xl font-bold text-purple-500">→</div>
                <motion.div 
                  className="flex-1 text-center p-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-sm sm:text-base font-bold text-white">{item.after}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hero Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            className="rounded-3xl h-80 bg-gradient-to-br from-purple-400 via-violet-400 to-indigo-500 shadow-2xl flex items-center justify-center relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* Floating decorative circles */}
            <div className="absolute top-8 left-8 w-20 h-20 bg-white/20 rounded-full animate-float" />
            <div className="absolute bottom-12 right-12 w-32 h-32 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/30 rounded-full animate-pulse-glow" />
            
            <div className="text-center relative z-10 px-6">
              <motion.div 
                className="text-7xl sm:text-8xl mb-6"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                🤖
              </motion.div>
              <h3 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
                PadhAi Club
              </h3>
              <p className="text-white/95 text-lg sm:text-xl font-semibold max-w-2xl">
                Where screen time becomes future-ready learning! 🎯
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full shadow-2xl px-8 py-8 max-w-5xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-white text-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌟</span>
              <p className="text-lg sm:text-xl font-bold">Think Smarter</p>
            </div>
            <div className="hidden sm:block w-1 h-8 bg-white/40 rounded-full" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <p className="text-lg sm:text-xl font-bold">Grow Faster</p>
            </div>
            <div className="hidden sm:block w-1 h-8 bg-white/40 rounded-full" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">💫</span>
              <p className="text-lg sm:text-xl font-bold">Dream Bigger</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
