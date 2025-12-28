const WHATSAPP_NUMBER = "917849878567";
const WHATSAPP_MESSAGE = "Hi! I want to book a Free Counselling Call for the AI Course.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function ProjectsCTA() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-600 to-purple-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Your Child Could Be Next.
        </h2>
        <p className="text-xl text-purple-100 mb-10 leading-relaxed">
          Don't let their screen time go to waste. Give them the skills to build a project they will be proud of.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 rounded-full font-bold text-lg bg-white text-purple-600 hover:bg-gray-100 transition shadow-xl">
            Enroll for January Batch
          </button>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-white text-white hover:bg-white/10 transition"
          >
            Book Free Counselling
          </a>
        </div>
      </div>
    </section>
  );
}
