"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import testimonialVideosArray from '../data/testimonialVideos';

export default function TestimonialsSection() {
  const { testimonials } = useAppStore();
  
  // Use centralized video list (show videos 4-6, 3 total) — falls back to store videos if empty
  const videoTestimonials = testimonials.filter(t => t.type === 'video' && t.featured);
  const videoList = testimonialVideosArray && testimonialVideosArray.length > 0
    ? testimonialVideosArray.slice(3, 6)
    : videoTestimonials.map(t => t.videoSrc).slice(0, 3);
  const textTestimonials = testimonials.filter(t => t.type === 'text' && t.featured);

  return (
    <section 
      id="testimonials" 
      className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-300/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-fuchsia-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.span 
            className="text-4xl sm:text-5xl inline-block mb-3"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            💬
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3 gradient-text">
            What Parents & Kids Say
          </h2>
          <p className="text-base sm:text-xl text-slate-700 font-bold">
            ⭐ Trusted by Parents. Loved by Kids! ⭐
          </p>
        </motion.div>

        {/* Kid Video Testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6">
            <motion.span 
              className="text-2xl sm:text-3xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🎥
            </motion.span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">What Kids Are Saying</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 justify-items-center">
            {videoList.map((src, i) => (
              <motion.div 
                key={src}
                className="w-full max-w-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div 
                  className="relative rounded-2xl sm:rounded-[1.5rem] overflow-hidden shadow-xl border-3 border-white bg-white"
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <video
                    src={src}
                    poster={`/images/testimonials/testimonial-${['three','two','one'][i]}.svg`}
                    controls
                    playsInline
                    className="w-full h-[240px] sm:h-[280px] md:h-[340px] object-cover bg-slate-100"
                    aria-label={`Kid testimonial video ${i + 1}`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-purple-900/80 to-transparent">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Parent Review Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6">
            <motion.span 
              className="text-2xl sm:text-3xl"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              📝
            </motion.span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">What Parents Are Saying</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 justify-items-center">
            {textTestimonials.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className={`relative w-full max-w-sm card-kid p-5 sm:p-6 ${
                  idx === 1 ? 'md:-translate-y-4 z-20' : ''
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 10 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-400 via-fuchsia-400 to-pink-400 flex items-center justify-center text-white text-lg sm:text-xl">
                      👩
                    </div>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500">— {review.author}, {review.location}</p>
                    </div>
                    <p className="text-slate-800 font-semibold text-sm sm:text-base mt-3 leading-relaxed">
                      {review.quote}
                    </p>
                  </div>
                </div>

                {/* Decorative tail */}
                <span
                  aria-hidden
                  className="hidden md:block absolute -bottom-4 left-1/2 -translate-x-1/2"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: '20px solid transparent',
                    borderRight: '20px solid transparent',
                    borderTop: '20px solid white',
                    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Badge */}
        {/* Small project gallery: student creations */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <h3 className="text-center text-xl sm:text-2xl font-extrabold mb-6">Student Project Gallery</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {useAppStore.getState().projects.slice(0, 8).map((p) => (
              <div key={p.id} className="rounded-xl overflow-hidden bg-white shadow-md p-3 flex flex-col items-center">
                {p.imageSrc ? (
                  <img src={p.imageSrc} alt={p.title} className="w-full h-28 object-cover rounded-md mb-2" />
                ) : (
                  <div className="w-full h-28 rounded-md bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center text-3xl">{p.emoji}</div>
                )}
                <div className="text-sm font-bold text-slate-800 mt-2 text-center">{p.title}</div>
                <div className="text-xs text-slate-500">by {p.studentName}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div 
            className="inline-block px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-purple-100 via-fuchsia-100 to-pink-100 shadow-xl border-3 border-white"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
              <motion.span 
                className="text-3xl sm:text-4xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                👩‍👩‍👧
              </motion.span>
              <div className="text-center sm:text-left">
                <p className="text-slate-900 font-extrabold text-base sm:text-lg">
                  Supported by <span className="gradient-text">13,000+</span> Bangalore Moms
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
