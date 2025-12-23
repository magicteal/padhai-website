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
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91 98765 43210";

  const genericMessage = "Hi! I want to book a Free AI Counselling Call.";
  const genericUrl = buildWhatsAppUrl(number, genericMessage);

  if (!toWaMeNumber(number)) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex items-end">
        {/* Icon is the peer that controls the box visibility */}
        <a
          href={genericUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="peer h-14 w-14 rounded-full bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600 shadow-lg shadow-purple-500/30 flex items-center justify-center hover:scale-105 active:scale-95 transition animate-bounce-slow"
        >
          <FaWhatsapp className="h-7 w-7 text-white" />
        </a>

        {/* Box appears only when the icon (peer) is hovered */}
        <div className="pointer-events-none absolute bottom-16 right-0 w-[260px] sm:w-[300px] rounded-2xl bg-white/95 backdrop-blur border border-purple-100 shadow-lg shadow-purple-500/10 p-3 transform opacity-0 scale-95 translate-y-2 transition-all duration-200 ease-out peer-hover:opacity-100 peer-hover:scale-100 peer-hover:translate-y-0 peer-hover:pointer-events-auto">
          <div className="text-sm font-extrabold text-purple-700">Free AI Counselling Call</div>
        </div>
      </div>
    </div>
  );
}
