export default function AISuperpower() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          It's Not Just Tech. It's Thinking.
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Three reasons why AI is a superpower for your child
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-3 text-purple-600">
              Hyper-Creativity
            </h3>
            <h4 className="text-lg font-semibold mb-3 text-gray-800">
              Imagination No Longer Has Limits.
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Your child can visualize a story, design a character, or prototype a science model in minutes. AI removes the barrier between 'I have an idea' and 'I made this'.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-3 text-purple-600">
              Academic Confidence
            </h3>
            <h4 className="text-lg font-semibold mb-3 text-gray-800">
              A Personal Tutor 24/7.
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Stuck on a complex science topic? AI explains it simply. Need ideas for a school project? AI helps brainstorm. We teach them to use AI as a smart assistant, not a shortcut.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-purple-600">
              Digital Discipline
            </h3>
            <h4 className="text-lg font-semibold mb-3 text-gray-800">
              From Consumer to Creator.
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Kids are already on screens. Instead of mindlessly scrolling, we teach them to use that time to build, code, and design. We turn 'Bad Screen Time' into 'Skill Time'.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
