"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Award, TrendingUp, User } from 'lucide-react';
import Link from 'next/link';

export default function UserDashboard() {
  const isAuthenticated = useAppStore((s) => s.isAuthenticated);
  const currentUser = useAppStore((s) => s.currentUser);
  const logout = useAppStore((s) => s.logout);
  const projects = useAppStore((s) => s.projects);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Read persisted auth to avoid redirect while store rehydrates
    let persistedAuth = false;
    let persistedRole: string | null = null;
    if (typeof window !== 'undefined') {
      try {
        const raw = localStorage.getItem('padhai-storage');
        if (raw) {
          const data = JSON.parse(raw);
          const st = data?.state;
          persistedAuth = st?.isAuthenticated === true && !!st?.currentUser;
          persistedRole = st?.currentUser?.role ?? null;
        }
      } catch {}
    }

    // If persisted shows an authenticated user, skip redirect until store is ready
    if (persistedAuth && (!isAuthenticated || !currentUser)) {
      return;
    }

    if (!isAuthenticated || !currentUser) {
      router.replace('/login');
      return;
    }
    if (currentUser.role === 'admin' || persistedRole === 'admin') {
      router.replace('/admin');
    }
  }, [mounted, isAuthenticated, currentUser, router]);

  if (!mounted || !isAuthenticated || !currentUser || currentUser.role === 'admin') {
    return null;
  }

  // Logout handled by Navbar; no local logout button here

  const stats = [
    { label: 'Enrolled Courses', value: currentUser.enrolledCourses?.length || 0, icon: BookOpen, color: 'from-purple-500 to-fuchsia-500' },
    { label: 'Classes Attended', value: '12/24', icon: Calendar, color: 'from-blue-500 to-cyan-500' },
    { label: 'Projects Completed', value: '3', icon: Award, color: 'from-pink-500 to-orange-500' },
    { label: 'Progress', value: '50%', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
  ];

  const upcomingClasses = [
    { title: 'AI Basics - Introduction to Machine Learning', date: 'Dec 23, 2025', time: '4:00 PM - 5:30 PM' },
    { title: 'Creative AI Tools Workshop', date: 'Dec 25, 2025', time: '4:00 PM - 5:30 PM' },
    { title: 'Build Your First AI Project', date: 'Dec 27, 2025', time: '4:00 PM - 5:30 PM' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-fuchsia-50">
      {/* Page Title (text-only; spaced below fixed navbar) */}
      <header className="mt-16 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">My Dashboard</h1>
              <p className="mt-1 text-slate-600 text-sm sm:text-base">Welcome back, {currentUser.name}!</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">{stat.value}</h3>
              <p className="text-slate-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content - Upcoming Classes */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100 mb-6"
            >
              <h2 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-purple-600" />
                Upcoming Classes
              </h2>
              <div className="space-y-4">
                {upcomingClasses.map((cls, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-fuchsia-50 border border-purple-200">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center text-white font-bold">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900">{cls.title}</h3>
                      <p className="text-sm text-slate-600">{cls.date} • {cls.time}</p>
                    </div>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold hover:bg-purple-700 transition">
                      Join
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* My Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100"
            >
              <h2 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-600" />
                My Projects
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {projects.slice(0, 4).map((project, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-white border-2 border-purple-100">
                    <div className="text-3xl mb-2">{project.emoji}</div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">{project.title}</h3>
                    <p className="text-xs text-slate-600">{project.grade}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Profile */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100 mb-6"
            >
              <h2 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                <User className="w-6 h-6 text-purple-600" />
                Profile
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Name</p>
                  <p className="text-sm font-semibold text-slate-900">{currentUser.name}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Email</p>
                  <p className="text-sm font-semibold text-slate-900">{currentUser.email}</p>
                </div>
                {currentUser.phone && (
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Phone</p>
                    <p className="text-sm font-semibold text-slate-900">{currentUser.phone}</p>
                  </div>
                )}
                {currentUser.location && (
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Location</p>
                    <p className="text-sm font-semibold text-slate-900">{currentUser.location}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs text-slate-500 mb-1">Member Since</p>
                  <p className="text-sm font-semibold text-slate-900">{currentUser.createdAt}</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-2xl p-6 shadow-lg text-white"
            >
              <h2 className="text-lg font-extrabold mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <Link href="/projects">
                  <button className="w-full px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-left transition">
                    Browse Projects
                  </button>
                </Link>
                <button className="w-full px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-left transition">
                  View Resources
                </button>
                <button className="w-full px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-left transition">
                  Contact Support
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
