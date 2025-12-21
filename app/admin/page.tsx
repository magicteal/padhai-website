"use client";
import { motion } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { FolderKanban, MessageSquareQuote, TrendingUp, Users, Star, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const { projects, testimonials, users, currentUser } = useAppStore();

  const stats = [
    { 
      label: 'Total Projects', 
      value: projects.length, 
      icon: FolderKanban, 
      color: 'from-purple-500 to-fuchsia-500',
      emoji: '🎨',
      href: '/admin/projects'
    },
    { 
      label: 'Total Users', 
      value: users.length, 
      icon: Users, 
      color: 'from-green-500 to-emerald-500',
      emoji: '👥',
      href: '/admin/users'
    },
    { 
      label: 'Total Testimonials', 
      value: testimonials.length, 
      icon: MessageSquareQuote, 
      color: 'from-blue-500 to-cyan-500',
      emoji: '💬',
      href: '/admin/testimonials'
    },
    { 
      label: 'Featured Projects', 
      value: projects.filter(p => p.featured).length, 
      icon: Star, 
      color: 'from-yellow-500 to-orange-500',
      emoji: '⭐',
      href: '/admin/projects'
    },
  ];

  const recentProjects = projects.slice(-5).reverse();
  const recentTestimonials = testimonials.slice(-5).reverse();

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Welcome back, {currentUser?.name?.split(' ')[0]}! 👋
          </h1>
          <p className="text-slate-500 mt-1">Here's what's happening with your content today.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/projects">
            <motion.button 
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-xl transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Add Project</span>
              <span>🎨</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <Link key={idx} href={stat.href}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="admin-card p-5 sm:p-6 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{stat.emoji}</span>
                </div>
                <span className="text-3xl sm:text-4xl font-bold text-slate-800">{stat.value}</span>
              </div>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="admin-card p-5 sm:p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span>🎨</span> Recent Projects
            </h2>
            <Link href="/admin/projects" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {recentProjects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-purple-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-fuchsia-100 flex items-center justify-center text-2xl">
                  {project.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-800 truncate">{project.title}</p>
                  <p className="text-sm text-slate-500">{project.grade} • {project.category}</p>
                </div>
                {project.featured && (
                  <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">
                    Featured
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="admin-card p-5 sm:p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span>💬</span> Recent Testimonials
            </h2>
            <Link href="/admin/testimonials" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {recentTestimonials.map((testimonial, idx) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-purple-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-2xl">
                  {testimonial.type === 'video' ? '🎥' : '📝'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-800 truncate">
                    {testimonial.type === 'video' ? testimonial.author : testimonial.quote?.slice(0, 50) + '...'}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonial.type === 'video' ? 'Video' : `${testimonial.author}, ${testimonial.location}`}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="admin-card p-5 sm:p-6"
      >
        <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-600" />
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Add Project', emoji: '🎨', href: '/admin/projects' },
            { label: 'Add Testimonial', emoji: '💬', href: '/admin/testimonials' },
            { label: 'View Website', emoji: '🌐', href: '/', external: true },
            { label: 'View Projects', emoji: '👀', href: '/projects', external: true },
          ].map((action, idx) => (
            <Link 
              key={idx} 
              href={action.href}
              target={action.external ? '_blank' : undefined}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-50 border-2 border-purple-100 hover:border-purple-300 transition-all text-center cursor-pointer"
              >
                <span className="text-3xl block mb-2">{action.emoji}</span>
                <span className="text-sm font-medium text-slate-700">{action.label}</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
