'use client';

import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import { SkillCard } from '../ui/SkillCard';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-20 bg-white">
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
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skillCategory, index) => (
            <SkillCard key={index} skillCategory={skillCategory} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
