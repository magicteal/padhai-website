"use client";
import { Building2, Star, Heart, Sparkles, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BangaloreAdvantage() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-600 to-purple-700 text-white relative overflow-hidden">
      {/* Mobile decorations */}
      <motion.div
        className="absolute top-8 right-4 md:hidden z-10"
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" }, scale: { repeat: Infinity, duration: 2.5 } }}
      >
        <Star className="w-4 h-4 text-yellow-300 fill-yellow-300 opacity-80" />
      </motion.div>
      <motion.div
        className="absolute bottom-12 left-3 md:hidden z-10"
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
        <Rocket className="w-4 h-4 text-white opacity-50" />
      </motion.div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="w-20 h-20 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            You Live in India&apos;s Tech Hub. Does Your Child Have the Advantage?
          </h2>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <p className="text-xl md:text-2xl leading-relaxed text-purple-50">
            Bangalore is the innovation capital of India. The skills of the future are being built right next door. Your child deserves to be ahead of the curve, learning world-class skills early, right here in the city that defines the future.
          </p>
        </div>
      </div>
    </section>
  );
}
