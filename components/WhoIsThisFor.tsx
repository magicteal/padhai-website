export default function WhoIsThisFor() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Is This Right for Your Child?
        </h2>

        <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-purple-200">
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <span className="text-green-500 font-bold text-2xl flex-shrink-0">✅</span>
              <p className="text-lg text-gray-800">
                If your child loves asking <span className="font-semibold">"Why?"</span> and <span className="font-semibold">"How?"</span>
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-green-500 font-bold text-2xl flex-shrink-0">✅</span>
              <p className="text-lg text-gray-800">
                If your child is creative but struggles to put ideas on paper.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-green-500 font-bold text-2xl flex-shrink-0">✅</span>
              <p className="text-lg text-gray-800">
                If you are worried about their addiction to games/videos.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-green-500 font-bold text-2xl flex-shrink-0">✅</span>
              <p className="text-lg text-gray-800">
                If you want them to be <span className="font-semibold">leaders</span>, not just followers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
