export default function RealityCheck() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          The World Has Changed. Has Their Learning?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Old Way */}
          <div className="bg-gray-100 rounded-3xl p-8 border-2 border-gray-300 relative">
            <div className="text-6xl mb-6 text-center">📚</div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">The Old Way</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-xl">✗</span>
                <p className="text-gray-700 text-lg">Rote memorization of facts.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-xl">✗</span>
                <p className="text-gray-700 text-lg">Consuming content (Watching YouTube/Reels).</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-xl">✗</span>
                <p className="text-gray-700 text-lg">Fear of technology replacing jobs.</p>
              </div>
            </div>
          </div>

          {/* Right Column - PadhAi Way */}
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl p-8 border-2 border-purple-300 relative">
            <div className="text-6xl mb-6 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-6 text-purple-800 text-center">The PadhAi Way</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <p className="text-gray-700 text-lg">Using AI to understand concepts instantly.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <p className="text-gray-700 text-lg">Creating content (Making stories, art, apps).</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <p className="text-gray-700 text-lg">Mastering technology to command the future.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <p className="text-lg text-gray-800 font-medium text-center">
            "In 2035, your child won't be competing with AI. They will be competing with someone who knows how to use AI. <span className="text-yellow-700 font-bold">The gap starts today.</span>"
          </p>
        </div>
      </div>
    </section>
  );
}
