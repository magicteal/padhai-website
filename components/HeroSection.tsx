"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles, Star, Rocket, Shield, Palette, Phone, Gift, ArrowRight } from "lucide-react";
import HomeJanuaryOfferBox from "@/components/HomeJanuaryOfferBox";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import DemoBookingPopup from "@/components/DemoBookingPopup";

type HeroSectionProps = {
  illustration?: React.ReactNode;
  bgImage?: string;
};

export default function HeroSection({
  illustration,
  bgImage = "/images/heroImage.svg",
}: HeroSectionProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [showDemoPopup, setShowDemoPopup] = useState(false);

  const features = [
    { icon: Sparkles, text: "Learn AI Tools, Prompting & Creative Problem Solving", color: "text-yellow-300", mobileText: "AI Tools & Creative Problem Solving", showOnMobile: true },
    { icon: Star, text: "Real-World Skills: Chatbots, Storytelling, Projects", color: "text-pink-300", mobileText: "Chatbots, Storytelling & Projects", showOnMobile: true },
    { icon: Rocket, text: "Management Learning: Focus, Discipline, Time Skills", color: "text-cyan-300", mobileText: "Focus, Discipline & Time Skills", showOnMobile: false },
    { icon: CheckCircle, text: "Homework Help, Confidence & Classroom Advantage", color: "text-green-300", mobileText: "Homework Help & Confidence", showOnMobile: true },
    { icon: Gift, text: "Final Showcase + Certificate + Scholarship", color: "text-purple-300", mobileText: "Certificate + Scholarship", showOnMobile: false },
  ];

  const cards = [
    {
      title: "Creativity Superpowers",
      description: "Unleash imagination with AI-powered creative tools",
      icon: Palette,
      gradient: "from-purple-500 to-violet-500",
    },
    {
      title: "Safe AI Use",
      description: "Learn to use AI responsibly and securely",
      icon: Shield,
      gradient: "from-purple-600 to-purple-400",
    },
    {
      title: "Future-Ready Skills",
      description: "Build skills for tomorrow's world today",
      icon: Rocket,
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden min-h-[90vh] sm:min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Mobile Portrait Background */}
      <style jsx>{`
        @media (max-width: 640px) {
          section {
            background-image: url('/images/heroImagePotrait.svg') !important;
          }
        }
      `}</style>

      {/* Gradient overlay for mobile only - better readability */}
      <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-purple-900/70 z-0"></div>

      {/* Mobile-only top badge */}
      <div className="sm:hidden absolute top-10 left-0 right-0 flex justify-center z-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 shadow-lg"
        >
          <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
          <span className="text-white text-xs font-semibold">#1 AI Course for Kids</span>
        </motion.div>
      </div>

      {/* Animated background elements - Hidden on mobile for cleaner look */}
      <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-40 h-40 bg-fuchsia-400/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 7, delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl"
          animate={{ x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, delay: 2 }}
        />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-5 pt-[110%] sm:py-12 md:py-20 lg:py-28">
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
                className="hidden sm:inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 mb-5 sm:mb-6 shadow-lg"
              >
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 fill-yellow-300" />
                <span className="text-white text-[9px] sm:text-sm font-semibold">#1 AI Course for Kids</span>
              </motion.div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                    <motion.span 
                      className="block text-purple-900 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 text-outline-purple font-normal sm:font-extrabold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                      Turn Your Child's Screen Time Into Future Ready Skill 
                </motion.span>
              </h1>

              <motion.p 
                className="hidden sm:block mt-3 sm:mt-4 text-sm sm:text-lg md:text-xl text-white font-bold max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                AI + Real Life Skills + Management Program
              </motion.p>

              <motion.div 
                className="mt-3 sm:mt-3 hidden sm:flex items-center justify-center lg:justify-start gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-white/80 text-xs sm:text-base">Live Online Course</span>
                <span className="px-1.5 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full text-white text-[8px] sm:text-sm font-semibold shadow-lg">
                  Ages 5–14
                </span>
              </motion.div>

              {/* Features List - Condensed on mobile */}
              <motion.ul 
                className="hidden sm:block mt-5 sm:mt-6 space-y-2.5 sm:space-y-3 max-w-xl mx-auto lg:mx-0 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    className={`flex items-center gap-2.5 sm:gap-3 justify-center lg:justify-start ${!feature.showOnMobile ? 'hidden sm:flex' : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                  >
                    <div className={`p-1.5 sm:p-2 rounded-lg bg-white/15 backdrop-blur-sm ${feature.color} shadow-sm`}>
                      <feature.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 hidden sm:inline" />
                    </div>
                    <span className="text-white text-[11px] sm:text-base font-medium">
                      <span className="hidden sm:inline">{feature.text}</span>
                      <span className="hidden">{feature.mobileText}</span>
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA Buttons */}
              <motion.div 
                className="mt-6 sm:mt-10 flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <motion.button
                  onClick={() => setShowPopup(true)}
                  className="flex-1 sm:flex-none sm:w-auto px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-purple-900 text-white font-bold shadow-xl shadow-green-500/30 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-base"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Free Guidance Call </span>
                  <span className="sm:hidden">Book Free Call</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 hidden sm:block" />
                </motion.button>
                <motion.button
                  onClick={() => setShowDemoPopup(true)}
                  className="flex-1 sm:flex-none sm:w-auto px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white/95 text-purple-700 font-bold hover:bg-white transition shadow-lg text-xs sm:text-base flex items-center justify-center gap-1 sm:gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
                  <span>Book a Demo Seat</span>
                </motion.button>
              </motion.div>

              {/* January Offer Box - Below buttons on mobile */}
              <div className="mt-5 sm:hidden scale-90">
                <HomeJanuaryOfferBox 
                  variant="bare" 
                  text="New Year Offer: ₹23,600 → ₹16,000, Only 60 Bangalore seats for January batch" 
                />
              </div>
            </motion.div>

            {/* Right side grid column - hidden on mobile, empty spacer on desktop */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* January Offer Box - Desktop position */}
        <div className="hidden sm:block mb-4 sm:mt-2 sm:mb-6">
          <HomeJanuaryOfferBox 
            variant="bare" 
            text="New Year Offer: ₹23,600 → ₹16,000 | Only 60 Bangalore seats for January batch" 
          />
        </div>

        {/* Bottom Feature Cards - Hidden on Mobile */}
        <div className="hidden sm:block relative pb-8 sm:pb-12">
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
                  whileHover={{ y: -6 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + idx * 0.1 }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <motion.div 
                      className={`flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 5 }}
                    >
                      <card.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
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

      {showPopup && <LeadCapturePopup onClose={() => setShowPopup(false)} />}
      {showDemoPopup && <DemoBookingPopup onClose={() => setShowDemoPopup(false)} />}

    </section>
  );
}
