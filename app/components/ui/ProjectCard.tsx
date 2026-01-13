'use client';

import { motion } from 'framer-motion';
import { Code, Link } from 'lucide-react';
import { Project } from '../../types';
import { fadeInUp, cardHover } from '../../lib/animations';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={cardHover}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-4 font-poppins text-[#2D3436]">
          {project.title}
        </h3>
        <p className="font-merriweather text-gray-700 mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-[#4ECDC4]/10 text-[#4ECDC4] px-3 py-1 rounded-full text-sm font-poppins"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6B6B] hover:text-[#FF5252] flex items-center gap-2 font-poppins font-medium"
          >
            <Code size={16} />
            Code
          </a>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4ECDC4] hover:text-[#3dbdb5] flex items-center gap-2 font-poppins font-medium"
            >
              <Link size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
