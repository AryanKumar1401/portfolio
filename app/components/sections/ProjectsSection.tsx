'use client';

import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-20 bg-[#FFFAF0]">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto px-4"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-poppins text-[#2D3436]"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
