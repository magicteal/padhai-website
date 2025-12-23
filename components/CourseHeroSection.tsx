"use client";
import { motion } from 'framer-motion';
import { Calendar, Monitor, Users, Languages, GraduationCap, Rocket, FileText } from 'lucide-react';

export default function CourseHeroSection() {
  const stats = [
    { icon: Calendar, label: 'Duration', value: '6 Weeks' },
    { icon: Monitor, label: 'Mode', value: 'Live Online' },
    { icon: Users, label: 'Ages', value: '5–15 Years' },
    { icon: Languages, label: 'Languages', value: 'EN, HI, KA' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-fuchsia-600 to-indigo-700 text-white py-12 sm:py-16 md:py-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse-glow" />
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div 
          className="inline-block mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
        >
          <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2">
            <GraduationCap className="w-4 h-4" /> Course Details
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          The AI Foundation + Management Program
        </motion.h1>
        
        <motion.p 
          className="text-base sm:text-xl md:text-2xl mb-8 sm:mb-10 text-purple-100 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          A 6-week journey to turn your child's screen time into a superpower.{' '}
          <span className="text-violet-200 font-semibold">AI skills, life discipline, and future readiness.</span>
        </motion.p>

        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <motion.div 
                className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: idx * 0.2 }}
              >
                <stat.icon className="w-5 h-5 text-white" />
              </motion.div>
              <div className="font-semibold text-sm sm:text-base">{stat.label}</div>
              <div className="text-xs sm:text-sm text-purple-100">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button 
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg bg-white text-purple-600 hover:bg-purple-50 transition shadow-xl flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Rocket className="w-5 h-5" /> Enroll Now (₹16,000)
          </motion.button>
          <motion.button 
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border-2 border-white text-white hover:bg-white/10 transition flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FileText className="w-5 h-5" /> Download Syllabus PDF
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
