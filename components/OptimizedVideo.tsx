"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  'aria-label'?: string;
}

/**
 * Optimized Video Component with lazy loading and click-to-play
 * Only loads video when in viewport or when user clicks
 */
export default function OptimizedVideo({
  src,
  poster,
  className = '',
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
  playsInline = true,
  preload = 'none',
  'aria-label': ariaLabel,
}: OptimizedVideoProps) {
  const [isInView, setIsInView] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Don't disconnect - we want to track visibility for analytics
          }
        });
      },
      {
        rootMargin: '100px', // Start loading 100px before visible
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    if (!hasClicked) {
      setHasClicked(true);
      setIsLoading(true);
      
      // Play video after it loads
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.warn('Video play failed:', err);
        });
      }
    }
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  // Only load video source when in view
  const shouldLoadVideo = isInView && (hasClicked || autoPlay);
  const showPlayButton = !hasClicked && !autoPlay && poster;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Poster/Thumbnail with Play Button Overlay */}
      {showPlayButton && (
        <div
          className="absolute inset-0 cursor-pointer group z-10"
          onClick={handleClick}
        >
          {poster && (
            <img
              src={poster}
              alt="Video thumbnail"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 group-hover:bg-white transition-colors flex items-center justify-center shadow-2xl">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
      )}

      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
          <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Actual Video Element */}
      <video
        ref={videoRef}
        className={className}
        controls={controls && hasClicked}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        preload={shouldLoadVideo ? 'metadata' : 'none'}
        poster={poster}
        onLoadedData={handleLoadedData}
        aria-label={ariaLabel}
      >
        {shouldLoadVideo && <source src={src} type="video/mp4" />}
      </video>
    </div>
  );
}
