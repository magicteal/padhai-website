import { Check, Zap } from 'lucide-react';
import RazorpayButton from './RazorpayButton';

export default function CoursePricing() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-600 to-purple-700">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl p-10 shadow-2xl">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-xl font-bold text-sm mb-6">
            <Zap className="w-4 h-4" /> January Launch Offer (Limited Seats)
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Invest in Their Future Today
          </h2>

          <div className="flex items-baseline gap-3 mb-8">
            <span className="text-5xl font-bold text-purple-600">₹16,000</span>
            <span className="text-2xl text-gray-400 line-through">₹23,600</span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-xl font-semibold text-sm">
              Save 30%
            </span>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </span>
              <span className="text-gray-700">18 Live Classes (3 per week)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </span>
              <span className="text-gray-700">Management & Soft Skills Module</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </span>
              <span className="text-gray-700">Personal Mentorship & Doubt Solving</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </span>
              <span className="text-gray-700">Final Project Review & Certificate</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </span>
              <span className="text-gray-700">Chance to win 50% Scholarship</span>
            </div>
          </div>

          <RazorpayButton
            courseId="ai-foundation"
            courseName="AI Foundation + Management Program"
            amount={16000}
            className="w-full bg-purple-600 text-white font-bold text-xl py-5 rounded-xl hover:bg-purple-700 transition shadow-lg mb-4 flex items-center justify-center"
          >
            Secure Spot for ₹16,000
          </RazorpayButton>

          <p className="text-center text-sm text-gray-500">
            Small batches of 8–12 students only.
          </p>
        </div>
      </div>
    </section>
  );
}
