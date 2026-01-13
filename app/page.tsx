"use client";

import { motion } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';

const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#FFFAF0] min-h-screen text-[#2D3436]"
    >
      <Header />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default PortfolioPage;
