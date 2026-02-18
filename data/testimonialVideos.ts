import videos from './testimonialVideos.json';

// For local media storage, videos are served directly from /uploads directory
// They should be pre-optimized before upload to save storage space
// Videos are stored in /public/uploads/videos/

const safeVideos = (videos || []).filter(Boolean);

export const getTestimonialKeyFromUrl = (url: string): string => {
  try {
    const last = url.split('/').pop() || '';
    return last.split('?')[0]?.replace(/\.[^/.]+$/, '')?.toLowerCase() || '';
  } catch {
    return '';
  }
};

// Export as an array for simple iteration
export const testimonialVideosArray: string[] = safeVideos;

// Named mapping for clarity across the app (keyed by filename, e.g. "akshara")
export const testimonialVideos: Record<string, string> = Object.fromEntries(
  safeVideos
    .map((url) => [getTestimonialKeyFromUrl(url), url] as const)
    .filter(([key]) => Boolean(key))
);

export default testimonialVideosArray;

// Poster images are served from /public/images/testimonials/{name}.svg
export const testimonialPosters: Record<string, string> = Object.fromEntries(
  Object.keys(testimonialVideos).map((key) => [key, `/images/testimonials/${key}.svg`])
);
