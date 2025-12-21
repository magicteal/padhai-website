"use client";

import { useState } from "react";

export default function CourseFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Will my child be able to cope if they don't know coding?",
      answer: "Yes! This course requires Zero coding knowledge. We teach logic using English commands (Prompting).",
    },
    {
      question: "What if we miss a class?",
      answer: "Every session is recorded and uploaded to the student portal within 24 hours.",
    },
    {
      question: "Is there homework?",
      answer: "We give \"Fun Missions\" (15-20 mins) that they actually enjoy doing, like creating a comic strip or planning a schedule.",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Everything you need to know about the course
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-purple-100"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-purple-50 transition text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="text-purple-600 text-2xl font-bold flex-shrink-0">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 pt-2 border-t border-purple-100 bg-purple-50/50">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
