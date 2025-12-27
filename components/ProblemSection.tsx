"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Car, Smartphone, AlertCircle, TrendingUp, Building, Bot, Sparkles, Star, Heart, Brain, Lightbulb, Rocket, Palette } from 'lucide-react';
import ChatBubble from './ChatBubble';
import testimonialVideos from '../data/testimonialVideos';


export const REALITY_CHAT_MESSAGES = [
  {
    
    text: "Parents working long hours",
    icon: Clock,
    time: "7:30 PM",
  
  },
  {

    text: "Heavy traffic, late evenings",
    icon: Car,
    time: "7:31 PM",
   
  },
  {
    
    text: "Kids using phones / tablets",
    icon: Smartphone,
    time: "7:33 PM",
    
  },
  {

    text: "Fear of bad screen time",
    icon: AlertCircle,
    time: "7:35 PM",
    
   
  },
  {
 
    text: "Worry about future competition",
    icon: TrendingUp,
    time: "7:36 PM",
   
  },


  {
   
    text: "We’ve built a safe learning system to fix this ❤️",
    time: "7:37 PM",
    status: "read",
   
  }
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-cover bg-center bg-[url('/images/problemSection.png')]"
    >
      {/* Mobile decorations */}
      <motion.div
        className="absolute top-6 right-4 md:hidden"
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" }, scale: { repeat: Infinity, duration: 2.5 } }}
      >
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-70" />
      </motion.div>
      <motion.div
        className="absolute bottom-16 left-3 md:hidden"
        animate={{ y: [0, -6, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Heart className="w-3 h-3 text-pink-400 fill-pink-400 opacity-60" />
      </motion.div>
      <motion.div
        className="absolute top-1/4 left-2 md:hidden"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <Bot className="w-4 h-4 text-purple-400 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-3 md:hidden"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      >
        <Sparkles className="w-3 h-3 text-purple-300 opacity-50" />
      </motion.div>
      
      {/* Desktop Floating AI Tool Icons */}
      <motion.div
        className="absolute top-24 left-[5%] hidden xl:block"
        animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <div className="w-13 h-13 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl shadow-lg flex items-center justify-center p-2.5">
          <Bot className="w-6 h-6 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-32 right-[6%] hidden lg:block"
        animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl shadow-lg flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-[4%] hidden xl:block"
        animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 6, delay: 1 }}
      >
        <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-[8%] hidden lg:block"
        animate={{ rotate: [0, 10, -10, 0], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4.5 }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg shadow-md flex items-center justify-center">
          <Brain className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-[3%] hidden xl:block"
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, delay: 0.7 }}
      >
        <div className="w-11 h-11 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl shadow-lg flex items-center justify-center">
          <Rocket className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-2/3 left-[6%] hidden xl:block"
        animate={{ y: [0, 12, 0], rotate: [0, -5, 5, 0] }}
        transition={{ repeat: Infinity, duration: 5, delay: 0.3 }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg shadow-md flex items-center justify-center">
          <Palette className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      
      {/* Desktop Kid-friendly floating shapes */}
      <motion.div
        className="absolute top-20 right-[15%] hidden lg:block"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" }, scale: { repeat: Infinity, duration: 2 } }}
      >
        <Star className="w-7 h-7 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute bottom-28 left-[12%] hidden xl:block"
        animate={{ y: [0, -10, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Heart className="w-6 h-6 text-red-400 fill-red-400 drop-shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-[10%] hidden lg:block"
        animate={{ rotate: -360, y: [0, 8, 0] }}
        transition={{ rotate: { repeat: Infinity, duration: 12, ease: "linear" }, y: { repeat: Infinity, duration: 3 } }}
      >
        <Star className="w-5 h-5 text-pink-400 fill-pink-400 drop-shadow-lg" />
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
        >
          <motion.div
            className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-100 flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Building className="w-8 h-8 text-purple-600" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3 text-slate-900">
            Bangalore Parents, <span className="gradient-text">We Get It!</span>
          </h2>
        </motion.div>

        {/* Problem & Illustration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
         
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-5 sm:p-6 md:-translate-y-4 md:col-span-2 bg-transparent w-full"
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-slate-900">The Struggle</h3>
            </div>
            <ul className="space-y-4">
              {REALITY_CHAT_MESSAGES.map((item, idx) => {
               
                 const alignRight = idx % 2 === 0;
                return (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: alignRight ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="w-full"
                  >
                    <ChatBubble
                      text={item.text}
                      align={alignRight ? 'right' : 'left'}
                      time={item.time}
                      status={item.status as 'sent' | 'delivered' | 'read' | undefined}
                 
                    />
                  </motion.li>
                );
              })}
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
            <h3
              className="text-center text-xl sm:text-3xl font-extrabold"
              style={{ WebkitTextStroke: '0.6px white', WebkitTextFillColor: '#4c1d95', color: '#4c1d95' }}
            >
              See what students are saying
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 justify-items-center">
            {testimonialVideos.slice(3, 6).map((src, i) => (
              <motion.div
                key={i}
                className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[240px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  className="rounded-2xl sm:rounded-[1.5rem] overflow-hidden shadow-xl border-3 border-white bg-slate-50"
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="relative w-full bg-slate-100" style={{ aspectRatio: '9 / 16' }}>
                    <video
                      src={src}
                      poster={`/images/testimonials/testimonial-${['three', 'two', 'one'][i]}.svg`}
                      controls
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                      aria-label={`Testimonial video ${i + 1}`}
                    />
                  </div>
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
            className="inline-block px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white shadow-lg border-2 border-purple-100"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-slate-900 font-extrabold text-sm sm:text-lg">
              First structured, safe AI program for Bangalore kids!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
