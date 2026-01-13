'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { particlesOptions } from '../../lib/particles';
import Image from 'next/image';

export const HeroSection = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };
    initializeParticles();
  }, []);

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20 mt-10 relative min-h-[600px]">
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        {init && (
          <Particles
            id="tsparticles"
            options={particlesOptions}
            className="w-full h-full"
          />
        )}
      </div>
      <div className="relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold mb-4 font-poppins leading-tight text-[#2D3436] flex items-center gap-2"
            >
              Hey there <motion.span
                animate={{ rotate: [0, 30, -30, 15, -15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                👋
              </motion.span>
            </motion.h2>
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold mb-6 font-poppins leading-tight text-[#2D3436]"
            >
              I'm a <span className="text-[#FF6B6B]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <ReactTyped
                    strings={[
                      "CS student.",
                      "Software Developer.",
                      "Lifelong Learner.",
                      "NYT games player.",
                    ]}
                    typeSpeed={50}
                    backSpeed={30}
                    backDelay={1500}
                    loop
                  />
                </motion.div>
              </span>
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8 font-merriweather leading-relaxed text-gray-700"
            >
              I'm Aryan, a Computer Science major and AI minor at Cornell University. I'm a passionate tech enthusiast who loves combining creativity and problem-solving to solve everyday problems. My interests are Artificial Intelligence (ML & NLP), Software Engineering, and Data Science. My journey at Cornell has taken me from creating a platform with Cornell GreenClub to optimize transportation routes and reduce carbon emissions to developing AI path-planning algorithms for autonomous boats as part of the Cornell Autoboat Project Team. When I'm not coding, you'll probably find me hiking scenic trails, running by the lake, watching anime or playing the piano.
            </motion.p>
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="flex space-x-4 items-center">
                <a href="https://github.com/AryanKumar1401/" aria-label="GitHub" className="hover:text-[#FF6B6B] transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/aryan-kumar-3434961aa/" aria-label="LinkedIn" className="hover:text-[#FF6B6B] transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:ak2488@cornell.edu" aria-label="Email" className="hover:text-[#FF6B6B] transition-colors">
                  <Mail size={24} />
                </a>
                <a
                  href="#projects"
                  className="w-full md:w-auto text-center inline-flex items-center justify-center gap-2 bg-[#FF6B6B] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-[#FF5252] transition-colors font-poppins font-medium text-base md:text-lg shadow-lg hover:shadow-xl"
                >
                  View Featured Projects
                  <Code size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="block order-1 md:order-2 mb-8 md:mb-0"
          >
            <div className="bg-blue-100 rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto overflow-hidden relative">
              <Image
                src="/profile.png"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
