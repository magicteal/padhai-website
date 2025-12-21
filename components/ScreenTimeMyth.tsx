export default function ScreenTimeMyth() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              "But... isn't more screen time bad?"
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Not all screen time is created equal.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-lg">
              <p className="text-gray-800 text-lg">
                <span className="font-bold text-red-600">Passive Screen Time</span> (Gaming, Cartoons, Doom-scrolling). <span className="font-semibold">This dulls the mind.</span>
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-5 rounded-lg">
              <p className="text-gray-800 text-lg">
                <span className="font-bold text-green-600">Active Screen Time</span> (Creating, Coding, Designing, Learning). <span className="font-semibold">This sharpens the mind.</span>
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-2xl border-2 border-purple-200">
            <p className="text-lg text-gray-800 text-center font-medium">
              "At PadhAi Club, we don't just add screen time. <span className="text-purple-700 font-bold">We replace the bad habits with productive skills.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
