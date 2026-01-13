'use client';

import { motion } from 'framer-motion';

export const ContactSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#FF6B6B] text-white py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 font-poppins">Let's Connect</h2>
        <p className="text-lg md:text-xl mb-6 md:mb-8 font-merriweather max-w-2xl mx-auto px-4">
          Interested in collaborating or discussing potential opportunities?
          Feel free to reach out at ak2488 [at] cornell [dot] edu.
        </p>
      </div>
    </motion.section>
  );
};
