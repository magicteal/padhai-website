"use client";
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { ProjectCategory, GradeLevel } from '@/lib/types';
import ProjectFilter from '@/components/ProjectFilter';
import ProjectCard from '@/components/ProjectCard';
import { Sparkles, Search } from 'lucide-react';

export default function ProjectsPage() {
  const { projects } = useAppStore();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
      const gradeMatch = selectedGrade === 'all' || project.grade.includes(selectedGrade.replace('Grade ', ''));
      const searchMatch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.caption.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && gradeMatch && searchMatch;
    });
  }, [projects, selectedCategory, selectedGrade, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-fuchsia-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-semibold text-sm">Student Innovation Gallery</span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text">Amazing Projects</span>
              <br />
              <span className="text-slate-700">by Amazing Kids 🌟</span>
            </motion.h1>
            
            <motion.p 
              className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Explore the incredible creations our young innovators have built using AI as their creative assistant. 
              From robots to storybooks, see what's possible! 🚀
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              className="max-w-md mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-purple-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all text-slate-700 bg-white shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-4 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border-2 border-white"
          >
            <ProjectFilter
              selectedCategory={selectedCategory}
              selectedGrade={selectedGrade}
              onCategoryChange={setSelectedCategory}
              onGradeChange={setSelectedGrade}
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 flex items-center justify-between flex-wrap gap-4"
          >
            <p className="text-slate-600 font-medium">
              Showing <span className="text-purple-600 font-bold">{filteredProjects.length}</span> projects
            </p>
            {(selectedCategory !== 'all' || selectedGrade !== 'all' || searchQuery) && (
              <button 
                onClick={() => { 
                  setSelectedCategory('all'); 
                  setSelectedGrade('all'); 
                  setSearchQuery(''); 
                }}
                className="text-sm px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium hover:bg-purple-200 transition"
              >
                Clear All Filters ✕
              </button>
            )}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <motion.span 
                className="text-7xl block mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                🔍
              </motion.span>
              <h3 className="text-xl font-bold text-slate-700 mb-2">No projects found</h3>
              <p className="text-slate-500 mb-6">Try adjusting your filters or search query</p>
              <button 
                onClick={() => { 
                  setSelectedCategory('all'); 
                  setSelectedGrade('all'); 
                  setSearchQuery(''); 
                }}
                className="btn-primary"
              >
                Show All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-kid p-6 sm:p-10 text-center"
          >
            <motion.span 
              className="text-5xl block mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🚀
            </motion.span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4">
              Want Your Child's Project Here?
            </h2>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">
              Join PadhAI and help your child create amazing projects with AI as their creative assistant!
            </p>
            <motion.button 
              className="btn-primary text-base sm:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Free Counselling 📞
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
