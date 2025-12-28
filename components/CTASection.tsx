"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Rocket, Clock, Users, Star, Shield, Lock, Heart, Sparkles, Gift } from 'lucide-react';
import RazorpayButton from './RazorpayButton';

const WHATSAPP_NUMBER = "917849878567";
const WHATSAPP_MESSAGE = "Hi! I want to book a Free AI Counselling Call.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse-glow" />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMjBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>
      
      {/* Mobile decorations */}
      <motion.div
        className="absolute top-8 right-4 md:hidden z-10"
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" }, scale: { repeat: Infinity, duration: 2.5 } }}
      >
        <Star className="w-4 h-4 text-yellow-300 fill-yellow-300 opacity-80" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-3 md:hidden z-10"
        animate={{ y: [0, -6, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Heart className="w-3 h-3 text-pink-300 fill-pink-300 opacity-70" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-2 md:hidden z-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <Sparkles className="w-4 h-4 text-purple-200 opacity-60" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-3 md:hidden z-10"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      >
        <Gift className="w-4 h-4 text-white opacity-50" />
      </motion.div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Icon */}
        <motion.div 
          className="mb-4 sm:mb-5"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.div 
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
            animate={{ 
              y: [0, -8, 0]
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>
        </motion.div>
        
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 sm:mb-5 text-white"
        >
          Give Your Child a{' '}
          <span className="text-purple-200">Superpower</span>{' '}
          This January!
        </motion.h2>
        
        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 font-bold text-white/95"
        >
          Turn screen time into skill time!
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/80"
        >
          Start with a <span className="font-bold text-purple-200">FREE counselling call!</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center mb-6"
        >
          <motion.a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto bg-white text-purple-700 hover:bg-purple-50 font-extrabold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-xl transition-all text-base sm:text-lg flex items-center justify-center gap-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-5 h-5" />
            Book Free Call
          </motion.a>
          
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <RazorpayButton
              courseId="ai-foundation"
              courseName="AI Foundation + Management Program"
              amount={16000}
              className="group w-full sm:w-auto bg-purple-500 hover:bg-purple-400 text-white font-extrabold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-xl transition-all text-base sm:text-lg flex items-center justify-center gap-2 border-2 border-white/20"
            >
              <Rocket className="w-5 h-5" />
              Enroll Now – Limited Seats!
            </RazorpayButton>
          </motion.div>
        </motion.div>

        {/* Urgency Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring" }}
          className="inline-flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-xl border-2 border-white/30"
        >
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-200" />
          <p className="text-white font-bold text-sm sm:text-base flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
            Only <span className="text-purple-200">40 seats</span> left!
          </p>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-white/70 text-xs sm:text-sm"
        >
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>200+ enrolled</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4" />
            <span>4.9/5 rating</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4" />
            <span>Secure payment</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
