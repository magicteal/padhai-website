export type ProjectCategory = 
  | 'robotics'
  | 'coding'
  | 'art'
  | 'science'
  | 'story'
  | 'game'
  | 'music'
  | 'all';

export type GradeLevel = 
  | 'Grade 3-4'
  | 'Grade 5-6'
  | 'Grade 7-8'
  | 'Grade 9-10'
  | 'all';

export interface Project {
  id: string;
  title: string;
  grade: string;
  category: ProjectCategory;
  caption: string;
  description?: string;
  imageSrc?: string | null;
  emoji: string;
  featured: boolean;
  createdAt: string;
  studentName?: string;
}

export interface Testimonial {
  id: string;
  type: 'video' | 'text';
  videoSrc?: string;
  quote?: string;
  author: string;
  location?: string;
  rating: number;
  featured: boolean;
  createdAt: string;
}

export interface AdminUser {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'editor';
}

export const PROJECT_CATEGORIES: { value: ProjectCategory; label: string; emoji: string }[] = [
  { value: 'all', label: 'All Projects', emoji: '🌟' },
  { value: 'robotics', label: 'Robotics', emoji: '🤖' },
  { value: 'coding', label: 'Coding', emoji: '💻' },
  { value: 'art', label: 'Art & Design', emoji: '🎨' },
  { value: 'science', label: 'Science', emoji: '🔬' },
  { value: 'story', label: 'Storytelling', emoji: '📖' },
  { value: 'game', label: 'Game Design', emoji: '🎮' },
  { value: 'music', label: 'Music', emoji: '🎵' },
];

export const GRADE_LEVELS: { value: GradeLevel; label: string }[] = [
  { value: 'all', label: 'All Grades' },
  { value: 'Grade 3-4', label: 'Grade 3-4' },
  { value: 'Grade 5-6', label: 'Grade 5-6' },
  { value: 'Grade 7-8', label: 'Grade 7-8' },
  { value: 'Grade 9-10', label: 'Grade 9-10' },
];
