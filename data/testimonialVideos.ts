import videos from './testimonialVideos.json';

// Export as an array for simple iteration
export const testimonialVideosArray: string[] = videos;

// Named mapping for clarity across the app (six entries)
export const testimonialVideos: Record<string, string> = {
  'testimonial-four': videos[0],
  'testimonial-five': videos[1],
  'testimonial-six': videos[2],
  'testimonial-three': videos[3],
  'testimonial-two': videos[4],
  'testimonial-one': videos[5],
};

export default testimonialVideosArray;

// Map names to poster image paths (SVG thumbnails placed in public/images/testimonials)
export const testimonialPosters: Record<string, string> = {
  'testimonial-four': '/images/testimonials/testimonial-four.svg',
  'testimonial-five': '/images/testimonials/testimonial-five.svg',
  'testimonial-six': '/images/testimonials/testimonial-six.svg',
  'testimonial-three': '/images/testimonials/testimonial-three.svg',
  'testimonial-two': '/images/testimonials/testimonial-two.svg',
  'testimonial-one': '/images/testimonials/testimonial-one.svg',
};
