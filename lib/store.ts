import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Project, Testimonial, User } from './types';
// Video testimonials are handled via static assets in the marketing site.

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

// Initial Parent Testimonials Data
const initialTestimonials: Testimonial[] = [
  {
    id: '4',
    quote: '"My son now uses his tablet for creating instead of gaming."',
    author: 'Parent',
    location: 'Whitefield',
    rating: 5,
    featured: true,
    imageSrc: null,
    createdAt: '2024-02-01',
  },
  {
    id: '5',
    quote: '"My daughter made her school project with AI — unbelievable!"',
    author: 'Parent',
    location: 'Koramangala',
    rating: 5,
    featured: true,
    imageSrc: null,
    createdAt: '2024-02-15',
  },
  {
    id: '6',
    quote: '"This is the first course that made screen time useful."',
    author: 'Parent',
    location: 'Indiranagar',
    rating: 5,
    featured: true,
    imageSrc: null,
    createdAt: '2024-03-01',
  },
];

// Admin User (default credentials - in production, use environment variables and proper auth)
const defaultAdmin: User = {
  id: 'admin-1',
  email: 'admin@padhai.com',
  password: 'admin123', // In production, this should be hashed
  name: 'Admin User',
  role: 'admin',
  createdAt: '2024-01-01',
};

// Initial users (includes admin + some sample users)
const initialUsers: User[] = [
  defaultAdmin,
  {
    id: 'user-1',
    email: 'parent1@example.com',
    password: 'user123',
    name: 'Rajesh Kumar',
    role: 'user',
    createdAt: '2024-02-15',
    phone: '+91 98765 43210',
    location: 'Whitefield, Bangalore',
    enrolledCourses: ['AI Foundation Course'],
  },
  {
    id: 'user-2',
    email: 'parent2@example.com',
    password: 'user123',
    name: 'Priya Sharma',
    role: 'user',
    createdAt: '2024-03-01',
    phone: '+91 98765 43211',
    location: 'Koramangala, Bangalore',
    enrolledCourses: ['AI Foundation Course'],
  },
  {
    id: 'user-3',
    email: 'parent3@example.com',
    password: 'user123',
    name: 'test user3',
    role: 'user',
    createdAt: '2024-03-03',
    phone: '+91 98765 43211',
    location: 'Koramangala, Bangalore',
    enrolledCourses: ['AI Foundation Course'],
  },
];

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
  
  // Users
  users: User[];
  addUser: (user: Omit<User, 'id' | 'createdAt'>) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
  
  // Auth
  isAuthenticated: boolean;
  currentUser: User | null;
  login: (email: string, password: string) => boolean;
  setCurrentUser: (user: User) => void;
  signup: (email: string, password: string, name: string, phone?: string, location?: string) => boolean;
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

      // Users
      users: initialUsers,
      addUser: (user) => {
        const newUser: User = {
          ...user,
          id: `user-${Date.now()}`,
          createdAt: new Date().toISOString().split('T')[0],
        };
        set((state) => ({ users: [...state.users, newUser] }));
      },
      updateUser: (id, updatedUser) => {
        set((state) => ({
          users: state.users.map((u) =>
            u.id === id ? { ...u, ...updatedUser } : u
          ),
        }));
      },
      deleteUser: (id) => {
        // Prevent deleting admin
        const user = get().users.find(u => u.id === id);
        if (user?.role === 'admin') {
          return;
        }
        set((state) => ({
          users: state.users.filter((u) => u.id !== id),
        }));
      },

      // Auth
      isAuthenticated: false,
      currentUser: null,
      login: (email, password) => {
        const user = get().users.find(u => u.email === email && u.password === password);
        if (user) {
          set({ isAuthenticated: true, currentUser: user });
          return true;
        }
        return false;
      },
      setCurrentUser: (user) => {
        set({ isAuthenticated: true, currentUser: user });
      },
      signup: (email, password, name, phone, location) => {
        // Check if email already exists
        const existingUser = get().users.find(u => u.email === email);
        if (existingUser) {
          return false;
        }
        
        const newUser: User = {
          id: `user-${Date.now()}`,
          email,
          password,
          name,
          role: 'user',
          createdAt: new Date().toISOString().split('T')[0],
          phone,
          location,
          enrolledCourses: [],
        };
        
        set((state) => ({ 
          users: [...state.users, newUser],
          isAuthenticated: true,
          currentUser: newUser
        }));
        return true;
      },
      logout: () => {
        set({ isAuthenticated: false, currentUser: null });
      },
    }),
    {
      name: 'padhai-storage',
      version: 3,
      migrate: (persistedState, _version) => {
        const state = persistedState as {
          projects?: Project[];
          testimonials?: Testimonial[];
          users?: User[];
          isAuthenticated?: boolean;
          currentUser?: User | null;
        } | undefined;
        if (!state || !state.users) {
          return {
            projects: initialProjects,
            testimonials: initialTestimonials,
            users: initialUsers,
            isAuthenticated: false,
            currentUser: null,
          };
        }
        const byEmail = new Map<string, User>(state.users.map((u) => [u.email, u]));
        for (const seed of initialUsers) {
          if (!byEmail.has(seed.email)) {
            byEmail.set(seed.email, seed);
          }
        }
        const migratedTestimonials = Array.isArray(state.testimonials)
          ? (state.testimonials as any[])
              .map((t) => {
                // v2 format supported video/text; keep only text-like testimonials
                if (t?.type === 'video') return null;
                const quote = typeof t?.quote === 'string' ? t.quote : '';
                const author = typeof t?.author === 'string' ? t.author : 'Parent';
                const location = typeof t?.location === 'string' ? t.location : undefined;
                const rating = typeof t?.rating === 'number' ? t.rating : 5;
                const featured = typeof t?.featured === 'boolean' ? t.featured : true;
                const imageSrc = typeof t?.imageSrc === 'string' ? t.imageSrc : null;
                const createdAt = typeof t?.createdAt === 'string' ? t.createdAt : new Date().toISOString().split('T')[0];
                const id = typeof t?.id === 'string' ? t.id : Date.now().toString();
                if (!quote) return null;
                return { id, quote, author, location, rating, featured, imageSrc, createdAt } as Testimonial;
              })
              .filter(Boolean) as Testimonial[]
          : initialTestimonials;

        return {
          projects: state.projects ?? initialProjects,
          testimonials: migratedTestimonials.length > 0 ? migratedTestimonials : initialTestimonials,
          users: Array.from(byEmail.values()),
          isAuthenticated: state.isAuthenticated ?? false,
          currentUser: state.currentUser ?? null,
        };
      },
      partialize: (state) => ({
        projects: state.projects,
        testimonials: state.testimonials,
        users: state.users,
        isAuthenticated: state.isAuthenticated,
        currentUser: state.currentUser,
      }),
    }
  )
);
