"use client";
import { Star, Heart, Sparkles, Bot, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowTheyDidIt() {
  return (
    <section className="py-16 px-4 bg-purple-50 relative overflow-hidden">
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
        className="absolute bottom-1/4 right-3 md:hidden"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      >
        <Rocket className="w-4 h-4 text-purple-500 opacity-40" />
      </motion.div>
      
      {/* Desktop decorations */}
      <motion.div
        className="absolute top-12 left-8 hidden lg:block"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 12, ease: "linear" }, scale: { repeat: Infinity, duration: 3 } }}
      >
        <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 opacity-60" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-16 hidden lg:block"
        animate={{ y: [0, -12, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <Heart className="w-7 h-7 text-pink-400 fill-pink-400 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-8 hidden xl:block"
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5.5 }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg shadow-md flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            The "Co-Pilot" Method
          </h2>
          <p className="text-xl text-gray-600">
            We don't use AI to cheat. We use it to create.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-200">
            <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-4 text-purple-600">Ideation</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>The child has an idea (e.g., "I want to save forests").</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>They use AI to brainstorm solutions (Drones? Robots? Sensors?).</span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-200">
            <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-4 text-purple-600">Learning</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>They ask AI: "How do I build a fire sensor?"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>AI explains the science and components needed.</span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-200">
            <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-4 text-purple-600">Execution</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>The child builds the physical project or writes the code.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>AI helps debug errors or refine the language.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quote */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-3xl p-8 text-center shadow-xl">
          <p className="text-xl md:text-2xl font-semibold italic">
            "Kids start simple. With the right guidance, they build amazing things."
          </p>
        </div>
      </div>
    </section>
  );
}
