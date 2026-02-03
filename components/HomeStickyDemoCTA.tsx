"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import DemoBookingPopup from "@/components/DemoBookingPopup";

export default function HomeStickyDemoCTA() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <div className="sm:hidden fixed left-0 right-0 bottom-0 z-[90] p-3 bg-white/95 backdrop-blur border-t border-purple-100">
        <motion.button
          type="button"
          onClick={() => setShow(true)}
          className="w-full rounded-full px-4 py-3 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white font-extrabold flex items-center justify-center gap-2"
          whileTap={{ scale: 0.98 }}
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Book Free Demo Now</span>
        </motion.button>
      </div>

      {show && <DemoBookingPopup onClose={() => setShow(false)} />}
    </>
  );
}
