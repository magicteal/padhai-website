"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECT_CATEGORIES, GRADE_LEVELS, ProjectCategory, GradeLevel } from '@/lib/types';

interface ProjectFilterProps {
  selectedCategory: ProjectCategory;
  selectedGrade: GradeLevel;
  onCategoryChange: (category: ProjectCategory) => void;
  onGradeChange: (grade: GradeLevel) => void;
  compact?: boolean;
}

export default function ProjectFilter({
  selectedCategory,
  selectedGrade,
  onCategoryChange,
  onGradeChange,
  compact = false,
}: ProjectFilterProps) {
  return (
    <div className={`${compact ? 'space-y-3' : 'space-y-6'}`}>
      {/* Category Filter */}
      <div>
        <h3 className={`font-bold text-slate-800 mb-3 flex items-center gap-2 ${compact ? 'text-sm' : 'text-base'}`}>
          <span>🎯</span> Filter by Category
        </h3>
        <div className="flex flex-wrap gap-2">
          {PROJECT_CATEGORIES.map((cat) => (
            <motion.button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              className={`
                px-3 py-2 rounded-full font-medium transition-all text-sm
                flex items-center gap-1.5 touch-target
                ${selectedCategory === cat.value
                  ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-300/50'
                  : 'bg-white text-slate-700 hover:bg-purple-50 border-2 border-purple-100 hover:border-purple-300'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{cat.emoji}</span>
              <span className="hidden sm:inline">{cat.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Grade Filter */}
      <div>
        <h3 className={`font-bold text-slate-800 mb-3 flex items-center gap-2 ${compact ? 'text-sm' : 'text-base'}`}>
          <span>📚</span> Filter by Grade
        </h3>
        <div className="flex flex-wrap gap-2">
          {GRADE_LEVELS.map((grade) => (
            <motion.button
              key={grade.value}
              onClick={() => onGradeChange(grade.value)}
              className={`
                px-4 py-2 rounded-full font-medium transition-all text-sm touch-target
                ${selectedGrade === grade.value
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-300/50'
                  : 'bg-white text-slate-700 hover:bg-violet-50 border-2 border-violet-100 hover:border-violet-300'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {grade.label}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
