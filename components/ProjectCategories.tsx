"use client";

import { useState } from "react";

export default function ProjectCategories() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects", emoji: "✨" },
    { id: "science", label: "Science Models", emoji: "🔬" },
    { id: "art", label: "Digital Art & Stories", emoji: "🎨" },
    { id: "robotics", label: "Robotics & Code", emoji: "🤖" },
    { id: "presentations", label: "School Presentations", emoji: "📚" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Explore by Category
        </h2>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Filter projects by what interests you most
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold text-lg transition shadow-md ${
                activeCategory === category.id
                  ? "bg-purple-600 text-white shadow-lg scale-105"
                  : "bg-white text-purple-600 border-2 border-purple-200 hover:bg-purple-50"
              }`}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.label}
            </button>
          ))}
        </div>

        {activeCategory === "all" && (
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              Showing all projects above
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
