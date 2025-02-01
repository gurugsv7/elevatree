export interface User {
  _id: string;
  email: string;
  fullName: string;
  role: 'user' | 'mentor' | 'admin';
  bio?: string;
  avatarUrl?: string;
  currentRole?: string;
  educationLevel?: string;
  interests?: string[];
  skills?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Mentor {
  _id: string;
  userId: string;
  specializations: string[];
  yearsOfExperience: number;
  company: string;
  linkedinUrl?: string;
  hourlyRate: number;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CareerPath {
  _id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  educationRequirements: string[];
  salaryRange: {
    min: number;
    max: number;
    currency: string;
  };
  industry: string;
  growthPotential: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Resource {
  _id: string;
  title: string;
  content: string;
  type: 'blog' | 'success_story' | 'guide' | 'webinar';
  authorId: string;
  tags: string[];
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}