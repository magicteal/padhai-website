"use client";
import { Star, Heart, Sparkles, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ScreenTimeMyth() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Mobile decorations */}
      <motion.div
        className="absolute top-6 right-4 md:hidden"
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" }, scale: { repeat: Infinity, duration: 2.5 } }}
      >
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-70" />
      </motion.div>
      <motion.div
        className="absolute bottom-12 left-3 md:hidden"
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
        <Sparkles className="w-4 h-4 text-purple-400 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-3 md:hidden"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      >
        <Bot className="w-4 h-4 text-blue-500 opacity-40" />
      </motion.div>
      
      {/* Desktop decorations */}
      <motion.div
        className="absolute top-16 left-8 hidden lg:block"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 12, ease: "linear" }, scale: { repeat: Infinity, duration: 3 } }}
      >
        <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 opacity-60" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-12 hidden lg:block"
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
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              "But... isn't more screen time bad?"
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Not all screen time is created equal.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-lg">
              <p className="text-gray-800 text-lg">
                <span className="font-bold text-red-600">Passive Screen Time</span> (Gaming, Cartoons, Doom-scrolling). <span className="font-semibold">This dulls the mind.</span>
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-5 rounded-lg">
              <p className="text-gray-800 text-lg">
                <span className="font-bold text-green-600">Active Screen Time</span> (Creating, Coding, Designing, Learning). <span className="font-semibold">This sharpens the mind.</span>
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-2xl border-2 border-purple-200">
            <p className="text-lg text-gray-800 text-center font-medium">
              "At PadhAi Club, we don't just add screen time. <span className="text-purple-700 font-bold">We replace the bad habits with productive skills.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
