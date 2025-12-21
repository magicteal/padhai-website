import React from 'react';
import { Quote, Star } from 'lucide-react';

type SectionVariant = 'white' | 'light' | 'dark' | 'brand';

const Section: React.FC<{
  id?: string;
  className?: string;
  variant?: SectionVariant;
  children: React.ReactNode;
}> = ({ id, className = '', variant = 'white', children }) => {
  const variants: Record<SectionVariant, string> = {
    white: 'bg-white',
    light: 'bg-brand-50',
    dark: 'bg-slate-900 text-white',
    brand: 'bg-brand-700 text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 relative overflow-hidden ${variants[variant]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">{children}</div>
    </section>
  );
};

const TESTIMONIAL_VIDEOS = [
  'https://res.cloudinary.com/di98qhrpu/video/upload/v1766146752/Testimonial-three_w0jrjs.mp4',
  'https://res.cloudinary.com/di98qhrpu/video/upload/v1766144351/Testimonial-two_pr7z6d.mp4',
  'https://res.cloudinary.com/di98qhrpu/video/upload/v1766144343/Testimonial-one_rbjmsn.mp4',
];

const PARENT_REVIEWS = [
  {
    quote: '"My son now uses his tablet for creating instead of gaming."',
    author: 'Parent, Whitefield',
  },
  {
    quote: '"My daughter made her school project with AI — unbelievable!"',
    author: 'Parent, Koramangala',
  },
  {
    quote: '"This is the first course that made screen time useful."',
    author: 'Parent, Indiranagar',
  },
];

export default function TestimonialsSection() {
  return (
    <Section id="testimonials" variant="light">
      <div className="text-center mb-10">
        <div className="inline-block mb-2">
          <span className="text-4xl">💬</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold leading-tight mb-3 bg-gradient-to-r from-[var(--brand)] to-[#7c3aed] bg-clip-text text-transparent">
          What Parents & Kids Say
        </h2>
        <p className="text-xl text-slate-700 font-bold">
          ⭐ Trusted by Parents. Loved by Kids! ⭐
        </p>
      </div>

      {/* Kid video testimonials */}
      <div className="mb-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-3xl">🎥</span>
          <h3 className="text-2xl font-extrabold text-slate-900">What Kids Are Saying</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 justify-items-center">
          {TESTIMONIAL_VIDEOS.map((src, i) => (
            <div key={i} className="w-full max-w-xs">
              <video
                src={src}
                controls
                playsInline
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-[1.5rem] shadow-xl border-3 border-white bg-slate-50"
                aria-label={`Kid testimonial video ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Parent review cards */}
      <div className="mb-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-3xl">📝</span>
          <h3 className="text-2xl font-extrabold text-slate-900">What Parents Are Saying</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-5 justify-items-center">
          {PARENT_REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className={`relative w-full max-w-sm bg-white/95 p-6 rounded-2xl shadow-xl border-2 border-white/80 hover:scale-105 transition-transform ${
                idx === 1 ? 'md:-translate-y-8 z-20' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-500">— {review.author}</p>
                  </div>

                  <p className="text-slate-900 font-semibold text-base mt-3 leading-relaxed">{review.quote}</p>
                </div>
              </div>

              {/* long tail centered at bottom */}
              <span
                aria-hidden
                style={{
                  position: 'absolute',
                  right: '48px',
                  bottom: '-36px',
                  width: 0,
                  height: 0,
                  borderLeft: '36px solid transparent',
                  borderRight: '36px solid transparent',
                  borderTop: '36px solid rgba(255,255,255,0.95)'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Community badge */}
      <div className="text-center">
        <div className="inline-block px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-100 via-violet-100 to-indigo-100 shadow-xl border-3 border-white">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="text-4xl">👩‍👩‍👧</span>
            <div className="text-left">
              <p className="text-slate-900 font-extrabold text-lg">Supported by 13,000+ Bangalore Moms</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
