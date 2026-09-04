export interface SkillItem {
  id: string;
  name: string;
  subtitle: string;
  category: 'Frontend' | 'Programming' | 'Office Tool';
  icon: string;
  percentage: number;
  gradientClass: string;
  glowColor: string;
}

export interface ProjectItem {
  id: string;
  projectNumber: string;
  categoryTag: string;
  title: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  icon: string;
  accentColor: string;
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  tag: string;
  tagType: 'year' | 'type';
  icon: string;
  accentClass: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  instagram: string;
}
