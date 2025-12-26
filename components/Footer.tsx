"use client";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Heart, Link2, BookOpen, Globe, Users } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      {/* decorative elements cleaned - removed fun wave for cleaner footer */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 pt-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <motion.img 
                src="/images/mainLogo.svg" 
                alt="PadhAi Club" 
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                whileHover={{ scale: 1.05 }}
              />
            </Link>
            <p className="text-white/80 text-sm mb-4 leading-relaxed max-w-xs mx-auto sm:mx-0">
              AI + Sanskar for the Next Generation. Bangalore's Favorite AI Foundation Course for Kids (Ages 5–15).
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-white/60 text-xs">
              <span className="px-2 py-1 rounded-full bg-white/10">Safe</span>
              <span className="px-2 py-1 rounded-full bg-white/10">Creative</span>
              <span className="px-2 py-1 rounded-full bg-white/10">Future-Ready</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-4 text-base sm:text-lg flex items-center gap-2 justify-center sm:justify-start">
              <Link2 className="w-4 h-4" /> Quick Links
            </h4>
            <ul className="space-y-2 text-center sm:text-left">
              {[
                { href: "#problem", label: "About Us" },
                { href: "#curriculum", label: "Curriculum" },
                { href: "#projects", label: "Student Projects" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#pricing", label: "Pricing" },
                { href: "#faq", label: "FAQ" },
              ].map((link, idx) => (
                <motion.li key={idx} whileHover={{ x: 5 }}>
                  <a href={link.href} className="text-white/80 hover:text-white transition text-sm flex items-center gap-2 justify-center sm:justify-start group">
                    <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full group-hover:scale-150 transition-transform" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-4 text-base sm:text-lg flex items-center gap-2 justify-center sm:justify-start">
              <Phone className="w-4 h-4" /> Contact Us
            </h4>
            <ul className="space-y-3 text-center sm:text-left">
              <li className="flex items-start gap-3 text-sm text-white/80 justify-center sm:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 text-purple-300" />
                <a href="mailto:hello@padhaiclub.com" className="hover:text-white transition">
                  hello@padhaiclub.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80 justify-center sm:justify-start">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 text-purple-300" />
                <a href="tel:+919876543210" className="hover:text-white transition">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 text-purple-300" />
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </motion.div>

          {/* Programs & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold mb-4 text-base sm:text-lg flex items-center gap-2 justify-center sm:justify-start">
              <BookOpen className="w-4 h-4" /> Our Programs
            </h4>
            <ul className="space-y-2 mb-6 text-center sm:text-left">
              {["AI Foundation Course", "Management Skills", "Creative Projects", "Live Mentorship"].map((item, idx) => (
                <li key={idx} className="text-white/80 text-sm flex items-center gap-2 justify-center sm:justify-start">
                  <span className="w-1.5 h-1.5 bg-purple-300 rounded-full"></span> {item}
                </li>
              ))}
            </ul>

            <h4 className="font-bold mb-3 text-sm flex items-center gap-2 justify-center sm:justify-start">
              <Globe className="w-4 h-4" /> Follow Us
            </h4>
            <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 hover:bg-purple-500 flex items-center justify-center transition-all touch-target"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-6 mt-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-xs sm:text-sm text-center sm:text-left flex items-center gap-1">
              © {new Date().getFullYear()} PadhAi Club. Made with <Heart className="w-4 h-4 text-pink-400 fill-pink-400" /> in Bangalore
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-white/60">
              <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms</Link>
            </div>
          </div>
          <p className="text-white/40 text-xs text-center mt-4 flex items-center justify-center gap-2">
            <Users className="w-4 h-4" />
            Trusted by 13,000+ Bangalore Parents
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
