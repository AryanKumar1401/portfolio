'use client';

import { motion } from 'framer-motion';
import { SkillCategory } from '../../types';
import { fadeInUp, cardHover } from '../../lib/animations';

interface SkillCardProps {
  skillCategory: SkillCategory;
}

export const SkillCard = ({ skillCategory }: SkillCardProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={cardHover}
      className="bg-[#FFFAF0] p-6 rounded-lg shadow-md transition-all"
    >
      <h3 className="text-2xl font-semibold mb-6 font-poppins text-[#FF6B6B]">
        {skillCategory.name}
      </h3>
      <div className="flex flex-wrap gap-4">
        {skillCategory.icons.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
          >
            <skill.icon size={20} className="text-[#4ECDC4]" />
            <span className="font-merriweather">{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
