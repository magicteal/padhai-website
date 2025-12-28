import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Project, Testimonial, User } from './types';

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
  projectsLoading: boolean;
  fetchProjects: () => Promise<void>;
  addProject: (project: Omit<Project, 'id' | 'createdAt'>) => Promise<void>;
  updateProject: (id: string, project: Partial<Project>) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  
  // Testimonials
  testimonials: Testimonial[];
  testimonialsLoading: boolean;
  fetchTestimonials: () => Promise<void>;
  addTestimonial: (testimonial: Omit<Testimonial, 'id' | 'createdAt'>) => Promise<void>;
  updateTestimonial: (id: string, testimonial: Partial<Testimonial>) => Promise<void>;
  deleteTestimonial: (id: string) => Promise<void>;
  
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
      // ============ PROJECTS (MongoDB) ============
      projects: [],
      projectsLoading: false,

      fetchProjects: async () => {
        set({ projectsLoading: true });
        try {
          const res = await fetch('/api/projects');
          const json = await res.json();
          if (json.success) {
            // Transform MongoDB format to frontend format
            const transformedProjects = json.data.map((p: any) => ({
              id: p.id || p._id,
              title: p.title,
              grade: p.grade || p.batchMonth || 'Grade 5',
              category: p.category?.toLowerCase().replace(' ', '-') || 'other',
              caption: p.caption || p.description?.substring(0, 100) || '',
              description: p.description,
              imageSrc: p.imageSrc || p.thumbnail?.url || null,
              emoji: p.emoji || '💡',
              featured: p.featured || false,
              createdAt: p.createdAt ? new Date(p.createdAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
              studentName: p.studentName,
            }));
            set({ projects: transformedProjects });
          }
        } catch (error) {
          console.error('Failed to fetch projects:', error);
        } finally {
          set({ projectsLoading: false });
        }
      },

      addProject: async (project) => {
        try {
          // Transform to MongoDB format
          const mongoProject = {
            title: project.title,
            description: project.description || project.caption,
            category: 'Other', // Map frontend categories to MongoDB enum
            studentName: project.studentName || 'Student',
            studentAge: 10,
            batchMonth: project.grade || 'January 2025',
            thumbnail: {
              url: project.imageSrc || 'https://via.placeholder.com/400x300',
              publicId: 'placeholder',
            },
            featured: project.featured || false,
            approved: true,
            // Store frontend-specific fields for retrieval
            grade: project.grade,
            caption: project.caption,
            emoji: project.emoji,
            imageSrc: project.imageSrc,
          };

          const res = await fetch('/api/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mongoProject),
          });
          const json = await res.json();
          if (json.success) {
            // Add to local state with frontend format
            const newProject: Project = {
              id: json.data.id || json.data._id,
              title: project.title,
              grade: project.grade || 'Grade 5',
              category: project.category || 'other',
              caption: project.caption || '',
              description: project.description,
              imageSrc: project.imageSrc || null,
              emoji: project.emoji || '💡',
              featured: project.featured || false,
              createdAt: new Date().toISOString().split('T')[0],
              studentName: project.studentName,
            };
            set((state) => ({ projects: [...state.projects, newProject] }));
          }
        } catch (error) {
          console.error('Failed to add project:', error);
        }
      },

      updateProject: async (id, updatedProject) => {
        try {
          const res = await fetch(`/api/projects/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedProject),
          });
          const json = await res.json();
          if (json.success) {
            set((state) => ({
              projects: state.projects.map((p) =>
                p.id === id ? { ...p, ...updatedProject } : p
              ),
            }));
          }
        } catch (error) {
          console.error('Failed to update project:', error);
        }
      },

      deleteProject: async (id) => {
        try {
          const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
          const json = await res.json();
          if (json.success) {
            set((state) => ({ projects: state.projects.filter((p) => p.id !== id) }));
          }
        } catch (error) {
          console.error('Failed to delete project:', error);
        }
      },

      // ============ TESTIMONIALS (MongoDB) ============
      testimonials: [],
      testimonialsLoading: false,

      fetchTestimonials: async () => {
        set({ testimonialsLoading: true });
        try {
          const res = await fetch('/api/testimonials');
          const json = await res.json();
          if (json.success) {
            // Transform MongoDB format to frontend format
            const transformedTestimonials = json.data.map((t: any) => ({
              id: t.id || t._id,
              quote: t.quote || t.testimonialText || '',
              author: t.author || t.parentName || 'Parent',
              location: t.location,
              rating: t.rating || 5,
              featured: t.featured || false,
              imageSrc: t.imageSrc || t.image?.url || null,
              createdAt: t.createdAt ? new Date(t.createdAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
            }));
            set({ testimonials: transformedTestimonials });
          }
        } catch (error) {
          console.error('Failed to fetch testimonials:', error);
        } finally {
          set({ testimonialsLoading: false });
        }
      },

      addTestimonial: async (testimonial) => {
        try {
          // Transform to MongoDB format
          const mongoTestimonial = {
            parentName: testimonial.author || 'Parent',
            childName: 'Child',
            childAge: 10,
            location: testimonial.location || 'Bangalore',
            testimonialText: testimonial.quote,
            rating: testimonial.rating || 5,
            featured: testimonial.featured || false,
            approved: true,
            // Store frontend-specific fields
            quote: testimonial.quote,
            author: testimonial.author,
            imageSrc: testimonial.imageSrc,
            image: testimonial.imageSrc ? {
              url: testimonial.imageSrc,
              publicId: 'uploaded',
            } : undefined,
          };

          const res = await fetch('/api/testimonials', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mongoTestimonial),
          });
          const json = await res.json();
          if (json.success) {
            const newTestimonial: Testimonial = {
              id: json.data.id || json.data._id,
              quote: testimonial.quote,
              author: testimonial.author || 'Parent',
              location: testimonial.location,
              rating: testimonial.rating || 5,
              featured: testimonial.featured || false,
              imageSrc: testimonial.imageSrc || null,
              createdAt: new Date().toISOString().split('T')[0],
            };
            set((state) => ({ testimonials: [...state.testimonials, newTestimonial] }));
          }
        } catch (error) {
          console.error('Failed to add testimonial:', error);
        }
      },

      updateTestimonial: async (id, updatedTestimonial) => {
        try {
          // Transform to MongoDB format if needed
          const mongoUpdate: any = { ...updatedTestimonial };
          if (updatedTestimonial.quote) {
            mongoUpdate.testimonialText = updatedTestimonial.quote;
          }
          if (updatedTestimonial.author) {
            mongoUpdate.parentName = updatedTestimonial.author;
          }

          const res = await fetch(`/api/testimonials/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mongoUpdate),
          });
          const json = await res.json();
          if (json.success) {
            set((state) => ({
              testimonials: state.testimonials.map((t) =>
                t.id === id ? { ...t, ...updatedTestimonial } : t
              ),
            }));
          }
        } catch (error) {
          console.error('Failed to update testimonial:', error);
        }
      },

      deleteTestimonial: async (id) => {
        try {
          const res = await fetch(`/api/testimonials/${id}`, { method: 'DELETE' });
          const json = await res.json();
          if (json.success) {
            set((state) => ({ testimonials: state.testimonials.filter((t) => t.id !== id) }));
          }
        } catch (error) {
          console.error('Failed to delete testimonial:', error);
        }
      },

      // ============ USERS (local for now) ============
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

      // ============ AUTH ============
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
      version: 4,
      migrate: (persistedState, version) => {
        // Handle migration from older versions
        const state = persistedState as {
          users?: User[];
          isAuthenticated?: boolean;
          currentUser?: User | null;
        } | undefined;
        
        // Return migrated state with only auth data
        return {
          users: state?.users ?? initialUsers,
          isAuthenticated: state?.isAuthenticated ?? false,
          currentUser: state?.currentUser ?? null,
        };
      },
      partialize: (state) => ({
        // Only persist auth-related data, not projects/testimonials (those come from MongoDB)
        users: state.users,
        isAuthenticated: state.isAuthenticated,
        currentUser: state.currentUser,
      }),
    }
  )
);
