import { Building2 } from 'lucide-react';

export default function BangaloreAdvantage() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-20 h-20 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            You Live in India&apos;s Tech Hub. Does Your Child Have the Advantage?
          </h2>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <p className="text-xl md:text-2xl leading-relaxed text-purple-50">
            Bangalore is the innovation capital of India. The skills of the future are being built right next door. Your child deserves to be ahead of the curve, learning world-class skills early, right here in the city that defines the future.
          </p>
        </div>
      </div>
    </section>
  );
}
