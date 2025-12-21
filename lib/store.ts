import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Project, Testimonial, AdminUser } from './types';

// Initial Projects Data
const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Fire-Fighting Robot',
    grade: 'Grade 6',
    category: 'robotics',
    caption: '"This student used AI to plan, design, and optimize the model."',
    description: 'A fully functional fire-fighting robot prototype that can detect heat sources and spray water to extinguish small fires.',
    imageSrc: null,
    emoji: '🤖',
    featured: true,
    createdAt: '2024-01-15',
    studentName: 'Arjun K.',
  },
  {
    id: '2',
    title: 'Drone Prototype',
    grade: 'Grade 7',
    category: 'robotics',
    caption: '"AI helped him understand aerodynamics and testing concepts."',
    description: 'Custom-built drone with AI-assisted flight patterns and obstacle detection.',
    imageSrc: null,
    emoji: '✈️',
    featured: true,
    createdAt: '2024-02-10',
    studentName: 'Priya M.',
  },
  {
    id: '3',
    title: 'Arduino Coding Model',
    grade: 'Grade 8',
    category: 'coding',
    caption: '"AI taught him coding logic step-by-step."',
    description: 'Interactive Arduino project with sensors and LED displays programmed from scratch.',
    imageSrc: null,
    emoji: '💻',
    featured: true,
    createdAt: '2024-03-05',
    studentName: 'Rahul S.',
  },
  {
    id: '4',
    title: 'Smart Safety Project',
    grade: 'Grade 5',
    category: 'science',
    caption: '"A complete school exhibition model powered by AI explanations."',
    description: 'Smart home safety system that alerts parents when kids are home alone.',
    imageSrc: null,
    emoji: '🏠',
    featured: true,
    createdAt: '2024-03-20',
    studentName: 'Ananya R.',
  },
  {
    id: '5',
    title: 'Human Dummy Research',
    grade: 'Grade 9',
    category: 'science',
    caption: '"AI-assisted research on crash safety for advanced presentation."',
    description: 'Detailed research project on crash test dummies and automotive safety.',
    imageSrc: null,
    emoji: '🔬',
    featured: true,
    createdAt: '2024-04-01',
    studentName: 'Vikram P.',
  },
  {
    id: '6',
    title: '"The Space Turtle" Storybook',
    grade: 'Grade 5',
    category: 'story',
    caption: '"Wrote the story, generated character art, and formatted the book using AI tools."',
    description: 'A beautiful illustrated storybook about a turtle who dreams of exploring space.',
    imageSrc: null,
    emoji: '🐢',
    featured: true,
    createdAt: '2024-04-15',
    studentName: 'Meera K.',
  },
  {
    id: '7',
    title: 'AI Art Gallery',
    grade: 'Grade 4',
    category: 'art',
    caption: '"Created stunning digital art pieces using AI tools with creative direction."',
    description: 'A collection of AI-assisted digital artworks exploring various themes.',
    imageSrc: null,
    emoji: '🎨',
    featured: false,
    createdAt: '2024-05-01',
    studentName: 'Sanya L.',
  },
  {
    id: '8',
    title: 'Music Composition App',
    grade: 'Grade 8',
    category: 'music',
    caption: '"Built a simple app that helps compose music using AI suggestions."',
    description: 'An interactive music creation tool that generates melodies.',
    imageSrc: null,
    emoji: '🎵',
    featured: false,
    createdAt: '2024-05-15',
    studentName: 'Dev A.',
  },
  {
    id: '9',
    title: 'Puzzle Adventure Game',
    grade: 'Grade 7',
    category: 'game',
    caption: '"Designed game mechanics and levels with AI assistance."',
    description: 'A puzzle-based adventure game with multiple levels and challenges.',
    imageSrc: null,
    emoji: '🎮',
    featured: false,
    createdAt: '2024-06-01',
    studentName: 'Rohan T.',
  },
];

// Initial Testimonials Data
const initialTestimonials: Testimonial[] = [
  {
    id: '1',
    type: 'video',
    videoSrc: 'https://res.cloudinary.com/di98qhrpu/video/upload/v1766146752/Testimonial-three_w0jrjs.mp4',
    author: 'Student Testimonial 1',
    rating: 5,
    featured: true,
    createdAt: '2024-01-01',
  },
  {
    id: '2',
    type: 'video',
    videoSrc: 'https://res.cloudinary.com/di98qhrpu/video/upload/v1766144351/Testimonial-two_pr7z6d.mp4',
    author: 'Student Testimonial 2',
    rating: 5,
    featured: true,
    createdAt: '2024-01-02',
  },
  {
    id: '3',
    type: 'video',
    videoSrc: 'https://res.cloudinary.com/di98qhrpu/video/upload/v1766144343/Testimonial-one_rbjmsn.mp4',
    author: 'Student Testimonial 3',
    rating: 5,
    featured: true,
    createdAt: '2024-01-03',
  },
  {
    id: '4',
    type: 'text',
    quote: '"My son now uses his tablet for creating instead of gaming."',
    author: 'Parent',
    location: 'Whitefield',
    rating: 5,
    featured: true,
    createdAt: '2024-02-01',
  },
  {
    id: '5',
    type: 'text',
    quote: '"My daughter made her school project with AI — unbelievable!"',
    author: 'Parent',
    location: 'Koramangala',
    rating: 5,
    featured: true,
    createdAt: '2024-02-15',
  },
  {
    id: '6',
    type: 'text',
    quote: '"This is the first course that made screen time useful."',
    author: 'Parent',
    location: 'Indiranagar',
    rating: 5,
    featured: true,
    createdAt: '2024-03-01',
  },
];

// Admin User (default credentials - in production, use environment variables and proper auth)
const defaultAdmin: AdminUser = {
  id: '1',
  email: 'admin@padhai.com',
  password: 'admin123', // In production, this should be hashed
  name: 'Admin User',
  role: 'admin',
};

interface AppState {
  // Projects
  projects: Project[];
  addProject: (project: Omit<Project, 'id' | 'createdAt'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  
  // Testimonials
  testimonials: Testimonial[];
  addTestimonial: (testimonial: Omit<Testimonial, 'id' | 'createdAt'>) => void;
  updateTestimonial: (id: string, testimonial: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;
  
  // Auth
  isAuthenticated: boolean;
  currentUser: AdminUser | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Projects
      projects: initialProjects,
      addProject: (project) => {
        const newProject: Project = {
          ...project,
          id: Date.now().toString(),
          createdAt: new Date().toISOString().split('T')[0],
        };
        set((state) => ({ projects: [...state.projects, newProject] }));
      },
      updateProject: (id, updatedProject) => {
        set((state) => ({
          projects: state.projects.map((p) =>
            p.id === id ? { ...p, ...updatedProject } : p
          ),
        }));
      },
      deleteProject: (id) => {
        set((state) => ({
          projects: state.projects.filter((p) => p.id !== id),
        }));
      },

      // Testimonials
      testimonials: initialTestimonials,
      addTestimonial: (testimonial) => {
        const newTestimonial: Testimonial = {
          ...testimonial,
          id: Date.now().toString(),
          createdAt: new Date().toISOString().split('T')[0],
        };
        set((state) => ({ testimonials: [...state.testimonials, newTestimonial] }));
      },
      updateTestimonial: (id, updatedTestimonial) => {
        set((state) => ({
          testimonials: state.testimonials.map((t) =>
            t.id === id ? { ...t, ...updatedTestimonial } : t
          ),
        }));
      },
      deleteTestimonial: (id) => {
        set((state) => ({
          testimonials: state.testimonials.filter((t) => t.id !== id),
        }));
      },

      // Auth
      isAuthenticated: false,
      currentUser: null,
      login: (email, password) => {
        if (email === defaultAdmin.email && password === defaultAdmin.password) {
          set({ isAuthenticated: true, currentUser: defaultAdmin });
          return true;
        }
        return false;
      },
      logout: () => {
        set({ isAuthenticated: false, currentUser: null });
      },
    }),
    {
      name: 'padhai-storage',
      partialize: (state) => ({
        projects: state.projects,
        testimonials: state.testimonials,
        isAuthenticated: state.isAuthenticated,
        currentUser: state.currentUser,
      }),
    }
  )
);
