"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsCheckSquare } from "react-icons/bs";
import { Sparkles, Star, Rocket, Shield, Brain } from "lucide-react";

type HeroSectionProps = {
  illustration?: React.ReactNode;
  bgImage?: string;
};

export default function HeroSection({
  illustration,
  bgImage = "/images/heroImage.svg",
}: HeroSectionProps) {
  const features = [
    { icon: Sparkles, text: "Certification + Scholarship", color: "text-yellow-300" },
    { icon: Star, text: "5 Weeks AI + 1 Week Management", color: "text-pink-300" },
    { icon: Rocket, text: "Live Online Classes (No pre-recorded videos)", color: "text-cyan-300" },
  ];

  const cards = [
    {
      title: "Creativity Superpowers",
      description: "Unleash imagination with AI-powered creative tools",
      icon: "🎨",
      gradient: "from-purple-500 to-fuchsia-500",
    },
    {
      title: "Safe AI Use",
      description: "Learn to use AI responsibly and securely",
      icon: "🛡️",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Future-Ready Skills",
      description: "Build skills for tomorrow's world today",
      icon: "🚀",
      gradient: "from-pink-500 to-orange-500",
    },
  ];

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden min-h-[90vh] sm:min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-20 sm:w-32 h-20 sm:h-32 bg-purple-400/20 rounded-full blur-2xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-24 sm:w-40 h-24 sm:h-40 bg-fuchsia-400/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 7, delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-yellow-400/10 rounded-full blur-2xl"
          animate={{ x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, delay: 2 }}
        />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT CONTENT */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6"
              >
                <span className="animate-sparkle">✨</span>
                <span className="text-white text-xs sm:text-sm font-medium">Bangalore's #1 AI Course for Kids</span>
                <span className="animate-sparkle">✨</span>
              </motion.div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                <motion.span 
                  className="block text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Turn Your Child's Screen Time Into
                </motion.span>
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Superpower Time 🦸‍♂️
                </motion.span>
              </h1>

              <motion.p 
                className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-white/90 font-semibold max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                AI Foundation + Management Skills 
                <span className="inline-block ml-2 px-3 py-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full text-white text-sm">
                  Ages 5–14
                </span>
              </motion.p>

              <motion.p 
                className="mt-2 sm:mt-3 text-sm sm:text-base text-white/80 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                The safest, most productive way for Bangalore kids to learn, create, and build their future early. 
                <span className="font-semibold text-yellow-300"> Live Online Classes + Mentorship</span>
              </motion.p>

              {/* Features List */}
              <motion.ul 
                className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-center gap-3 justify-center lg:justify-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                  >
                    <div className={`p-1.5 rounded-lg bg-white/10 ${feature.color}`}>
                      <feature.icon className="w-4 h-4" />
                    </div>
                    <span className="text-white text-sm sm:text-base">{feature.text}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA Buttons */}
              <motion.div 
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <motion.button
                  className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 text-sm sm:text-base"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147,51,234,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Book Free Counselling</span>
                  <span className="text-lg">📞</span>
                </motion.button>
                <motion.button
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 font-bold hover:from-yellow-300 hover:to-orange-300 transition shadow-lg text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  January Offer 🎁
                </motion.button>
              </motion.div>
            </motion.div>

            {/* RIGHT - Illustration Area */}
            <motion.div 
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative mx-auto w-full max-w-md h-64 md:h-80 lg:h-96 flex items-center justify-center">
                {illustration ?? (
                  <div className="w-full h-full flex items-center justify-center">
                    <motion.div 
                      className="text-center"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                    >
                      <span className="text-8xl block mb-4">🧒</span>
                      <span className="text-6xl">💻</span>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="relative pb-8 sm:pb-12">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  className="card-kid p-4 sm:p-5 cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + idx * 0.1 }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <motion.div 
                      className={`flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 10 }}
                    >
                      <span className="text-2xl sm:text-3xl">{card.icon}</span>
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">{card.title}</h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600">{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
