"use client";

import { useState } from "react";

export default function CourseSyllabus() {
  const [openWeek, setOpenWeek] = useState<number | null>(null);

  const toggleWeek = (week: number) => {
    setOpenWeek(openWeek === week ? null : week);
  };

  const weeks = [
    {
      title: "Week 1: AI Basics & Safe Habits",
      focus: "Introduction to AI, Good vs. Bad Screen Time, Safety Rules.",
      project: "\"My AI Promise\" Worksheet & First AI Story.",
    },
    {
      title: "Week 2: Creativity Unleashed",
      focus: "Prompting for stories, art, characters, and simple animations.",
      project: "Create a digital storybook or character sheet.",
    },
    {
      title: "Week 3: School & Homework Superpowers",
      focus: "Using AI to understand Science/Math concepts, create presentations, and research topics.",
      project: "A full school project draft created in minutes.",
    },
    {
      title: "Week 4: The Management & 'Sanskar' Week",
      focus: "Time management, communication, confidence building, and early career awareness.",
      project: "\"My Dream Career Map\" & Daily Habit Tracker.",
    },
    {
      title: "Week 5: Final Innovation Project",
      focus: "Applying all skills to build something unique (Brand, Science Model, or App Concept).",
      project: "Project development and mentorship review.",
    },
    {
      title: "Week 6: Graduation & Demo Day",
      focus: "Presenting to mentors/parents, feedback, and certification.",
      project: "Scholarship announcement & Certificate distribution.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-purple-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          The 6-Week Learning Roadmap
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Every week is packed with fun, learning, and real projects
        </p>

        <div className="space-y-4">
          {weeks.map((week, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-purple-100"
            >
              <button
                onClick={() => toggleWeek(index)}
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-purple-50 transition"
              >
                <span className="font-bold text-left text-lg text-gray-900">
                  {week.title}
                </span>
                <span className="text-purple-600 text-2xl font-bold">
                  {openWeek === index ? "−" : "+"}
                </span>
              </button>
              {openWeek === index && (
                <div className="px-6 pb-6 pt-2 border-t border-purple-100 bg-purple-50/50">
                  <div className="mb-4">
                    <div className="font-semibold text-purple-600 mb-1">Focus:</div>
                    <p className="text-gray-700">{week.focus}</p>
                  </div>
                  <div>
                    <div className="font-semibold text-purple-600 mb-1">Project:</div>
                    <p className="text-gray-700">{week.project}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
