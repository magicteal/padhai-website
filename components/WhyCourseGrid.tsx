import { Rocket, Star, Lightbulb } from 'lucide-react';

export default function WhyCourseGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          More Than Just Coding. A Complete Mindset Shift.
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          We&apos;re building future-ready kids, not just tech users.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
              <Rocket className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-purple-600">
              Practical AI Fluency
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Kids don&apos;t just watch AI; they use it. From creating storybooks to finishing homework smarter.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
              <Star className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-purple-600">
              The &apos;Sanskar&apos; & Management Module
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We teach confidence, time management, and digital discipline. A unique module for Bangalore kids.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
              <Lightbulb className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-purple-600">
              Real-World Project
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Every child builds a final innovation project: a brand, a robot concept, or a research paper.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
