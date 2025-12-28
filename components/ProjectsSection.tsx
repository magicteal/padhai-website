"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { ProjectCategory, GradeLevel } from '@/lib/types';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import { Palette, Star, Search, Rocket, ArrowRight, Bot, Sparkles, Heart, Lightbulb, Wand2, Brain, Code } from 'lucide-react';

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
      
      {/* Mobile decorations */}
      <motion.div
        className="absolute top-6 right-4 md:hidden"
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" }, scale: { repeat: Infinity, duration: 2.5 } }}
      >
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-70" />
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-3 md:hidden"
        animate={{ y: [0, -6, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Sparkles className="w-4 h-4 text-purple-400 opacity-60" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-2 md:hidden"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <Palette className="w-4 h-4 text-pink-500 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-3 md:hidden"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      >
        <Heart className="w-3 h-3 text-red-400 fill-red-400 opacity-50" />
      </motion.div>
      
      {/* Desktop Floating AI Tool Icons */}
      <motion.div
        className="absolute top-24 left-[6%] hidden xl:block"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg flex items-center justify-center">
          <Palette className="w-7 h-7 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-32 right-[8%] hidden lg:block"
        animate={{ y: [0, 12, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-lg flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-[4%] hidden xl:block"
        animate={{ x: [0, 8, 0], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, delay: 1 }}
      >
        <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-[10%] hidden lg:block"
        animate={{ rotate: [0, -10, 10, 0], y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4.5 }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg shadow-md flex items-center justify-center">
          <Wand2 className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-[5%] hidden xl:block"
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, delay: 0.8 }}
      >
        <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg flex items-center justify-center">
          <Code className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      
      {/* Desktop Kid-friendly floating shapes */}
      <motion.div
        className="absolute top-16 right-[20%] hidden lg:block"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 8, ease: "linear" }, scale: { repeat: Infinity, duration: 2 } }}
      >
        <Star className="w-7 h-7 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute bottom-28 left-[15%] hidden xl:block"
        animate={{ y: [0, -12, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      >
        <Heart className="w-6 h-6 text-pink-400 fill-pink-400 drop-shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-[3%] hidden lg:block"
        animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 4, delay: 0.3 }}
      >
        <Sparkles className="w-6 h-6 text-purple-400" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          <motion.span 
            className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-3 mx-auto"
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
              <ProjectCard key={project.id} project={project} index={idx} compact />
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
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-2 mx-auto"
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
