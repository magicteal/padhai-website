"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

type UserData = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Fetch current user on mount
  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch('/api/auth/me');
        const data = await response.json();
        if (data.success && data.user) {
          setCurrentUser(data.user);
          setIsAuthenticated(true);
        } else {
          setCurrentUser(null);
          setIsAuthenticated(false);
        }
      } catch {
        setCurrentUser(null);
        setIsAuthenticated(false);
      }
    }
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setCurrentUser(null);
      setIsAuthenticated(false);
      setIsOpen(false);
      router.push("/");
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/why-ai", label: "Why AI"},
    { href: "/course-details", label: "Course Details"},
    { href: "/projects", label: "Projects"},
    { href: "/pricing", label: "Pricing"},
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-purple-700 shadow-lg shadow-purple-900/20 text-white' 
          : 'bg-gradient-to-r from-purple-600 to-purple-700 text-white backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center gap-2 group">
                <motion.img
                  src="/images/mainLogo.svg"
                  alt="Padhai logo"
                  className="h-8 w-auto sm:h-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6" aria-label="Primary navigation">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    href={link.href} 
                    className="relative px-4 py-2 lg:px-5 text-white hover:text-white/90 font-medium transition-colors duration-300 group text-sm lg:text-base"
                  >
                    <span className="flex items-center gap-1">{link.label}</span>
                    <motion.span 
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white rounded-full group-hover:w-3/4 transition-all duration-300"
                      style={{ transform: 'translateX(-50%)' }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-2 lg:gap-3"
            >
              {!isAuthenticated ? (
                <>
                  <Link href="/login">
                    <motion.button 
                      className="px-4 py-2 lg:px-5 rounded-xl font-semibold border-2 border-white text-white bg-transparent hover:bg-white/10 transition text-sm lg:text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Login
                    </motion.button>
                  </Link>
                  <Link href="/signup">
                    <motion.button 
                      className="px-4 py-2 lg:px-5 rounded-xl font-semibold bg-white text-purple-600 hover:bg-purple-50 transition shadow-md shadow-purple-200 text-sm lg:text-base flex items-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </>
              ) : (
                <>
                  {currentUser?.role === "admin" ? (
                    <Link href="/admin">
                      <motion.button 
                        className="px-4 py-2 lg:px-5 rounded-xl font-semibold bg-white text-purple-600 hover:bg-purple-50 transition shadow-md text-sm lg:text-base"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Admin Dashboard
                      </motion.button>
                    </Link>
                  ) : (
                    <Link href="/dashboard">
                      <motion.button 
                        className="px-4 py-2 lg:px-5 rounded-xl font-semibold bg-white text-purple-600 hover:bg-purple-50 transition shadow-md text-sm lg:text-base"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        My Dashboard
                      </motion.button>
                    </Link>
                  )}
                  <motion.button 
                    onClick={handleLogout}
                    className="px-4 py-2 lg:px-5 rounded-xl font-semibold border-2 border-white text-white bg-transparent hover:bg-white/10 transition text-sm lg:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Logout
                  </motion.button>
                </>
              )}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-white rounded-xl hover:bg-white/10 transition touch-target"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
              {/* Decorative Elements */}
              <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-40 left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl" />
              
              <div className="flex flex-col h-full pt-20 px-6 pb-8">
                <nav className="flex-1 flex flex-col justify-center gap-4">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 text-white text-2xl font-bold py-4 px-6 rounded-2xl hover:bg-white/10 transition-all active:scale-95"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-3 mt-auto"
                >
                  {!isAuthenticated ? (
                    <>
                      <Link href="/login" onClick={() => setIsOpen(false)} className="block">
                        <button className="w-full px-6 py-4 rounded-2xl font-bold text-lg border-2 border-white text-white bg-transparent hover:bg-white/10 transition">
                          Login
                        </button>
                      </Link>
                      <Link href="/signup" onClick={() => setIsOpen(false)} className="block">
                        <button className="w-full px-6 py-4 rounded-2xl font-bold text-lg bg-white text-purple-600 hover:bg-purple-50 transition shadow-xl flex items-center justify-center gap-2">
                          Get Started
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </Link>
                    </>
                  ) : (
                    <>
                      {currentUser?.role === "admin" ? (
                        <Link href="/admin" onClick={() => setIsOpen(false)} className="block">
                          <button className="w-full px-6 py-4 rounded-2xl font-bold text-lg bg-white text-purple-600 hover:bg-purple-50 transition shadow-xl">
                            Admin Dashboard
                          </button>
                        </Link>
                      ) : (
                        <Link href="/dashboard" onClick={() => setIsOpen(false)} className="block">
                          <button className="w-full px-6 py-4 rounded-2xl font-bold text-lg bg-white text-purple-600 hover:bg-purple-50 transition shadow-xl">
                            My Dashboard
                          </button>
                        </Link>
                      )}
                      <button onClick={handleLogout} className="w-full px-6 py-4 rounded-2xl font-bold text-lg border-2 border-white text-white bg-transparent hover:bg-white/10 transition">
                        Logout
                      </button>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-14 sm:h-16" />
    </>
  );
}
