"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Gift, Shield, Star } from "lucide-react";

export default function PricingPageContent() {
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

  const includedFeatures = [
    { icon: '🎥', text: 'Live AI Classes (No recorded-only learning)' },
    { icon: '📹', text: 'Class Recordings (If your child misses a session)' },
    { icon: '👨‍🏫', text: 'Personal Mentorship & Doubt Solving' },
    { icon: '🛡️', text: 'Child-Safe AI Tools & Prompts' },
    { icon: '📊', text: 'Weekly Parent Updates (PTM-style care)' },
    { icon: '💪', text: 'Management & Discipline Module' },
    { icon: '🎨', text: 'Final AI Project (Child chooses based on interest)' },
    { icon: '🎓', text: 'Certificate of Completion' },
    { icon: '🏆', text: 'Scholarship Opportunity (Top performers)' },
    { icon: '🚀', text: 'Future Hackathon & Workshop Invites' }
  ];

  const typicalVsPadhAi = [
    { typical: 'Are recorded', padhAi: 'Live, interactive sessions' },
    { typical: 'Focus only on content', padhAi: 'Focus on thinking & skills' },
    { typical: "Don't guide children properly", padhAi: 'Personal mentorship & care' },
    { typical: 'Increase screen time without direction', padhAi: 'Convert screen time to skill time' }
  ];

  const bangaloreParents = [
    { icon: '⏰', text: 'Fit after-school hours' },
    { icon: '📚', text: 'Reduce homework stress' },
    { icon: '⚡', text: 'Make learning faster & smarter' },
    { icon: '📱', text: 'Turn "phone time" into productive time' }
  ];

  const trustFeatures = [
    '100% child-safe environment',
    'No social media exposure',
    'No harmful AI tools',
    'Full parent visibility'
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
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            💎
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text">
            Pricing That Focuses on Your Child&apos;s Growth
          </h2>
          <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            Not Just Classes
          </p>
        </motion.div>

        {/* Value Proposition */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-kid max-w-4xl mx-auto p-6 sm:p-8"
        >
          <div className="space-y-4 text-center">
            <p className="text-sm sm:text-base text-slate-700">
              At PadhAi Club, we don&apos;t sell "AI classes". We help children convert screen time into real-life skills, confidence, and clarity — safely and responsibly.
            </p>
            <p className="text-base sm:text-lg text-slate-800 font-bold">
              That&apos;s why our pricing includes mentorship, guidance, safety, projects, and parent involvement, not just videos.
            </p>
          </div>
        </motion.div>

        {/* Program Details */}
        <div className="space-y-8">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-3"
          >
            <span>🎓</span>
            <span className="gradient-text">AI FOUNDATION + MANAGEMENT PROGRAM</span>
          </motion.h3>

          <p className="text-center text-sm sm:text-base text-slate-700 font-medium">
            (For Ages 5–14)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Duration Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-kid p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⏳</span>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900">Duration</h4>
              </div>
              <p className="text-base sm:text-lg font-bold text-slate-900 mb-3">6 Weeks Total</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span className="text-sm sm:text-base text-slate-700">5 Weeks: AI Skills & Creativity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span className="text-sm sm:text-base text-slate-700">1 Week: Management, Discipline & Confidence</span>
                </li>
              </ul>
            </motion.div>

            {/* Mode Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-kid p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🧑‍🏫</span>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900">Mode</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span className="text-sm sm:text-base text-slate-700">Live Online Classes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span className="text-sm sm:text-base text-slate-700">Small Batches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span className="text-sm sm:text-base text-slate-700">Separate age groups for better learning</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Pricing Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-3xl blur-xl opacity-30 animate-pulse-glow" />
            
            {/* Badge */}
            <motion.div 
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-lg">
                <Gift className="w-3.5 h-3.5" />
                <span>32% OFF</span>
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </motion.div>

            {/* Pricing Card */}
            <div className="relative z-10 card-kid p-8 sm:p-10 text-center mt-4">
              <div className="mb-6">
                <p className="text-sm sm:text-base text-slate-600 mb-2">Regular Program Value</p>
                <p className="text-xl sm:text-2xl text-slate-400 line-through mb-4">₹23,600</p>
                
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full mb-3">
                  <span className="text-xl">🎉</span>
                  <span className="text-xs sm:text-sm font-semibold text-green-700">January Launch Offer</span>
                </div>
                
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text mb-2">
                  ₹16,000
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  (Limited seats for the first cohort)
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 italic mb-6">
                Most parents start with a free consultation call to understand if this program fits their child before enrolling.
              </p>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <motion.button 
                  className="btn-primary w-full text-base sm:text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2">📞</span>
                  Book a Free Child Skill Consultation
                </motion.button>
                <motion.button 
                  className="w-full px-6 py-3 rounded-full bg-white border-2 border-purple-500 text-purple-600 font-bold text-base sm:text-lg hover:bg-purple-50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2">🚀</span>
                  Enroll for January Batch (Limited Seats)
                </motion.button>
              </div>

              {/* Trust indicators */}
              <div className="mt-6 flex items-center justify-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-slate-600 text-xs sm:text-sm ml-2">200+ happy parents</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What's Included */}
        <div className="space-y-8">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-3"
          >
            <span>✨</span>
            <span className="text-slate-900">What&apos;s Included</span>
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {includedFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-3 card-kid p-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex-shrink-0">
                  <Check className="h-4 w-4 text-white" strokeWidth={3} />
                </span>
                <div>
                  <span className="text-lg mr-2">{feature.icon}</span>
                  <span className="text-sm sm:text-base text-slate-700">{feature.text}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-sm sm:text-base text-slate-800 font-bold max-w-2xl mx-auto">
            There are no hidden charges. Everything your child needs is included.
          </p>
        </div>

        {/* Why This Is Worth More */}
        <div className="space-y-8">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center gradient-text"
          >
            Why This Is Worth More Than a Typical Online Course
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {/* Most Courses */}
            <motion.div 
              variants={itemVariants}
              className="card-kid p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">😔</span>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900">Most Online Courses</h4>
              </div>
              <ul className="space-y-3">
                {typicalVsPadhAi.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs flex-shrink-0">
                      ✗
                    </span>
                    <span className="text-sm sm:text-base text-slate-700">{item.typical}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* PadhAi Club */}
            <motion.div 
              variants={itemVariants}
              className="card-kid p-6 border-2 border-purple-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🌟</span>
                <h4 className="text-lg sm:text-xl font-bold gradient-text">PadhAi Club</h4>
              </div>
              <ul className="space-y-3">
                {typicalVsPadhAi.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base text-slate-700 font-medium">{item.padhAi}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-kid max-w-3xl mx-auto p-6 bg-purple-50 border-2 border-purple-200"
          >
            <p className="text-sm sm:text-base font-bold text-slate-900 mb-3 text-center">We focus on:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'How your child thinks',
                'How they ask questions',
                'How they use technology responsibly',
                'How they manage time, learning, and curiosity'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white rounded-xl p-3">
                  <span className="text-purple-600 font-bold">→</span>
                  <span className="text-sm sm:text-base text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm sm:text-base text-slate-800 font-bold text-center">
              That&apos;s why parents see real changes, not just certificates.
            </p>
          </motion.div>
        </div>

        {/* For Bangalore Parents */}
        <div className="space-y-8">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-3"
          >
            <span>🏙️</span>
            <span className="text-slate-900">For Working Bangalore Parents</span>
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-kid max-w-3xl mx-auto p-6"
          >
            <p className="text-sm sm:text-base text-slate-700 mb-4 text-center">
              We understand Bangalore life:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {['Long work hours', 'Traffic', 'Busy schedules'].map((item, idx) => (
                <div key={idx} className="text-center bg-slate-100 rounded-xl p-3">
                  <span className="text-sm sm:text-base text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm sm:text-base font-bold text-slate-900 mb-4 text-center">
              So we designed this program to:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bangaloreParents.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-green-50 rounded-xl p-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm sm:text-base text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Limited Seats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 sm:p-10 text-white text-center space-y-4 shadow-2xl max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute -top-10 right-6 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 left-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
          
          <motion.div
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs sm:text-sm font-bold relative z-10"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span>⚠️</span>
            <span>Limited Seats</span>
          </motion.div>
          
          <h3 className="relative z-10 text-2xl sm:text-3xl font-bold">
            Quality Over Quantity
          </h3>
          <p className="relative z-10 text-base sm:text-lg max-w-2xl mx-auto">
            To maintain quality and safety:
          </p>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              'Seats are strictly limited',
              'We don\'t over-enroll batches',
              'Personal attention is guaranteed'
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 rounded-xl p-4">
                <span className="text-sm sm:text-base font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="relative z-10 text-base sm:text-lg font-bold">
            Once seats are filled, enrollments close for the batch.
          </p>
        </motion.div>

        {/* Final CTA */}
        <div className="space-y-8">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center gradient-text"
          >
            Ready to Take the First Step?
          </motion.h3>

          <p className="text-center text-lg sm:text-xl text-slate-700 font-medium max-w-2xl mx-auto">
            Give your child a smarter way to learn in 2026.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto space-y-3"
          >
            <motion.button 
              className="btn-primary w-full text-base sm:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="mr-2">📞</span>
              Book a Free Child Skill Consultation
            </motion.button>
            <motion.button 
              className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-base sm:text-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="mr-2">🚀</span>
              Enroll for January Batch (Limited Seats)
            </motion.button>
          </motion.div>
        </div>

        {/* Trust & Safety */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-kid max-w-3xl mx-auto p-6 sm:p-8 bg-green-50 border-2 border-green-200"
        >
          <div className="flex items-center gap-3 mb-4 justify-center">
            <Shield className="w-8 h-8 text-green-600" />
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">Trust & Safety Note</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {trustFeatures.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white rounded-xl p-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs flex-shrink-0">
                  ✓
                </span>
                <span className="text-sm sm:text-base text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
