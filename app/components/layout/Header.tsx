'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold font-poppins text-[#FF6B6B]">Aryan Kumar</h1>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#2D3436]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-poppins font-medium">
          <a href="#about" className="hover:text-[#FF6B6B] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#FF6B6B] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#FF6B6B] transition-colors">Projects</a>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t py-4"
        >
          <div className="flex flex-col space-y-4 items-center font-poppins font-medium">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF6B6B] transition-colors">About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF6B6B] transition-colors">Skills</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF6B6B] transition-colors">Projects</a>
          </div>
        </motion.nav>
      )}
    </header>
  );
};
