"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

function toWaMeNumber(input: string) {
  return input.replace(/[^\d]/g, "");
}

function buildWhatsAppUrl(numberRaw: string, message?: string) {
  const number = toWaMeNumber(numberRaw);
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export default function HomeBottomButtonsCTA() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91 98765 43210";

  const bookCallUrl = buildWhatsAppUrl(
    number,
    "Hi! I want to book a Free Parent Counselling Call for the January batch."
  );

  const reserveSeatUrl = buildWhatsAppUrl(
    number,
    "Hi! I want to reserve my January seat for the ₹16,000 January Launch Offer (Bangalore)."
  );

  if (!toWaMeNumber(number)) return null;

  return (
    <section className="py-10 sm:py-12 bg-gradient-to-b from-purple-50 via-transparent to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-5 sm:p-6 bg-transparent"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            <motion.a
              href={bookCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-4 h-4" />
              <span>Book Free Parent Counselling Call</span>
            </motion.a>

            <motion.a
              href={reserveSeatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-3 rounded-xl bg-white border-2 border-purple-500 text-purple-600 font-extrabold text-sm sm:text-base hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Reserve January Seat Now</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          <div className="mt-3 text-center text-xs sm:text-sm text-slate-600">
            No pressure call. Just 10 minutes to understand your child’s potential
          </div>
        </motion.div>
      </div>
    </section>
  );
}
