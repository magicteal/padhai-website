"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Video, MessageSquare, User, Users } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import testimonialVideosArray from '../data/testimonialVideos';

export default function TestimonialsSection() {
  const { testimonials, projects } = useAppStore();
  const [hydrated, setHydrated] = React.useState(false);
  const [activePage, setActivePage] = React.useState(0);
  React.useEffect(() => {
    setHydrated(true);
  }, []);

  const videoList = testimonialVideosArray && testimonialVideosArray.length > 0
    ? testimonialVideosArray.slice(0, 3)
    : [];

  const featuredParents = testimonials.filter((t) => t.featured);
  const parentTestimonials = featuredParents.length > 0 ? featuredParents : testimonials;
  const pageSize = 3;
  const pageCount = Math.max(1, Math.ceil(parentTestimonials.length / pageSize));
  const safeActivePage = Math.min(activePage, pageCount - 1);
  const pageStart = safeActivePage * pageSize;
  const pageItems = parentTestimonials.slice(pageStart, pageStart + pageSize);

  const goPrev = () => {
    if (parentTestimonials.length === 0) return;
    setActivePage((p) => (p - 1 + pageCount) % pageCount);
  };
  const goNext = () => {
    if (parentTestimonials.length === 0) return;
    setActivePage((p) => (p + 1) % pageCount);
  };

  return (
    <section 
      id="testimonials" 
      className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-300/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.div 
            className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-100 flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <MessageSquare className="w-8 h-8 text-purple-600" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3 gradient-text">
            What Parents & Kids Say
          </h2>
          <p className="text-base sm:text-xl text-slate-700 font-medium flex items-center justify-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            Trusted by Parents. Loved by Kids!
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
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
            <motion.div 
              className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Video className="w-5 h-5 text-purple-600" />
            </motion.div>
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
                    poster={`/images/testimonials/testimonial-${['four','five','six'][i]}.svg`}
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
            <motion.div 
              className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center"
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <MessageSquare className="w-5 h-5 text-purple-600" />
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">What Parents Are Saying</h3>
          </div>
          
          <div className="w-full max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="p-2 rounded-xl bg-white border-2 border-purple-100 text-slate-700 hover:bg-slate-50 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <motion.div
                key={hydrated ? `page-${safeActivePage}` : 'loading'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full"
              >
                {!hydrated ? (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
                    {Array.from({ length: 3 }).map((_, idx) => (
                      <div key={idx} className="card-kid p-5 sm:p-6 h-40 relative">
                        <span
                          aria-hidden
                          className="absolute -bottom-3 left-10"
                          style={{
                            width: 0,
                            height: 0,
                            borderLeft: '14px solid transparent',
                            borderRight: '14px solid transparent',
                            borderTop: '14px solid white',
                            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ) : pageItems.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
                    {pageItems.map((item) => (
                      <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="card-kid p-5 sm:p-6 relative"
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <motion.div className="flex-shrink-0" whileHover={{ rotate: 5 }}>
                            {item.imageSrc ? (
                              <img
                                src={item.imageSrc}
                                alt={item.author}
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border"
                              />
                            ) : (
                              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white">
                                <User className="w-5 h-5 sm:w-6 sm:h-6" />
                              </div>
                            )}
                          </motion.div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <div className="flex items-center gap-1">
                                {[...Array(item.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <p className="text-xs sm:text-sm text-slate-500">{item.author}{item.location ? `, ${item.location}` : ''}</p>
                            </div>
                            <p className="text-slate-800 font-semibold text-sm sm:text-base mt-3 leading-relaxed">
                              {item.quote}
                            </p>
                          </div>
                        </div>

                        {/* Speech-bubble tail */}
                        <span
                          aria-hidden
                          className="absolute -bottom-3 left-10"
                          style={{
                            width: 0,
                            height: 0,
                            borderLeft: '14px solid transparent',
                            borderRight: '14px solid transparent',
                            borderTop: '14px solid white',
                            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="card-kid p-5 sm:p-6 relative">
                    <p className="text-center text-slate-500">No testimonials yet</p>
                    <span
                      aria-hidden
                      className="absolute -bottom-3 left-10"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: '14px solid transparent',
                        borderRight: '14px solid transparent',
                        borderTop: '14px solid white',
                        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
                      }}
                    />
                  </div>
                )}
              </motion.div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial"
                className="p-2 rounded-xl bg-white border-2 border-purple-100 text-slate-700 hover:bg-slate-50 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {hydrated && pageCount > 1 && (
              <div className="mt-4 flex items-center justify-center gap-2">
                {Array.from({ length: pageCount }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActivePage(i)}
                    aria-label={`Go to testimonials set ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all ${i === safeActivePage ? 'w-6 bg-purple-600' : 'w-2.5 bg-purple-200'}`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Community Badge */}
        {/* Small project gallery: student creations */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <h3 className="text-center text-xl sm:text-2xl font-extrabold mb-6">Student Project Gallery</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {(hydrated
              ? projects.slice(0, 8)
              : Array.from({ length: 8 }).map((_, idx) => ({
                  id: `placeholder-${idx}`,
                  title: '',
                  studentName: '',
                  emoji: '',
                  imageSrc: null,
                }))).map((p: any) => (
              <div key={p.id} className="rounded-xl overflow-hidden bg-white shadow-md p-3 flex flex-col items-center">
                {p.imageSrc ? (
                  <img src={p.imageSrc} alt={p.title} className="w-full h-28 object-cover rounded-md mb-2" />
                ) : (
                  <div className="w-full h-28 rounded-md bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center text-3xl">{hydrated ? p.emoji : ''}</div>
                )}
                <div className="text-sm font-bold text-slate-800 mt-2 text-center">{hydrated ? p.title : ''}</div>
                <div className="text-xs text-slate-500">{hydrated ? `by ${p.studentName}` : ''}</div>
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
            className="inline-block px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white shadow-lg border-2 border-purple-100"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Users className="w-6 h-6 text-purple-600" />
              </motion.div>
              <div className="text-center sm:text-left">
                <p className="text-slate-900 font-extrabold text-base sm:text-lg">
                  Supported by <span className="gradient-text">13,000+</span> Families
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
