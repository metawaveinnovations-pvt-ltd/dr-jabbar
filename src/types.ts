export interface TreatmentService {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  category: 'Braces' | 'Cosmetic' | 'Surgical' | 'General';
  iconName: string; // Refers to Lucide icon
  duration: string;
  recovery: string;
  faq: { q: string; a: string };
}

export interface TimelineEvent {
  year: string;
  title: string;
  institution: string;
  description: string;
  type: 'academic' | 'experience' | 'credential';
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  age: number;
  treatmentType: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  problem: string;
  solution: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age?: number;
  role: string;
  rating: number;
  comment: string;
  treatment: string;
  image: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  status: 'Pending' | 'Confirmed';
  createdAt: string;
}
