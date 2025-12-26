"use client";
import { motion } from "framer-motion";
import { FileText, Users, Calendar, Video, UserCheck, Copyright, CreditCard, RotateCcw, PlayCircle, Wifi, Shield, AlertTriangle, XCircle, RefreshCw, Phone } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-fuchsia-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white py-16 sm:py-24">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
              <FileText className="w-8 h-8 text-purple-200" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">Terms & Conditions</h1>
            <p className="text-purple-200 text-lg">Last Updated: January 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            Welcome to PadhAi Club ("we", "our", "us"). By enrolling your child, accessing our website, booking demos, or making any payment, you agree to the Terms and Conditions mentioned below.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8 font-medium">
            If you do not agree, please do not use our services.
          </p>

          {/* Section 1 */}
          <TermsSection icon={FileText} number="1" title="Nature of Service">
            <p className="text-slate-600 mb-3">PadhAi Club provides:</p>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>online live classes for children aged 5–14</li>
              <li>AI learning foundation programs</li>
              <li>management & mindset development modules</li>
              <li>project-based learning</li>
              <li>mentorship and doubt-solving support</li>
              <li>assessments and certification</li>
            </ul>
            <p className="text-slate-600">We are not a school or board-affiliated education institution. We provide skill-based supplementary learning programs.</p>
          </TermsSection>

          {/* Section 2 */}
          <TermsSection icon={Users} number="2" title="Eligibility for Enrollment">
            <p className="text-slate-600 mb-3">To enroll a child:</p>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>parent/guardian consent is mandatory</li>
              <li>child must be between 5–14 years</li>
              <li>accurate information must be provided during registration</li>
            </ul>
            <p className="text-slate-600">We reserve the right to refuse or cancel admission where necessary.</p>
          </TermsSection>

          {/* Section 3 */}
          <TermsSection icon={Calendar} number="3" title="Batch Allocation & Scheduling">
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>Batches are assigned based on age, level & availability</li>
              <li>We reserve the right to change faculty/tutors</li>
              <li>Class timings may be updated if required</li>
              <li>Recorded backup sessions may be provided if schedules change</li>
            </ul>
            <p className="text-slate-600">We try our best to accommodate preferences but cannot guarantee specific time slots.</p>
          </TermsSection>

          {/* Section 4 */}
          <TermsSection icon={Video} number="4" title="Class Recordings & Usage">
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>Live sessions may be recorded</li>
              <li>Recordings may be shared only with enrolled students</li>
              <li>Recordings are for revision & internal training only</li>
              <li>Unauthorized sharing or screen recording is strictly prohibited</li>
            </ul>
            <p className="text-purple-700 font-medium">We reserve rights over recorded content.</p>
          </TermsSection>

          {/* Section 5 */}
          <TermsSection icon={UserCheck} number="5" title="Code of Conduct">
            <p className="text-slate-600 mb-2 font-medium">Students must:</p>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>behave respectfully toward mentors & peers</li>
              <li>not misuse chat or tools provided</li>
              <li>not share abusive content</li>
              <li>keep cameras/mics on when requested by mentor</li>
            </ul>
            <p className="text-red-600 font-medium mb-4">Violation may result in suspension without refund.</p>
            
            <p className="text-slate-600 mb-2 font-medium">Parents must:</p>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>avoid disrupting live classes</li>
              <li>not demand disruptive schedule changes</li>
              <li>communicate concerns professionally</li>
            </ul>
          </TermsSection>

          {/* Section 6 */}
          <TermsSection icon={Copyright} number="6" title="Content Ownership & Copyright">
            <p className="text-slate-600 mb-3">All course content including videos, slides, study material, projects & frameworks is the intellectual property of PadhAi Club.</p>
            <p className="text-slate-600 mb-2">You cannot:</p>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>copy</li>
              <li>resell</li>
              <li>publish</li>
              <li>distribute</li>
              <li>commercialize</li>
            </ul>
            <p className="text-slate-600 mt-3">our content without written permission.</p>
          </TermsSection>

          {/* Section 7 */}
          <TermsSection icon={CreditCard} number="7" title="Payments, Fees & Offers">
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>All prices are listed in INR</li>
              <li>Promotional offers are time-bound</li>
              <li>We reserve the right to change pricing anytime</li>
              <li>Discounts cannot be combined unless explicitly stated</li>
            </ul>
            <p className="text-purple-700 font-medium">Enrollment is confirmed only after successful fee payment.</p>
          </TermsSection>

          {/* Section 8 */}
          <TermsSection icon={RotateCcw} number="8" title="Refund & Cancellation Policy">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg mb-4">
              <p className="font-bold text-red-700 mb-2">Refunds are NOT automatic.</p>
              <ul className="list-disc ml-6 text-slate-700 space-y-1">
                <li>The payment gateway Razorpay does not issue refunds directly</li>
                <li>Refunds must be requested directly from PadhAi Club</li>
                <li>Approval of refund is at the sole discretion of management</li>
              </ul>
            </div>

            <p className="text-slate-600 mb-2">Refund may be considered only under exceptional cases:</p>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>duplicate payments</li>
              <li>technical payment failure</li>
              <li>course cancellation from our side</li>
            </ul>

            <p className="text-slate-600 mb-2">Refunds will NOT be granted for:</p>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>change of mind</li>
              <li>inconvenience due to schedule</li>
              <li>poor internet at student side</li>
              <li>non-attendance of classes</li>
              <li>misunderstanding of course content</li>
            </ul>

            <p className="text-slate-600">If approved, refunds will be processed to original payment source within a reasonable time.</p>
          </TermsSection>

          {/* Section 9 */}
          <TermsSection icon={PlayCircle} number="9" title="Trial Sessions & Demo Policy">
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>Demo classes are complimentary</li>
              <li>They do not guarantee admission</li>
              <li>Seats are limited in live batches</li>
            </ul>
          </TermsSection>

          {/* Section 10 */}
          <TermsSection icon={Wifi} number="10" title="Technology Requirements">
            <p className="text-slate-600 mb-3">Parents are responsible for:</p>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>stable internet connection</li>
              <li>device (laptop/tablet preferred)</li>
              <li>updated software/tools required</li>
            </ul>
            <p className="text-slate-600">We are not responsible for loss of learning due to poor connectivity.</p>
          </TermsSection>

          {/* Section 11 */}
          <TermsSection icon={Shield} number="11" title="Safety & AI Usage Policy">
            <p className="text-slate-600 mb-3">We ensure:</p>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>age-appropriate tools</li>
              <li>monitored environments</li>
              <li>safe online learning practices</li>
            </ul>
            <p className="text-slate-600">However, parents must supervise home device usage.</p>
          </TermsSection>

          {/* Section 12 */}
          <TermsSection icon={AlertTriangle} number="12" title="Limitation of Liability">
            <p className="text-slate-600 mb-3">PadhAi Club is not responsible for:</p>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>exam results</li>
              <li>school performance guarantees</li>
              <li>device malfunction</li>
              <li>internet interruption</li>
              <li>force-majeure impact</li>
            </ul>
            <p className="text-purple-700 font-medium">Our programs are skill-development programs, not academic guarantee programs.</p>
          </TermsSection>

          {/* Section 13 */}
          <TermsSection icon={XCircle} number="13" title="Termination of Access">
            <p className="text-slate-600 mb-3">We reserve the right to suspend, block, or remove access if:</p>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>fees unpaid</li>
              <li>misconduct occurs</li>
              <li>policy violation happens</li>
            </ul>
            <p className="text-red-600 font-medium">No refund will be due in such cases.</p>
          </TermsSection>

          {/* Section 14 */}
          <TermsSection icon={RefreshCw} number="14" title="Changes to Terms">
            <p className="text-slate-600 mb-3">We may revise these Terms anytime. Updated versions will be posted on our website.</p>
            <p className="text-purple-700 font-medium">Continued usage = acceptance of new Terms.</p>
          </TermsSection>

          {/* Section 15 */}
          <TermsSection icon={Phone} number="15" title="Contact Details">
            <p className="text-slate-600 mb-3">For any policy, admission, refund or legal questions:</p>
            <p className="text-slate-600">📧 <a href="mailto:support@padhai.club" className="text-purple-600 hover:underline">support@padhai.club</a></p>
            <p className="text-slate-600">📧 <a href="mailto:refunds@padhai.club" className="text-purple-600 hover:underline">refunds@padhai.club</a></p>
          </TermsSection>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link href="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition">
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function TermsSection({ icon: Icon, number, title, children }: { icon: React.ElementType; number: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white shadow-lg">
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{number}. {title}</h2>
      </div>
      <div className="pl-0 sm:pl-13">{children}</div>
    </motion.div>
  );
}
