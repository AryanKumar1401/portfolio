import {
  Code,
  Server,
  Database,
  Zap,
  Box,
  Cloud,
  Github,
} from 'lucide-react';
import { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    name: 'Programming Languages',
    icons: [
      { name: 'Python', icon: Code },
      { name: 'Java', icon: Code },
      { name: 'JavaScript', icon: Code },
      { name: 'TypeScript', icon: Code },
      { name: 'OCaml', icon: Code },
      { name: 'C++', icon: Code }
    ]
  },
  {
    name: 'Frameworks & Libraries',
    icons: [
      { name: 'React', icon: Box },
      { name: 'Node.js', icon: Server },
      { name: 'Flask', icon: Server },
      { name: 'Django', icon: Server },
      { name: 'FastAPI', icon: Zap },
      { name: 'Next.js', icon: Box },
      { name: 'Express', icon: Server },
      { name: 'TensorFlow', icon: Box },
      { name: 'React Native', icon: Box },
    ]
  },
  {
    name: 'Tools & Technologies',
    icons: [
      { name: 'Git', icon: Github },
      { name: 'AWS', icon: Cloud },
      { name: 'MongoDB', icon: Database },
      { name: 'Firebase', icon: Cloud },
      { name: 'Supabase', icon: Cloud },
      { name: 'PostgreSQL', icon: Database },
      { name: 'Postman', icon: Cloud }
    ]
  }
];
