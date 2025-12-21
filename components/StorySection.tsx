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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-indigo-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Copy column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-block mb-3">
              <motion.span 
                className="text-4xl sm:text-5xl inline-block"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                📖
              </motion.span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4 gradient-text"
            >
              The PadhAi Story
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-slate-800 text-base sm:text-lg mb-6 font-medium"
            >
              ✨ Every Bangalore parent wants their child to stand out.
            </motion.p>

            {/* Problem Card */}
            <motion.div 
              variants={itemVariants}
              className="card-kid mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 flex items-center gap-2">
                <span>😔</span>
                <span className="text-slate-900">But here's the reality:</span>
              </h3>
              <ul className="space-y-2 text-slate-800 text-sm sm:text-base">
                {[
                  { icon: '📱', text: 'Kids are on screens.' },
                  { icon: '😰', text: 'Parents are stressed.' },
                  { icon: '🏫', text: 'Schools are overloaded.' },
                  { icon: '⚠️', text: 'Future skills are not being taught.' }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.h3 
              variants={itemVariants}
              className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2"
            >
              <span>✨</span>
              <span className="gradient-text">So we created PadhAi Club.</span>
            </motion.h3>

            {/* Solution Card */}
            <motion.div 
              variants={itemVariants}
              className="card-kid border-indigo-200 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: '📱', text: 'Screen time becomes skill time' },
                  { icon: '🎨', text: 'Creativity becomes confidence' },
                  { icon: '🤝', text: 'Mentorship becomes guidance' },
                  { icon: '🧠', text: 'AI becomes a tool for learning, not distraction' }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <span className="text-2xl sm:text-3xl">{item.icon}</span>
                    <p className="text-slate-900 font-bold text-sm sm:text-base">{item.text}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Banner */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm sm:text-lg font-bold text-center">
                🌟 This is where children learn to think smarter, grow faster, and dream bigger! 🚀
              </p>
            </motion.div>
          </motion.div>

          {/* Visual column */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="rounded-3xl h-64 sm:h-80 md:h-[28rem] w-full bg-gradient-to-br from-purple-300 via-violet-300 to-indigo-400 border-4 border-white shadow-2xl flex items-center justify-center p-4 sm:p-6 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated background elements */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-white/20 rounded-full animate-float" />
              <div className="absolute bottom-8 right-8 w-24 h-24 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/30 rounded-full animate-pulse-glow" />
              
              <div className="text-center relative z-10">
                <motion.div 
                  className="text-5xl sm:text-6xl md:text-7xl mb-4"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  🤖
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white drop-shadow-lg">
                  PadhAi Club
                </h3>
                <p className="text-white/90 text-sm sm:text-base font-medium max-w-md leading-relaxed px-2">
                  Mentor-led sessions, playful projects, and safe tools turn everyday screen time into future-ready learning! 🎯
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
