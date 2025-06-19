export interface Project {
  id: string;
  title: string;
  category: 'Sites web' | 'Identités graphiques';
  tags: string[];
  description: string;
  mainImage: string;
  secondaryImages: string[];
  websiteUrl?: string;
  achievements: string[];
  techStack: string[];
  relatedProjects: string[];
}

export interface Service {
  title: string;
  description: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  institution: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
} 