"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const TRUST_POINTS = [
  { text: 'Live Classes (Not just videos)', emoji: '📹' },
  { text: 'Class Recordings Provided', emoji: '💾' },
  { text: 'Weekly Doubt Solving', emoji: '❓' },
  { text: 'Dedicated Mentorship', emoji: '👨‍🏫' },
  { text: 'PTM-Level Parent Support', emoji: '👪' },
  { text: 'Safe AI Environment (Child-Friendly Tools)', emoji: '🛡️' },
  { text: 'Bangalore-Lifestyle Friendly Timings', emoji: '⏰' },
  { text: 'Early Career Exposure', emoji: '🚀' },
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
    <section id="trust" className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-fuchsia-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <motion.span 
            className="text-4xl sm:text-5xl inline-block mb-3"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            ✅
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3 gradient-text">
            Why PadhAi Club Works
          </h2>
          <p className="text-slate-700 text-sm sm:text-lg font-medium max-w-3xl mx-auto">
            🌟 Because we don't just teach AI — we teach{' '}
            <span className="gradient-text font-bold">discipline, mindset, and values!</span> 🌟
          </p>
        </motion.div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {TRUST_POINTS.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="card-kid p-4 sm:p-5 flex items-center gap-3 sm:gap-4"
            >
              <motion.div 
                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${colors[idx]} shadow-lg flex-shrink-0`}
                whileHover={{ rotate: 10 }}
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xl sm:text-2xl">{point.emoji}</span>
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
            className="inline-block px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-purple-200 via-fuchsia-200 to-pink-200 shadow-lg border-2 sm:border-3 border-white"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-slate-900 text-sm sm:text-lg font-bold">
              🏛️ Bangalore is India's tech hub —
              <span className="gradient-text"> your child deserves world-class learning early!</span> 🚀
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
