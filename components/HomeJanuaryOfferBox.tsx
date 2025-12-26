"use client";
import React from "react";
import { motion } from "framer-motion";

type HomeJanuaryOfferBoxProps = {
  variant?: "section" | "bare";
  text?: string;
};

export default function HomeJanuaryOfferBox({
  variant = "section",
  text = "January Launch Offer: ₹23,600 → ₹16,000 (Limited Bangalore Seats)",
}: HomeJanuaryOfferBoxProps) {
  const box = (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }}
      className="mx-auto max-w-3xl text-center rounded-2xl bg-red-600 text-white px-6 sm:px-8 py-5 sm:py-6 shadow-2xl border-2 border-red-500"
    >
      <div className="font-extrabold text-sm sm:text-base">
        {text}
      </div>
    </motion.div>
  );

  if (variant === "bare") return box;

  return (
    <section className="py-6 sm:py-8 bg-gradient-to-b from-purple-50 via-white to-purple-50 mt-8 sm:mt-12 lg:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{box}</div>
    </section>
  );
}
