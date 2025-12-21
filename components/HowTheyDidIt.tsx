export default function HowTheyDidIt() {
  return (
    <section className="py-16 px-4 bg-purple-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            The "Co-Pilot" Method
          </h2>
          <p className="text-xl text-gray-600">
            We don't use AI to cheat. We use it to create.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-200">
            <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-4 text-purple-600">Ideation</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>The child has an idea (e.g., "I want to save forests").</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>They use AI to brainstorm solutions (Drones? Robots? Sensors?).</span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-200">
            <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-4 text-purple-600">Learning</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>They ask AI: "How do I build a fire sensor?"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>AI explains the science and components needed.</span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-200">
            <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-4 text-purple-600">Execution</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>The child builds the physical project or writes the code.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>AI helps debug errors or refine the language.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quote */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-3xl p-8 text-center shadow-xl">
          <p className="text-xl md:text-2xl font-semibold italic">
            "Kids start simple. With the right guidance, they build amazing things."
          </p>
        </div>
      </div>
    </section>
  );
}
