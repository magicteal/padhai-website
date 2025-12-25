"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Star, Gift, Rocket, Lock, Users, Phone } from 'lucide-react';
import { useAppStore } from '@/lib/store';

export default function CourseDetailsSection() {
  const features = [
    '24 weeks of mentor-led AI learning',
    'Build 6+ real-world AI projects',
    'Small batch sizes (max 12 students)',
    'Weekly progress reports for parents',
    'Certificate on completion',
    'Lifetime access to project resources'
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-purple-50/50 to-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-fuchsia-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <motion.div 
            className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-3"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Gift className="w-7 h-7 text-purple-600" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text mb-2">
            January Special Launch
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">Original Fee → ₹23,600 • Launch Price → ₹16,000 Only</p>
        </motion.div>

        {/* Parent testimonials placed before pricing to build trust */}
        <div className="flex justify-center mb-6">
          <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {/** show up to 2 featured parent text testimonials */}
            {useAppStore.getState().testimonials.filter(t => t.featured).slice(0,2).map((t) => (
              <div key={t.id} className="card-kid p-4 bg-white/90 rounded-2xl shadow-md">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center text-white">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">{t.author}</div>
                    <div className="text-xs text-slate-600 mt-2">{t.quote}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-md"
          >
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-3xl blur-xl opacity-30 animate-pulse-glow" />

            {/* Decorative ribbons (back + front) */}
            {/* Back ribbons (appear behind the card) */}
            <svg className="absolute -top-10 -right-12 w-56 h-40 pointer-events-none z-5 opacity-90 filter" viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <linearGradient id="ribbonTRBack" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E879F9" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
              </defs>
              <path d="M40 20 C180 40, 240 180, 380 200 L350 220 C210 200, 140 60, 20 40 Z" fill="url(#ribbonTRBack)" />
            </svg>

            <svg className="absolute -bottom-10 -left-12 w-64 h-44 pointer-events-none z-5 opacity-90 filter" viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <linearGradient id="ribbonBLBack" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#F472B6" />
                </linearGradient>
              </defs>
              <path d="M380 200 C240 180, 180 40, 40 20 L70 0 C210 20, 280 160, 400 180 Z" fill="url(#ribbonBLBack)" />
            </svg>

            {/* Front ribbons (appear above the card) */}
            <svg className="absolute -top-8 -right-8 w-48 h-36 pointer-events-none z-40 filter drop-shadow-2xl" viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <linearGradient id="ribbonTR" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E879F9" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
              </defs>
              <path d="M40 20 C180 40, 240 180, 380 200 L350 220 C210 200, 140 60, 20 40 Z" fill="url(#ribbonTR)" />
            </svg>

            <svg className="absolute -bottom-8 -left-8 w-56 h-40 pointer-events-none z-40 filter drop-shadow-2xl" viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <linearGradient id="ribbonBL" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#F472B6" />
                </linearGradient>
              </defs>
              <path d="M380 200 C240 180, 180 40, 40 20 L70 0 C210 20, 280 160, 400 180 Z" fill="url(#ribbonBL)" />
            </svg>

            {/* Badge (moved outside the overflow-hidden card to prevent clipping) */}
            <motion.div 
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-40"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-lg">
                <Gift className="w-3.5 h-3.5" />
                <span>29% OFF</span>
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </motion.div>

            {/* Pricing Card */}
            <motion.div 
              className="relative z-10 bg-white/90 backdrop-blur-md rounded-3xl border-2 border-purple-200 shadow-2xl p-8 sm:p-10 text-center overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* subtle inner corner highlights removed in favor of ribbons */}
              <div className="mt-4 mb-6">
                <motion.div 
                  className="flex items-center justify-center gap-2 mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-slate-400 line-through text-lg sm:text-xl">₹23,600</span>
                </motion.div>
                <motion.h3 
                  className="text-4xl sm:text-5xl font-extrabold gradient-text"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  ₹16,000
                </motion.h3>
                <p className="text-slate-500 text-sm mt-1">One-time payment • No hidden fees</p>

                {/* Urgency bullets below pricing */}
                <ul className="mt-3 space-y-2 text-left">
                  {[
                    'Limited seats due to small batches',
                    'Price increases after January',
                    'Bangalore priority admissions',
                  ].map((line, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-start gap-2 text-slate-700"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + idx * 0.08 }}
                    >
                      <span className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 flex-shrink-0">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </span>
                      <span className="text-xs sm:text-sm">{line}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 text-left">
                {features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-start gap-3 text-slate-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                  >
                    <span className="mt-0.5 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 flex-shrink-0">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-sm sm:text-base">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button 
                className="btn-primary w-full text-base sm:text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Rocket className="w-5 h-5" />
                Enroll at ₹16,000 (Limited Seats)
              </motion.button>

              {/* Secondary CTA */}
              <motion.button 
                className="mt-3 w-full px-6 py-3 rounded-2xl bg-white text-purple-700 font-bold hover:bg-purple-50 transition shadow-lg text-sm sm:text-base flex items-center justify-center gap-2 border-2 border-purple-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5" />
                Book Free Parent Counselling Call
              </motion.button>

              {/* Trust indicators */}
              <div className="mt-4 flex items-center justify-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-slate-600 text-xs sm:text-sm ml-2">200+ happy parents</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom trust message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 sm:mt-10"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium">
            <Lock className="w-4 h-4" />
            <span>Secure Payment</span>
            <span>•</span>
            <span>7-day money-back guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
