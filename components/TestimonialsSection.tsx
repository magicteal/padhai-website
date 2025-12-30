"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Video, MessageSquare, User, Users, Bot, Sparkles, Heart, Lightbulb, Brain, Rocket, Palette, Loader2 } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import testimonialVideosArray from '../data/testimonialVideos';
import { testimonialVideos as testimonialVideosMap, testimonialPosters } from '../data/testimonialVideos';

export default function TestimonialsSection() {
  const { testimonials, testimonialsLoading, fetchTestimonials, projects, projectsLoading, fetchProjects } = useAppStore();
  const [hydrated, setHydrated] = React.useState(false);
  const [activePage, setActivePage] = React.useState(0);
  // Responsive page size (fix mobile carousel not advancing when <=3 items)
  const [pageSize, setPageSize] = React.useState(3);
  const touchStartXRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    setHydrated(true);
    // Fetch testimonials and projects from MongoDB on mount
    fetchTestimonials();
    fetchProjects();
  }, [fetchTestimonials, fetchProjects]);

  // Compute pageSize responsively and update on resize
  React.useEffect(() => {
    const computePageSize = (w: number) => {
      if (w < 640) return 1;      // sm
      if (w < 1024) return 2;     // md
      return 3;                   // lg+
    };
    const updatePageSize = () => setPageSize(computePageSize(window.innerWidth));
    updatePageSize();
    window.addEventListener('resize', updatePageSize);
    return () => window.removeEventListener('resize', updatePageSize);
  }, []);

  // Touch swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.changedTouches[0]?.clientX ?? null;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0]?.clientX ?? null;
    const startX = touchStartXRef.current;
    touchStartXRef.current = null;
    if (startX == null || endX == null) return;
    const dx = endX - startX;
    const threshold = 40;
    if (Math.abs(dx) > threshold) {
      if (dx < 0) goNext();
      else goPrev();
    }
  };

  const kidKeys = ['testimonial-five', 'testimonial-four', 'testimonial-one'];
  const videoList = kidKeys.map((k) => ({
    src: testimonialVideosMap[k] || testimonialVideosArray[0] || '',
    poster: testimonialPosters[k] || `/images/testimonials/${k}.svg`,
  }));

  const featuredParents = testimonials.filter((t) => t.featured);
  const parentTestimonials = featuredParents.length > 0 ? featuredParents : testimonials;
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
      
      {/* Mobile decorations */}
      <motion.div
        className="absolute top-6 right-4 md:hidden"
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" }, scale: { repeat: Infinity, duration: 2.5 } }}
      >
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-70" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-3 md:hidden"
        animate={{ y: [0, -6, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Heart className="w-3 h-3 text-pink-400 fill-pink-400 opacity-60" />
      </motion.div>
      <motion.div
        className="absolute top-1/4 left-2 md:hidden"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <Sparkles className="w-4 h-4 text-purple-400 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-3 md:hidden"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      >
        <Bot className="w-4 h-4 text-purple-500 opacity-40" />
      </motion.div>
      
      {/* Desktop Floating AI Tool Icons */}
      <motion.div
        className="absolute top-20 left-[5%] hidden xl:block"
        animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <div className="w-13 h-13 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl shadow-lg flex items-center justify-center p-2.5">
          <Bot className="w-6 h-6 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-40 right-[6%] hidden lg:block"
        animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl shadow-lg flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-[4%] hidden xl:block"
        animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 6, delay: 1 }}
      >
        <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-24 right-[8%] hidden lg:block"
        animate={{ rotate: [0, 10, -10, 0], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4.5 }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg shadow-md flex items-center justify-center">
          <Brain className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-[3%] hidden xl:block"
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, delay: 0.7 }}
      >
        <div className="w-11 h-11 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center">
          <Palette className="w-5 h-5 text-white" />
        </div>
      </motion.div>
      
      {/* Kid-friendly floating shapes */}
      <motion.div
        className="absolute top-16 left-[18%] hidden lg:block"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" }, scale: { repeat: Infinity, duration: 2 } }}
      >
        <Star className="w-7 h-7 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[10%] hidden xl:block"
        animate={{ y: [0, -10, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Heart className="w-6 h-6 text-red-400 fill-red-400 drop-shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute top-1/4 right-[15%] hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, delay: 0.5 }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl shadow-lg flex items-center justify-center">
          <Rocket className="w-6 h-6 text-white" />
        </div>
      </motion.div>
      
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
            {videoList.map((item, i) => (
              <motion.div 
                key={item.src || i}
                className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[240px]"
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
                  <div className="relative w-full bg-slate-100" style={{ aspectRatio: '9 / 16' }}>
                    <video
                      src={item.src}
                      poster={item.poster}
                      controls
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                      aria-label={`Kid testimonial video ${i + 1}`}
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-purple-900/80 to-transparent">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
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
                key={hydrated ? `page-${safeActivePage}-size-${pageSize}` : 'loading'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {!hydrated ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {Array.from({ length: pageSize }).map((_, idx) => (
                      <div key={idx} className="card-kid p-5 sm:p-6 h-56 sm:h-60 relative">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {pageItems.map((item) => (
                      <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="card-kid p-5 sm:p-6 relative min-h-56 sm:min-h-60"
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
                  <div className="card-kid p-5 sm:p-6 relative min-h-56 sm:min-h-60">
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
                  <div className="relative w-full rounded-md mb-2 overflow-hidden bg-slate-100" style={{ aspectRatio: '9 / 16' }}>
                    <img src={p.imageSrc} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="relative w-full rounded-md mb-2 overflow-hidden bg-gradient-to-br from-purple-200 to-pink-200" style={{ aspectRatio: '9 / 16' }}>
                    <div className="absolute inset-0 flex items-center justify-center text-3xl">{hydrated ? p.emoji : ''}</div>
                  </div>
                )}
                <div className="text-sm font-bold text-slate-800 mt-2 text-center">{hydrated ? p.title : ''}</div>
                <div className="text-xs text-slate-500">{hydrated ? `by ${p.studentName}` : ''}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
