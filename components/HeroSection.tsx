import React from "react";
import { BsCheckSquare } from "react-icons/bs";

type HeroSectionProps = {
  illustration?: React.ReactNode;
  bgImage?: string;
};

export default function HeroSection({
  illustration,
  bgImage = "/images/heroImage.svg",
}: HeroSectionProps) {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden rounded-b-2xl bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Full black film overlay covering the hero */}
      {/* <div className="absolute inset-0 bg-black/50 pointer-events-none" /> */}

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* LEFT */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="block text-white text-2xl md:text-3xl lg:text-4xl">Turn Your Child’s Screen Time Into</span>
                <span className="block text-purple-600">Superpower Time</span>
              </h1>

              <p className="mt-3 text-lg md:text-xl text-indigo-100 font-semibold max-w-xl mx-auto md:mx-0">
                AI Foundation + Management Skills (Ages 5–14)
              </p>

              <p className="mt-3 text-sm md:text-base text-indigo-100 max-w-xl mx-auto md:mx-0">
                The safest, most productive way for Bangalore kids to learn, create, and build their future early. Live Online Classes + Mentorship
              </p>

              <ul className="mt-4 space-y-2 max-w-xl mx-auto md:mx-0 text-white">
                <li className="flex items-start gap-3">
                  <BsCheckSquare className="w-5 h-5 mt-1 text-white/90 flex-shrink-0" aria-hidden />
                  <span>Certification + Scholarship</span>
                </li>
                <li className="flex items-start gap-3">
                  <BsCheckSquare className="w-5 h-5 mt-1 text-white/90 flex-shrink-0" aria-hidden />
                  <span>5 Weeks AI + 1 Week Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <BsCheckSquare className="w-5 h-5 mt-1 text-white/90 flex-shrink-0" aria-hidden />
                  <span>Live Online Classes (No pre-recorder videos)</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3">
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
                  >
                    Book Free Counselling
                  </button>
                  <button
                    type="button"
                    className="px-6 py-3 rounded-full bg-white text-purple-600 font-semibold hover:bg-gray-50 transition"
                  >
                    January offer
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT - illustration area */}
            <div className="relative">
              <div className="relative mx-auto w-full max-w-md h-64 md:h-80 lg:h-96 bg-white/0 rounded-lg flex items-center justify-center">
                {/* Developer can inject an image or illustration via the `illustration` prop or directly edit this component */}
                {illustration ?? <div className="w-full h-full" />}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom feature cards overlapping hero */}
        <div className="-mt-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-transparent px-2 py-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 - Creativity Superpowers */}
                <div className="rounded-xl bg-white/90 shadow-md p-5 hover:shadow-lg transform hover:-translate-y-1 transition">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 h-16 w-16 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3a1 1 0 012 0v1a3 3 0 11-2 0V3z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13a6 6 0 0112 0c0 3-2 4-2 4H11s-2-1-2-4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Creativity Superpowers</h3>
                      <p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Safe AI Use */}
                <div className="rounded-xl bg-white/90 shadow-md p-5 hover:shadow-lg transform hover:-translate-y-1 transition">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 h-16 w-16 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l7 4v6c0 5-3.58 9-7 10-3.42-1-7-5-7-10V6l7-4z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.5 11.5l1.5 1.5 3-3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Safe AI Use</h3>
                      <p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Future-Ready Skills */}
                <div className="rounded-xl bg-white/90 shadow-md p-5 hover:shadow-lg transform hover:-translate-y-1 transition">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 h-16 w-16 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M12 4v13" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21h6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Future-Ready Skills</h3>
                      <p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
