"use client";
import { motion } from "framer-motion";
import { Shield, Mail, CreditCard, Cookie, Share2, Video, Lock, MessageSquare, RefreshCw, Phone } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
              <Shield className="w-8 h-8 text-purple-200" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">Privacy Policy</h1>
            <p className="text-purple-200 text-lg">Last updated: January 2026</p>
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
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            PadhAi Club ("we", "our", "us") operates online learning programs for children. We are committed to protecting the privacy of parents and students who use our website, classes, and services.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            By using our website, enrolling in our programs, or filling any form, you agree to the terms in this Privacy Policy.
          </p>

          {/* Section 1 */}
          <PolicySection icon={Mail} number="1" title="Information We Collect">
            <p className="text-slate-600 mb-4">We may collect the following information:</p>
            
            <h4 className="font-bold text-purple-700 mb-2">🔹 From Parents</h4>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>City & country</li>
              <li>Payment details (processed securely via Razorpay)</li>
            </ul>

            <h4 className="font-bold text-purple-700 mb-2">🔹 From Students (Children)</h4>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>Name</li>
              <li>Age</li>
              <li>Grade / Class</li>
              <li>School information (optional)</li>
              <li>Classroom performance data</li>
              <li>Assignments / projects submitted</li>
            </ul>
            <p className="text-slate-600 font-medium">We never knowingly collect unnecessary personal information from children.</p>
          </PolicySection>

          {/* Section 2 */}
          <PolicySection icon={RefreshCw} number="2" title="How We Collect Information">
            <p className="text-slate-600 mb-3">We may collect information through:</p>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>Website forms</li>
              <li>WhatsApp API chats</li>
              <li>Demo booking forms</li>
              <li>Payment gateway checkout</li>
              <li>Email or phone communication</li>
              <li>Class participation and assignments</li>
              <li>Cookies & website analytics tools</li>
            </ul>
          </PolicySection>

          {/* Section 3 */}
          <PolicySection icon={MessageSquare} number="3" title="How We Use Your Information">
            <p className="text-slate-600 mb-3">We use collected information for:</p>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>Student enrollment & batch allocation</li>
              <li>Communication with parents</li>
              <li>Class scheduling & updates</li>
              <li>Providing learning materials & recordings</li>
              <li>Performance tracking and certificates</li>
              <li>Internal analysis to improve programs</li>
              <li>Legal & accounting record keeping</li>
              <li>Marketing and retargeting ads (with consent)</li>
            </ul>
            <p className="text-purple-700 font-bold">We do NOT sell or trade your personal data.</p>
          </PolicySection>

          {/* Section 4 */}
          <PolicySection icon={Shield} number="4" title="Child Data Protection">
            <p className="text-slate-600 mb-3">PadhAi Club works with children aged 5–14. We follow strict child-safety practices:</p>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>No public sharing of student faces without parent consent</li>
              <li>Limited classroom recording usage</li>
              <li>Safe AI tools only</li>
              <li>No exposure to adult, harmful or unsafe content</li>
            </ul>
            <p className="text-slate-600 mb-2">Parents can request: data correction, data access, deletion of their child's record</p>
            <p className="text-slate-600">by emailing: <a href="mailto:support@padhai.club" className="text-purple-600 hover:underline">support@padhai.club</a></p>
          </PolicySection>

          {/* Section 5 */}
          <PolicySection icon={CreditCard} number="5" title="Payments & Refunds (Razorpay)">
            <p className="text-slate-600 mb-4">Payments are processed securely via Razorpay. We do not store any card, UPI, or bank details.</p>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg mb-4">
              <p className="font-bold text-red-700 mb-2">🔴 Important Refund Clause</p>
              <ul className="list-disc ml-6 text-slate-700 space-y-1">
                <li>Razorpay does not issue refunds automatically</li>
                <li>Refunds are not handled by Razorpay</li>
                <li>Any refund request must be raised directly with PadhAi Club Team</li>
                <li>Refund is subject to internal review & eligibility</li>
              </ul>
            </div>

            <p className="text-slate-600 mb-3">👉 <strong>Refunds are solely at the discretion of PadhAi Club management</strong></p>
            <p className="text-slate-600 mb-3">If eligible, refunds will be processed by us manually to the original payment method.</p>
            <p className="text-slate-600 mb-4">To request a refund, email: 📩 <a href="mailto:refunds@padhai.club" className="text-purple-600 hover:underline">refunds@padhai.club</a></p>
            
            <p className="text-slate-600 mb-2">Refund approval is not guaranteed and depends on:</p>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>course progress</li>
              <li>attendance</li>
              <li>access to recordings</li>
              <li>scholarship terms</li>
              <li>administrative costs already incurred</li>
            </ul>
          </PolicySection>

          {/* Section 6 */}
          <PolicySection icon={Cookie} number="6" title="Cookies & Tracking">
            <p className="text-slate-600 mb-3">We may use cookies, pixel tracking, and analytics tools (Google, Meta, etc.) for:</p>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>improving website experience</li>
              <li>remarketing ads</li>
              <li>understanding user behavior</li>
            </ul>
            <p className="text-slate-600">You may disable cookies in your browser settings.</p>
          </PolicySection>

          {/* Section 7 */}
          <PolicySection icon={Share2} number="7" title="Data Sharing">
            <p className="text-slate-600 mb-3">We may share necessary data only with:</p>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>payment gateway partners</li>
              <li>learning platform providers</li>
              <li>analytics & ad platforms</li>
            </ul>
            <p className="text-purple-700 font-medium">We do not sell data to third parties.</p>
            <p className="text-slate-600">Data is shared only for service delivery and improvement.</p>
          </PolicySection>

          {/* Section 8 */}
          <PolicySection icon={Video} number="8" title="Recordings & Class Usage">
            <p className="text-slate-600 mb-3">Live classes may be recorded for:</p>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>quality monitoring</li>
              <li>student revision</li>
              <li>internal training</li>
            </ul>
            <p className="text-slate-600">Recordings are not publicly published without consent.</p>
          </PolicySection>

          {/* Section 9 */}
          <PolicySection icon={Lock} number="9" title="Security Measures">
            <p className="text-slate-600 mb-3">We use reasonable security measures to:</p>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>protect personal information</li>
              <li>restrict data access internally</li>
              <li>prevent unauthorized use</li>
            </ul>
            <p className="text-slate-600">However, no system is 100% secure online.</p>
          </PolicySection>

          {/* Section 10 */}
          <PolicySection icon={MessageSquare} number="10" title="Marketing Communication">
            <p className="text-slate-600 mb-3">By filling our forms, you consent to:</p>
            <ul className="list-disc ml-6 mb-4 text-slate-600 space-y-1">
              <li>WhatsApp updates</li>
              <li>email updates</li>
              <li>SMS communication</li>
            </ul>
            <p className="text-slate-600">You may opt-out anytime by contacting us.</p>
          </PolicySection>

          {/* Section 11 */}
          <PolicySection icon={RefreshCw} number="11" title="Changes to Privacy Policy">
            <p className="text-slate-600">We may update this policy from time to time. The latest version will always be available on our website.</p>
          </PolicySection>

          {/* Section 12 */}
          <PolicySection icon={Phone} number="12" title="Contact Us">
            <p className="text-slate-600 mb-3">For any privacy concerns:</p>
            <p className="text-slate-600">📧 <a href="mailto:support@padhai.club" className="text-purple-600 hover:underline">support@padhai.club</a></p>
            <p className="text-slate-600">📧 <a href="mailto:refunds@padhai.club" className="text-purple-600 hover:underline">refunds@padhai.club</a></p>
          </PolicySection>

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

function PolicySection({ icon: Icon, number, title, children }: { icon: React.ElementType; number: string; title: string; children: React.ReactNode }) {
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
