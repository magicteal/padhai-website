"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';
import testimonialVideos from '../data/testimonialVideos';

const REALITY_CHECKS = [
  { text: 'Parents working long hours', emoji: '⏰' },
  { text: 'Heavy traffic, late evenings', emoji: '🚗' },
  { text: 'Kids using phones/tablets', emoji: '📱' },
  { text: "Fear of 'bad screen time'", emoji: '😟' },
  { text: 'Worry about future competition', emoji: '🏃' },
];

const SOLUTION_BENEFITS = [
  { text: 'Create stories, characters & animations', emoji: '✨' },
  { text: 'Make school projects in minutes', emoji: '📚' },
  { text: 'Use AI for homework & understanding', emoji: '🧠' },
  { text: 'Build discipline and communication', emoji: '💪' },
  { text: 'Explore hobbies & early career paths', emoji: '🎯' },
];

// testimonialVideos imported from data/testimonialVideos.ts

export default function ProblemSection() {
  return (
    <section 
      id="problem" 
      className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/problemsection.png)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> 
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
        >
          <motion.span 
            className="text-4xl sm:text-5xl inline-block mb-3"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🏙️
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3 text-slate-900">
            Bangalore Parents, <span className="gradient-text">We Get It!</span>
          </h2>
        </motion.div>

        {/* Problem & Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Left Card - Problem */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-kid p-5 sm:p-6 md:-translate-y-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">😔</span>
              <h3 className="text-lg font-bold text-slate-900">The Struggle</h3>
            </div>
            <ul className="space-y-3">
              {REALITY_CHECKS.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-red-400 to-rose-500 shadow-md flex-shrink-0">
                    <XCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-slate-800 font-medium text-sm">{item.text}</span>
                    <span className="ml-2">{item.emoji}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Center - Building illustration space */}
          <div className="hidden md:flex items-center justify-center h-64">
            <motion.div 
              className="text-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
            </motion.div>
          </div>

          {/* Right Card - Solution */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-kid p-5 sm:p-6 md:translate-y-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✨</span>
              <h3 className="text-lg font-bold text-slate-900">The PadhAi Way</h3>
            </div>
            <ul className="space-y-3">
              {SOLUTION_BENEFITS.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500 to-fuchsia-500 shadow-md flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-slate-800 font-medium text-sm">{item.text}</span>
                    <span className="ml-2">{item.emoji}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Video Testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 justify-items-center">
            {testimonialVideos.slice(0, 3).map((src, i) => (
              <motion.div 
                key={i} 
                className="w-full max-w-xs"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  className="rounded-2xl sm:rounded-[1.5rem] overflow-hidden shadow-xl border-3 border-white bg-slate-50"
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <video
                    src={src}
                    poster={`/images/testimonials/testimonial-${['four','five','six'][i]}.svg`}
                    controls
                    playsInline
                    className="w-full h-[280px] sm:h-[320px] md:h-[380px] object-cover"
                    aria-label={`Testimonial video ${i + 1}`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 text-center"
        >
          <motion.div 
            className="inline-block px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-purple-200 via-violet-200 to-fuchsia-200 shadow-xl border-3 border-white"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-slate-900 font-extrabold text-sm sm:text-lg">
              🌟 First structured, safe AI program for Bangalore kids! 🚀
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
