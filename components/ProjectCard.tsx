"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/lib/types';
import { Star, Trophy } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  compact?: boolean;
}

export default function ProjectCard({ project, index, compact }: ProjectCardProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="card-kid overflow-hidden group cursor-pointer"
    >
      {/* Image Area (9:16 portrait) */}
      <div
        className={compact
          ? "relative mx-auto w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] bg-gradient-to-br from-purple-200 via-violet-200 to-fuchsia-200 overflow-hidden"
          : "relative w-full bg-gradient-to-br from-purple-200 via-violet-200 to-fuchsia-200 overflow-hidden"}
        style={{ aspectRatio: '9 / 16' }}
      >
        {project.imageSrc ? (
          <img
            src={project.imageSrc}
            alt={`${project.title} photo`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-5xl md:text-6xl block mb-2">{project.emoji}</span>
              <span className="text-purple-600 font-semibold text-xs bg-white/60 px-3 py-1 rounded-full">
                Photo coming soon
              </span>
            </motion.div>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge (smaller on mobile) */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
          <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-bold text-purple-700 shadow-sm">
            {project.emoji} {project.category}
          </span>
        </div>
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
            <motion.span 
              className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl text-[10px] sm:text-xs font-bold text-white shadow-lg flex items-center gap-1"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Featured
            </motion.span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <figcaption className="p-4 sm:p-5 bg-gradient-to-br from-white to-purple-50/50">
        <div className="flex items-start gap-2 mb-2">
          <span className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
            <Trophy className="w-4 h-4 text-purple-600" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight truncate">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
              <span className="inline-block px-2 py-0.5 sm:px-2.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-[10px] sm:text-xs rounded-full font-medium">
                {project.grade}
              </span>
              {project.studentName && (
                <span className="text-xs text-slate-500">by {project.studentName}</span>
              )}
            </div>
          </div>
        </div>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
          {project.caption}
        </p>
      </figcaption>
    </motion.figure>
  );
}
