"use client";
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles, Star, Phone, ArrowRight, Home, Rocket, Heart } from "lucide-react";
import Link from "next/link";

// Pre-defined confetti configuration to avoid hydration mismatch
const CONFETTI_COLORS = ['#7c3aed', '#a78bfa', '#f472b6', '#fbbf24', '#34d399'];

export default function ThankYouPage() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiItems, setConfettiItems] = useState<Array<{
    left: number;
    color: string;
    duration: number;
    delay: number;
    xMovement: number[];
  }>>([]);

  useEffect(() => {
    // Generate confetti data only on client side to avoid hydration mismatch
    const items = [...Array(20)].map(() => ({
      left: Math.random() * 100,
      color: CONFETTI_COLORS[Math.floor(Math.random() * 5)],
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 0.5,
      xMovement: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
    }));
    setConfettiItems(items);
    setShowConfetti(true);

    // Hide confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        <motion.div 
          className="absolute top-1/3 right-1/4 w-20 h-20 bg-green-400/15 rounded-full blur-xl"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
        />
      </div>

      {/* Confetti Animation */}
      {showConfetti && confettiItems.length > 0 && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {confettiItems.map((item, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                left: `${item.left}%`,
                backgroundColor: item.color,
              }}
              initial={{ top: -20, opacity: 1, rotate: 0 }}
              animate={{ 
                top: '100%', 
                opacity: 0,
                rotate: 360,
                x: item.xMovement,
              }}
              transition={{ 
                duration: item.duration, 
                delay: item.delay,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-20 max-w-4xl mx-auto px-4 py-16 sm:py-24">
        {/* Success Icon */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-2xl shadow-green-500/30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <CheckCircle className="w-14 h-14 sm:w-20 sm:h-20 text-white" strokeWidth={2.5} />
            </motion.div>
            <motion.div
              className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Sparkles className="w-5 h-5 text-yellow-800" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 mb-4">
            Thank You! 🎉
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-xl sm:text-2xl text-slate-700 font-semibold mb-2">
              Your request has been received!
            </p>
            <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
              Our team will reach out to you shortly to help your child start their AI learning journey.
            </p>
          </motion.div>
        </motion.div>

        {/* What's Next Card */}
        <motion.div 
          className="mt-10 sm:mt-12 bg-white rounded-2xl shadow-xl border border-purple-100 p-6 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-lg sm:text-xl font-bold text-purple-700 mb-6 flex items-center gap-2">
            <Rocket className="w-5 h-5" />
            What Happens Next?
          </h2>
          
          <div className="space-y-4">
            {[
              { step: 1, title: "We'll Call You", desc: "Our education counselor will reach out within 24 hours", icon: Phone },
              { step: 2, title: "Understand Your Child", desc: "We'll learn about your child's interests and goals", icon: Heart },
              { step: 3, title: "Personalized Plan", desc: "Get a customized learning roadmap for your child", icon: Star },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-fuchsia-50 hover:from-purple-100 hover:to-fuchsia-100 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + idx * 0.15 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-white font-bold shadow-md">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-purple-500" />
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Link href="/">
            <motion.button
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white font-bold shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2 hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Home className="w-5 h-5" />
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          
          <Link href="/projects">
            <motion.button
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-purple-700 font-bold border-2 border-purple-200 hover:border-purple-400 shadow-md flex items-center justify-center gap-2 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="w-5 h-5" />
              Explore Student Projects
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust Badge */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">Trusted by 1000+ parents across Bangalore</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
