"use client";
import { FaWhatsapp } from "react-icons/fa";

function toWaMeNumber(input: string) {
  return input.replace(/[^\d]/g, "");
}

function buildWhatsAppUrl(numberRaw: string, message?: string) {
  const number = toWaMeNumber(numberRaw);
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export default function FloatingWhatsAppCTA() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917849878567";

  const genericMessage = "Hi! I want to book a Free AI Counselling Call.";
  const genericUrl = buildWhatsAppUrl(number, genericMessage);

  if (!toWaMeNumber(number)) return null;

  const text = "Connect on whatsApp with our mentor • ";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Circular rotating text around icon */}
      <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
        {/* Rotating text circle */}
        <svg 
          className="absolute w-full h-full animate-spin-slow pointer-events-none"
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
          </defs>
          <text className="text-[8px] sm:text-[9px] font-bold fill-purple-700 uppercase tracking-wider">
            <textPath href="#circlePath" startOffset="0%">
              {text}{text}
            </textPath>
          </text>
        </svg>

        {/* WhatsApp Icon */}
        <a
          href={genericUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative z-10 h-10 w-10 sm:h-14 sm:w-14 rounded-full bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600 shadow-lg shadow-purple-500/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
        >
          <FaWhatsapp className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
        </a>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
