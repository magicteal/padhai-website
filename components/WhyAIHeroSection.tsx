"use client";
import { motion } from 'framer-motion';
import { Rocket, BookOpen, Code } from 'lucide-react';

export default function WhyAIHeroSection() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[70vh] bg-gradient-to-br from-purple-600 via-fuchsia-600 to-indigo-700 text-white py-12 sm:py-16 md:py-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse-glow" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2">
                <Rocket className="w-4 h-4" /> Why AI Education Matters
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Don't Just Prepare Them for Exams.{' '}
              <span className="text-violet-200">Prepare Them for the Future.</span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-purple-100 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              The world is changing faster than schools can adapt. Give your child the tools to become a creator, a thinker, and a leader in the age of AI.
            </motion.p>
            
            <motion.button 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg bg-white text-purple-600 hover:bg-purple-50 transition shadow-xl flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              See The Syllabus <BookOpen className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border-2 border-white/20 relative"
              whileHover={{ scale: 1.02 }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-violet-400/30 rounded-full blur-xl" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-fuchsia-400/30 rounded-full blur-xl" />
              
              <motion.div 
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl bg-white/20 flex items-center justify-center mx-auto"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <Code className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white" />
              </motion.div>
              <p className="text-center mt-4 text-purple-100 font-medium text-sm sm:text-base">
                A confident creator, not just a consumer
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
