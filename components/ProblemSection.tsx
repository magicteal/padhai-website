"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Car, Smartphone, AlertCircle, TrendingUp, Building } from 'lucide-react';
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
      className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-cover bg-center bg-[url('/images/problemsection.png')]"
    >
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
              className="text-center text-2xl sm:text-3xl font-extrabold"
              style={{ WebkitTextStroke: '0.6px white', WebkitTextFillColor: '#4c1d95', color: '#4c1d95' }}
            >
              See what students saying
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 justify-items-center">
            {testimonialVideos.slice(3, 6).map((src, i) => (
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
                    poster={`/images/testimonials/testimonial-${['three', 'two', 'one'][i]}.svg`}
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
