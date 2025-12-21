"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { href: "#pricing", label: "Pricing"},
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 shadow-lg shadow-purple-500/20' 
          : 'bg-gradient-to-r from-purple-600 to-violet-600'
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
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
                <Sparkles className="w-4 h-4 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity animate-sparkle" />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Primary navigation">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    className="relative px-3 py-2 lg:px-4 text-white font-medium hover:text-white/90 transition-all group text-sm lg:text-base"
                  >
                    <span className="flex items-center gap-1">
                      <span className="hidden lg:inline">{link.emoji}</span>
                      {link.label}
                    </span>
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
              <Link href="/admin/login">
                <motion.button 
                  className="px-4 py-2 lg:px-5 rounded-full font-semibold border-2 border-white text-white bg-transparent hover:bg-white/10 transition text-sm lg:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Log in
                </motion.button>
              </Link>
              <motion.button 
                className="px-4 py-2 lg:px-5 rounded-full font-semibold bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700 transition shadow-lg text-sm lg:text-base"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Sign up ✨
              </motion.button>
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
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600">
              {/* Decorative Elements */}
              <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" />
              <div className="absolute bottom-40 left-10 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
              
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
                        <span className="text-3xl">{link.emoji}</span>
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
                  <Link href="/admin/login" onClick={() => setIsOpen(false)} className="block">
                    <button className="w-full px-6 py-4 rounded-2xl font-bold text-lg border-2 border-white text-white bg-transparent hover:bg-white/10 transition">
                      Log in
                    </button>
                  </Link>
                  <button className="w-full px-6 py-4 rounded-2xl font-bold text-lg bg-white text-purple-600 hover:bg-yellow-300 transition shadow-xl">
                    Sign up ✨
                  </button>
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
