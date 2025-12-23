import { Baby, Target, GraduationCap } from 'lucide-react';

export default function AgeBatches() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Learning Designed for Their Age
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Every batch is tailored to your child&apos;s learning style
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Junior Batch */}
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-8 border-2 border-yellow-200">
            <div className="w-14 h-14 rounded-xl bg-yellow-200 flex items-center justify-center mb-4">
              <Baby className="w-7 h-7 text-yellow-700" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-yellow-700">
              Junior Batch
            </h3>
            <div className="text-sm font-semibold text-yellow-600 mb-4">Ages 5–8</div>
            <p className="text-gray-700 leading-relaxed">
              Focus on curiosity, storytelling, and fun visuals.
            </p>
          </div>

          {/* Middle Batch */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 border-2 border-blue-200">
            <div className="w-14 h-14 rounded-xl bg-blue-200 flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-blue-700" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-blue-700">
              Middle Batch
            </h3>
            <div className="text-sm font-semibold text-blue-600 mb-4">Ages 9–12</div>
            <p className="text-gray-700 leading-relaxed">
              Focus on logic, school projects, and presentation skills.
            </p>
          </div>

          {/* Senior Batch */}
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8 border-2 border-purple-200">
            <div className="w-14 h-14 rounded-xl bg-purple-200 flex items-center justify-center mb-4">
              <GraduationCap className="w-7 h-7 text-purple-700" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-purple-700">
              Senior Batch
            </h3>
            <div className="text-sm font-semibold text-purple-600 mb-4">Ages 13–15</div>
            <p className="text-gray-700 leading-relaxed">
              Focus on career tools, advanced prompting, and research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
