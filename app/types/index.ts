import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  name: string;
  icons: Skill[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  website?: string;
}
