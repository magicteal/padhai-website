"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Star, Gift } from 'lucide-react';

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
            className="text-4xl sm:text-5xl mb-3"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🎁
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text mb-2">
            New Year Special Offer
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">Limited time pricing for January 2025 batch</p>
        </motion.div>

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
            
            {/* Pricing Card */}
            <motion.div 
              className="relative z-10 bg-white/80 backdrop-blur-md rounded-3xl border-2 border-purple-200 shadow-2xl p-6 sm:p-8 text-center overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Corner decorations */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-fuchsia-400 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-indigo-400 to-purple-400 rounded-full opacity-20 blur-xl" />
              
              {/* Badge */}
              <motion.div 
                className="absolute -top-3 left-1/2 transform -translate-x-1/2"
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

              {/* Price */}
              <div className="mt-4 mb-6">
                <motion.div 
                  className="flex items-center justify-center gap-2 mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-slate-400 line-through text-lg sm:text-xl">₹22,600</span>
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
                className="btn-primary w-full text-base sm:text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-2">🚀</span>
                Enroll Now
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
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
            <span>🔒</span>
            <span>Secure Payment</span>
            <span>•</span>
            <span>7-day money-back guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
