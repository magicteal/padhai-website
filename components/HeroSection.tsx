import React from "react";

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
      
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* LEFT */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                Main heading goes here
              </h1>
              <p className="mt-4 text-gray-600 max-w-xl mx-auto md:mx-0">
                Supporting subheading goes here
              </p>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3">
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
                  >
                    Primary action
                  </button>
                  <button
                    type="button"
                    className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition"
                  >
                    Secondary action
                  </button>
                </div>

                {/* Trust line */}
                <div className="mt-3 sm:mt-0 text-sm text-gray-500 flex items-center justify-center md:justify-start gap-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">✓</span>
                    <span>Trust text</span>
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">★</span>
                    <span>Another trust</span>
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT - illustration area */}
            <div className="relative">
              <div className="relative mx-auto w-full max-w-md h-64 md:h-80 lg:h-96 bg-white/0 rounded-lg flex items-center justify-center">
                {/* Developer can inject an image or illustration via the `illustration` prop or directly edit this component */}
                {illustration ?? <div className="w-full h-full" />}
              </div>

              {/* Floating badges */}
              <div className="pointer-events-none">
                <div className="absolute -top-4 -right-6 flex flex-col gap-3">
                  <div className="flex items-center flex-col bg-white rounded-full p-2 shadow-md">
                    <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">I</div>
                    <div className="text-xs text-gray-600 mt-1">Badge</div>
                  </div>
                  <div className="flex items-center flex-col bg-white rounded-full p-2 shadow-md">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">A</div>
                    <div className="text-xs text-gray-600 mt-1">Feature</div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="flex items-center flex-col bg-white rounded-full p-2 shadow-md">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">+</div>
                    <div className="text-xs text-gray-600 mt-1">Small</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom feature cards overlapping hero */}
        <div className="-mt-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-transparent px-2 py-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-white/90 shadow-md p-5 hover:shadow-lg transform hover:-translate-y-1 transition"
                  >
                    <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">Icon</div>
                    <h3 className="mt-4 font-semibold text-gray-900">Card title</h3>
                    <p className="mt-2 text-sm text-gray-600">Short description</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
