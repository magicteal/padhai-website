"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Rocket, Clock, Users } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-purple-600 via-fuchsia-600 to-indigo-600">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse-glow" />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMjBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>
      
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
            className="text-5xl sm:text-6xl md:text-7xl inline-block"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            🦸
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
          <span className="text-violet-200">Superpower</span>{' '}
          This January! 🌟
        </motion.h2>
        
        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 font-bold text-white/95"
        >
          ✨ Turn screen time into skill time! ✨
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/80"
        >
          🎯 Start with a <span className="font-bold text-violet-200">FREE counselling call!</span> 📞
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center mb-6"
        >
          <motion.button 
            className="group w-full sm:w-auto bg-white text-purple-600 hover:bg-violet-100 font-extrabold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-xl transition-all text-base sm:text-lg flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-5 h-5 group-hover:animate-wiggle" />
            Book Free Call
          </motion.button>
          
          <motion.button 
            className="group w-full sm:w-auto bg-violet-400 hover:bg-violet-300 text-white font-extrabold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-xl transition-all text-base sm:text-lg flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Rocket className="w-5 h-5 group-hover:animate-wiggle" />
            Enroll Now – Limited Seats!
          </motion.button>
        </motion.div>

        {/* Urgency Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring" }}
          className="inline-flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-white/30"
        >
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
          <p className="text-white font-bold text-sm sm:text-base flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
            Only <span className="text-yellow-300">40 seats</span> left!
            <span className="text-lg sm:text-xl">🔥</span>
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
            <span>⭐</span>
            <span>4.9/5 rating</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>🔒</span>
            <span>Secure payment</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
