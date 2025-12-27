"use client";
import { CheckCircle, Star, Heart, Sparkles, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhoIsThisFor() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
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
        <Sparkles className="w-4 h-4 text-purple-400 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-3 md:hidden"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      >
        <Bot className="w-4 h-4 text-purple-500 opacity-40" />
      </motion.div>
      
      {/* Desktop decorations */}
      <motion.div
        className="absolute top-10 left-10 hidden lg:block"
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
        className="absolute top-1/2 right-8 hidden xl:block"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Sparkles className="w-6 h-6 text-purple-500" />
      </motion.div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Is This Right for Your Child?
        </h2>

        <div className="bg-white rounded-2xl p-10 shadow-lg border-2 border-purple-100">
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
              <p className="text-lg text-gray-800">
                If your child loves asking <span className="font-semibold">"Why?"</span> and <span className="font-semibold">"How?"</span>
              </p>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
              <p className="text-lg text-gray-800">
                If your child is creative but struggles to put ideas on paper.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
              <p className="text-lg text-gray-800">
                If you are worried about their addiction to games/videos.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
              <p className="text-lg text-gray-800">
                If you want them to be <span className="font-semibold">leaders</span>, not just followers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
