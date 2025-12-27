"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Star, Gift, Rocket, Lock, Users, Phone, Bot, Brain, Lightbulb, Heart, Palette, Code, Wand2 } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import RazorpayButton from './RazorpayButton';

export default function CourseDetailsSection() {
  const features = [
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
      
      {/* Mobile decorations */}
      <motion.div
        className="absolute top-8 right-4 md:hidden"
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
        className="absolute top-1/3 left-2 md:hidden"
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
        <Gift className="w-4 h-4 text-purple-500 opacity-40" />
      </motion.div>
      
      {/* Desktop Floating AI Tool Icons */}
      <motion.div
        className="absolute top-28 left-[6%] hidden xl:block"
        animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <div className="w-13 h-13 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl shadow-lg flex items-center justify-center p-2.5">
          <Bot className="w-6 h-6 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-36 right-[8%] hidden lg:block"
        animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl shadow-lg flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-[5%] hidden xl:block"
        animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 6, delay: 1 }}
      >
        <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-[10%] hidden lg:block"
        animate={{ rotate: [0, 10, -10, 0], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4.5 }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg shadow-md flex items-center justify-center">
          <Brain className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-[4%] hidden xl:block"
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, delay: 0.7 }}
      >
        <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg flex items-center justify-center">
          <Code className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-2/3 left-[8%] hidden xl:block"
        animate={{ y: [0, 12, 0], rotate: [0, -5, 5, 0] }}
        transition={{ repeat: Infinity, duration: 5, delay: 0.3 }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg shadow-md flex items-center justify-center">
          <Wand2 className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      
      {/* Desktop Kid-friendly floating shapes */}
      <motion.div
        className="absolute top-20 right-[18%] hidden lg:block"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" }, scale: { repeat: Infinity, duration: 2 } }}
      >
        <Star className="w-7 h-7 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-[15%] hidden xl:block"
        animate={{ y: [0, -10, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Heart className="w-6 h-6 text-red-400 fill-red-400 drop-shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-[3%] hidden lg:block"
        animate={{ rotate: -360, y: [0, 8, 0] }}
        transition={{ rotate: { repeat: Infinity, duration: 12, ease: "linear" }, y: { repeat: Infinity, duration: 3 } }}
      >
        <Star className="w-5 h-5 text-pink-400 fill-pink-400 drop-shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/2 right-[6%] hidden xl:block"
        animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl shadow-lg flex items-center justify-center">
          <Rocket className="w-6 h-6 text-white" />
        </div>
      </motion.div>

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
            {useAppStore.getState().testimonials.filter(t => t.featured).slice(0, 2).map((t) => (
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
              className="relative z-10 bg-white/90 backdrop-blur-md rounded-3xl border-2 border-purple-200 shadow-2xl p-8 sm:p-10 text-center "
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Premium Ribbons - inside card so they scale together */}
              <div className="ribbon ribbon-top-right z-50">
                <span>New Year Deal</span>
              </div>
              <div className="ribbon ribbon-bottom-left">
                <span>Limited Seats</span>
              </div>

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
                <p className="text-slate-500 text-sm mt-1">One time payment • No hidden fees</p>

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
               
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                          <RazorpayButton
                            courseId="ai-foundation"
                            courseName="AI Foundation + Management Program"
                            amount={16000}
                            className="group w-full sm:w-auto bg-purple-500 hover:bg-purple-400 text-white font-extrabold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-xl transition-all text-xs sm:text-lg flex items-center justify-center gap-2 border-2 border-white/20"
                          >
                            <Rocket className="w-5 h-5" />
                            Enroll Now (Limited Seats)
                          </RazorpayButton>
                     
                
                
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                className="mt-3 w-full px-6 py-3 rounded-2xl bg-white text-purple-700 font-bold hover:bg-purple-50 transition shadow-lg text-xs sm:text-base flex items-center justify-center gap-2 border-2 border-purple-200"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
