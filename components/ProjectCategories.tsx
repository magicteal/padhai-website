"use client";

import { useState } from "react";
import { Sparkles, Microscope, Palette, Bot, BookOpen } from "lucide-react";

export default function ProjectCategories() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects", icon: Sparkles },
    { id: "science", label: "Science Models", icon: Microscope },
    { id: "art", label: "Digital Art & Stories", icon: Palette },
    { id: "robotics", label: "Robotics & Code", icon: Bot },
    { id: "presentations", label: "School Presentations", icon: BookOpen },
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
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold text-lg transition shadow-md flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-purple-600 text-white shadow-lg scale-105"
                    : "bg-white text-purple-600 border-2 border-purple-200 hover:bg-purple-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.label}
              </button>
            );
          })}
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
