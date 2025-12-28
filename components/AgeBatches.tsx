"use client";
import { Baby, Target, GraduationCap, Star, Heart, Sparkles, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AgeBatches() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Mobile decorations */}
      <motion.div
        className="absolute top-8 right-4 md:hidden"
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
        className="absolute top-1/3 left-2 md:hidden"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <Sparkles className="w-4 h-4 text-purple-400 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-3 md:hidden"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      >
        <Bot className="w-4 h-4 text-purple-500 opacity-40" />
      </motion.div>
      
      {/* Desktop decorations */}
      <motion.div
        className="absolute top-12 left-10 hidden lg:block"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 12, ease: "linear" }, scale: { repeat: Infinity, duration: 3 } }}
      >
        <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 opacity-60" />
      </motion.div>
      <motion.div
        className="absolute bottom-16 right-12 hidden lg:block"
        animate={{ y: [0, -12, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <Heart className="w-7 h-7 text-pink-400 fill-pink-400 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-6 hidden xl:block"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Sparkles className="w-6 h-6 text-purple-500" />
      </motion.div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Learning Designed for Their Age
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Every batch is tailored to your child&apos;s learning style
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Junior Batch */}
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-8 border-2 border-yellow-200">
            <div className="w-14 h-14 rounded-xl bg-yellow-200 flex items-center justify-center mb-4">
              <Baby className="w-7 h-7 text-yellow-700" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-yellow-700">
              Batch One
            </h3>
            <div className="text-sm font-semibold text-yellow-600 mb-4">Ages 5–8</div>
            <p className="text-gray-700 leading-relaxed">
              Focus on curiosity, storytelling, and fun visuals.
            </p>
          </div>

          {/* Middle Batch */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 border-2 border-blue-200">
            <div className="w-14 h-14 rounded-xl bg-blue-200 flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-blue-700" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-blue-700">
              Batch Two
            </h3>
            <div className="text-sm font-semibold text-blue-600 mb-4">Ages 9–12</div>
            <p className="text-gray-700 leading-relaxed">
              Focus on logic, school projects, and presentation skills.
            </p>
          </div>

          {/* Senior Batch */}
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8 border-2 border-purple-200">
            <div className="w-14 h-14 rounded-xl bg-purple-200 flex items-center justify-center mb-4">
              <GraduationCap className="w-7 h-7 text-purple-700" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-purple-700">
              Batch Three
            </h3>
            <div className="text-sm font-semibold text-purple-600 mb-4">Ages 13–15</div>
            <p className="text-gray-700 leading-relaxed">
              Focus on career tools, advanced prompting, and research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
