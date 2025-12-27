"use client";
import { Palette, BookOpen, Zap, Star, Heart, Sparkles, Bot, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AISuperpower() {
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
        className="absolute bottom-20 left-3 md:hidden"
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
        <Bot className="w-4 h-4 text-purple-400 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-3 md:hidden"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      >
        <Sparkles className="w-4 h-4 text-purple-500 opacity-40" />
      </motion.div>
      
      {/* Desktop decorations */}
      <motion.div
        className="absolute top-12 left-8 hidden lg:block"
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl shadow-lg flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-20 right-12 hidden xl:block"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 12, ease: "linear" }, scale: { repeat: Infinity, duration: 3 } }}
      >
        <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 opacity-70" />
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-16 hidden lg:block"
        animate={{ y: [0, -12, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <Heart className="w-7 h-7 text-pink-400 fill-pink-400 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute bottom-16 right-10 hidden xl:block"
        animate={{ y: [0, 8, 0], x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg shadow-md flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          It&apos;s Not Just Tech. It&apos;s Thinking.
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Three reasons why AI is a superpower for your child
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
              <Palette className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-purple-600">
              Hyper-Creativity
            </h3>
            <h4 className="text-lg font-semibold mb-3 text-gray-800">
              Imagination No Longer Has Limits.
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Your child can visualize a story, design a character, or prototype a science model in minutes. AI removes the barrier between &apos;I have an idea&apos; and &apos;I made this&apos;.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
              <BookOpen className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-purple-600">
              Academic Confidence
            </h3>
            <h4 className="text-lg font-semibold mb-3 text-gray-800">
              A Personal Tutor 24/7.
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Stuck on a complex science topic? AI explains it simply. Need ideas for a school project? AI helps brainstorm. We teach them to use AI as a smart assistant, not a shortcut.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
              <Zap className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-purple-600">
              Digital Discipline
            </h3>
            <h4 className="text-lg font-semibold mb-3 text-gray-800">
              From Consumer to Creator.
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Kids are already on screens. Instead of mindlessly scrolling, we teach them to use that time to build, code, and design. We turn 'Bad Screen Time' into 'Skill Time'.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
