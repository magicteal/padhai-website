"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { ProjectCategory, GradeLevel } from '@/lib/types';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import { Palette, Star, Search, Rocket, ArrowRight } from 'lucide-react';

export default function ProjectsSection() {
  const { projects } = useAppStore();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>('all');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
      const gradeMatch = selectedGrade === 'all' || project.grade.includes(selectedGrade.replace('Grade ', ''));
      return categoryMatch && gradeMatch;
    }).slice(0, 6); // Show only 6 on home page
  }, [projects, selectedCategory, selectedGrade]);

  return (
    <section 
      id="projects" 
      className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-fuchsia-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          <motion.span 
            className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-3"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Palette className="w-7 h-7 text-purple-600" />
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3 gradient-text">
            What Real Kids Are Already Creating
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-medium flex items-center justify-center gap-2">
            <Star className="w-4 h-4 text-purple-500" />
            <span>Made by PadhAi Students</span>
            <Star className="w-4 h-4 text-purple-500" />
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8 p-4 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg border-2 border-white"
        >
          <ProjectFilter
            selectedCategory={selectedCategory}
            selectedGrade={selectedGrade}
            onCategoryChange={setSelectedCategory}
            onGradeChange={setSelectedGrade}
            compact
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <span className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-purple-500" />
            </span>
            <p className="text-slate-600 text-lg">No projects found with these filters.</p>
            <button 
              onClick={() => { setSelectedCategory('all'); setSelectedGrade('all'); }}
              className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 text-center"
        >
          <div className="inline-block px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-purple-100 via-violet-100 to-purple-50 shadow-lg border-2 border-white mb-6">
            <p className="text-slate-900 font-bold text-sm sm:text-base flex items-center gap-2 flex-wrap justify-center">
              <Star className="w-4 h-4 text-purple-500" />
              <span>Kids start simple.</span>
              <span className="gradient-text">With the right guidance, they build amazing things!</span>
              <Rocket className="w-4 h-4 text-purple-500" />
            </p>
          </div>
          
          <div className="mt-4 sm:mt-6">
            <Link href="/projects">
              <motion.button 
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
