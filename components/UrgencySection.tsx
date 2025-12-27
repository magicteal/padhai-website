"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, Sparkles, ArrowRight, Star, Heart, Bot } from "lucide-react";

export default function UrgencySection() {
  const items = [
    {
      icon: Clock,
      title: "Limited Seats Available",
      body: "Batches are small to keep classes interactive.",
    },
    {
      icon: Users,
      title: "New Batch Starting Soon",
      body: "Book a free counselling slot before we fill up.",
    },
    {
      icon: Sparkles,
      title: "January Offer",
      body: "Scholarship + certification benefits for the current intake.",
    },
  ];

  return (
    <section className="py-10 sm:py-12 bg-gradient-to-b from-purple-50 via-white to-purple-50 relative overflow-hidden">
      {/* Mobile decorations */}
      <motion.div
        className="absolute top-6 right-4 md:hidden"
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" }, scale: { repeat: Infinity, duration: 2.5 } }}
      >
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-70" />
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-3 md:hidden"
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-kid p-5 sm:p-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                <span className="gradient-text">Urgency</span>: secure your child’s spot
              </h2>
              <p className="mt-1 text-sm sm:text-base text-slate-600">
                Our main goal is to get you on a quick call and recommend the right batch.
              </p>
            </div>

            <motion.button
              className="btn-primary w-full lg:w-auto flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Book Free Counselling</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.map((it, idx) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="rounded-2xl bg-white/70 border-2 border-purple-100 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center shadow-lg">
                    <it.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-extrabold text-slate-900">{it.title}</div>
                    <div className="text-sm text-slate-600 mt-1">{it.body}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 text-xs sm:text-sm text-slate-500">
            Tip: If you’re unsure about the right age group, book a free call first.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
