import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#5b21b6] via-[#7c3aed] to-[#9810fa] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="text-center">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <a href="/" className="flex items-center gap-3">
                <img src="/images/mainLogo.svg" alt="PadhAi Club" className="w-20 h-20 object-contain" />
              </a>
            </div>
            <p className="text-white/80 text-sm mb-4 leading-relaxed mx-auto max-w-xs text-center">
              AI + Sanskar for the Next Generation. Bangalore's Favorite AI Foundation Course for Kids (Ages 5–15).
            </p>
            <p className="text-white/60 text-xs text-center">
              Safe · Creative · Future-Ready
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#problem" className="text-white/80 hover:text-white transition text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#curriculum" className="text-white/80 hover:text-white transition text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/80 hover:text-white transition text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
                  Student Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-white transition text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/80 hover:text-white transition text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/80 hover:text-white transition text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/80">
                <Mail className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:hello@padhaiclub.com" className="hover:text-white transition">
                    hello@padhaiclub.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <Phone className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+919876543210" className="hover:text-white transition">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  Bangalore, Karnataka<br />
                  India
                </div>
              </li>
            </ul>
          </div>

          {/* Programs & Social */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Our Programs</h4>
            <ul className="space-y-3 mb-6">
              <li className="text-white/80 text-sm">AI Foundation Course</li>
              <li className="text-white/80 text-sm">Management Skills</li>
              <li className="text-white/80 text-sm">Creative Projects</li>
              <li className="text-white/80 text-sm">Live Mentorship</li>
            </ul>

            <h4 className="font-semibold mb-3 text-sm">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition backdrop-blur-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition backdrop-blur-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition backdrop-blur-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition backdrop-blur-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} PadhAi Club. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Refund Policy
              </a>
            </div>
          </div>
          <p className="text-white/40 text-xs text-center mt-4">
            Trusted by 13,000+ Bangalore Parents · Supported by Hema's Community
          </p>
        </div>
      </div>
    </footer>
  );
}
