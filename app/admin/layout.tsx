"use client";
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { 
  LayoutDashboard, 
  FolderKanban, 
  MessageSquareQuote,
  LogOut,
  Menu,
  X,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isAuthenticated = useAppStore((s) => s.isAuthenticated);
  const currentUser = useAppStore((s) => s.currentUser);
  const logout = useAppStore((s) => s.logout);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isAdminLoginRoute = pathname === '/admin/login';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Read persisted auth/role to avoid redirect while store rehydrates
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

    if (persistedAuth && persistedRole === 'admin' && (!isAuthenticated || currentUser?.role !== 'admin')) {
      return; // skip redirect until store catches up
    }

    if (!isAuthenticated || currentUser?.role !== 'admin') {
      router.replace('/login');
    }
  }, [mounted, isAuthenticated, currentUser, router]);

  if (isAdminLoginRoute) {
    return children;
  }
  if (!mounted || !isAuthenticated || currentUser?.role !== 'admin') {
    return null;
  }

  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, emoji: '📊' },
    { href: '/admin/projects', label: 'Projects', icon: FolderKanban, emoji: '🎨' },
    { href: '/admin/testimonials', label: 'Testimonials', icon: MessageSquareQuote, emoji: '💬' },
    { href: '/admin/users', label: 'Users', icon: MessageSquareQuote, emoji: '👥' },
  ];

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-700 to-fuchsia-700 px-4 py-3 flex items-center justify-between">
        <Link href="/admin" className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-white" />
          <span className="text-white font-bold">PadhAI Admin</span>
        </Link>
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-white rounded-lg hover:bg-white/10 transition"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Sidebar */}
      <AnimatePresence>
        {(sidebarOpen || typeof window !== 'undefined' && window.innerWidth >= 1024) && (
          <>
            {/* Mobile Overlay */}
            {sidebarOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 bg-black/50 z-40"
                onClick={() => setSidebarOpen(false)}
              />
            )}
            
            <motion.aside 
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed top-0 left-0 bottom-0 w-64 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 z-50 lg:z-30 flex flex-col"
            >
              {/* Logo */}
              <div className="p-6 border-b border-white/10">
                <Link href="/admin" className="flex items-center gap-3" onClick={() => setSidebarOpen(false)}>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h1 className="text-white font-bold">PadhAI</h1>
                    <p className="text-white/50 text-xs">Admin Panel</p>
                  </div>
                </Link>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link 
                      key={item.href} 
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <motion.div
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                          isActive 
                            ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/30' 
                            : 'text-white/70 hover:bg-white/10 hover:text-white'
                        }`}
                        whileHover={{ x: isActive ? 0 : 5 }}
                      >
                        <span className="text-xl">{item.emoji}</span>
                        <span className="font-medium">{item.label}</span>
                        {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                      </motion.div>
                    </Link>
                  );
                })}
              </nav>

              {/* User Section */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center gap-3 mb-4 px-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-400 flex items-center justify-center text-white font-bold">
                    {currentUser?.name?.charAt(0) || 'A'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm truncate">{currentUser?.name}</p>
                    <p className="text-white/50 text-xs truncate">{currentUser?.email}</p>
                  </div>
                </div>
                <motion.button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 text-white/70 hover:bg-red-500/20 hover:text-red-400 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-medium">Sign Out</span>
                </motion.button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen pt-16 lg:pt-0">
        <div className="p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
