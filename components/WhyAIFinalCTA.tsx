const WHATSAPP_NUMBER = "917849878567";
const WHATSAPP_MESSAGE = "Hi! I want to book a Free Counselling Call for the AI Course.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function WhyAIFinalCTA() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          The Best Time to Start Was Yesterday. <br />The Next Best Time is Now.
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          Join the first batch of future leaders.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-bold text-lg bg-purple-600 text-white hover:bg-purple-700 transition shadow-xl"
          >
            Book Free Counselling Call
          </a>
          <button className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition">
            View Course Details
          </button>
        </div>
      </div>
    </section>
  );
}
