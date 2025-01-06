"use client";
import { motion } from 'framer-motion';
import React from 'react';
import {
  Code,
  Github,
  Linkedin,
  Mail,
  Server,
  Database,
  Zap,
  Box,
  Cloud,
  Link,
} from 'lucide-react';

const skills = [
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

const projects = [
  {
    title: 'DataTool',
    description: 'datatool.tech is a generative AI platform for natural language data analysis. It allows users to upload datasets, clean them, and generate insightful visualizations. This tool leverages the power of GPT-4 for data cleaning and visualization tasks, providing an interactive and user-friendly experience.',
    technologies: ['React', 'Typescript', 'Tailwind CSS', 'GPT-4', 'Express', 'Node.js', 'Firebase', 'Stripe'],
    link: 'https://github.com/AryanKumar1401/data-tool-copy',
    website: 'https://datatool.tech'
  },
  {
    title: 'Asphalt',
    description: 'Developed a dynamic GIS-based platform with Cornell GreenClub, leveraging algorithms like the Traveling Salesman Problem and real-time data to optimize transportation routes, reduce carbon emissions by 30%, and drive sustainability initiatives in Tompkins County.',
    technologies: ['Python', 'Next.js', 'TypeScript', 'Tailwind CSS', 'OpenStreetMaps API', 'ArcGIS'],
    link: 'https://github.com/Cornell-GreenClub/asphalt',
    website: 'https://asphalt-gc.vercel.app/'
  },
  {
    title: 'HireVision',
    description: '🏆 Best Product Award @ J&J Hackathon \'24: HireVision is a transparent interview platform that streamlines \
    the HireVue process by providing detailed candidate reviews with pros, cons, and summaries. It also delivers behavioral analytics \
    across applicants, helping companies visualize hiring patterns and optimize recruitment strategies.',
    technologies: ['TypeScript', 'Python', 'GPT-4', 'FastAPI', 'React', 'Tailwind CSS', 'Supabase', 'Prisma'],
    link: 'https://github.com/23spakkerakari/HireVision',
    website: 'https://www.canva.com/design/DAGWBja42Uw/OB7lXjmUI9obDXJgJ2LSxg/edit?utm_content=DAGWBja42Uw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
  },
  {
    title: 'Pathway',
    description: '🏆 Best DEI Hack & Runner Up (Beginner Track) @ Big Red Hacks \'24: Pathway is a community-driven mapping platform \
     designed for disabled users, enabling them to discover and share accessibility information about various locations\
    through an intuitive and inclusive interface.',
    technologies: ['TypeScript', 'Python', 'FastAPI', 'React', 'Tailwind CSS', 'Google Maps API'],
    link: 'https://github.com/jonathandlee/Pathway',
  },
  {
    title: 'MBTI Personality Prediction with ML',
    description: 'Developed a machine learning model to predict MBTI personality types based on text data, leveraging NLP techniques \
    and algorithms like Logistic Regression and Naive Bayes for classification.',
    technologies: ['Python', 'scikit-learn', 'NLTK', 'spaCy', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    link: 'https://github.com/AryanKumar1401/MBTI-Personality-Prediction-using-ML',
  },
  {
    title: 'Momentum',
    description: ' Momentum is a minimalist productivity app I designed and developed to help users build and sustain meaningful habits. Inspired by the principles of Atomic Habits, the app empowers individuals to create small, actionable routines, track their progress, and reflect on their journey—all in one simple, intuitive interface.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/AryanKumar1401/Momentum',
  },
  {
    title: 'CardCamel - A Flashcard App in OCaml',
    description: 'A terminal-based flashcard study app designed for focused and efficient learning. Built with OCaml, it features customizable decks, randomized quizzes, interactive games, and progress tracking. CardCamel simplifies studying with an intuitive text-based interface, CSV import/export, and detailed performance analytics.'
    ,
    technologies: ['OCaml', 'Dune', 'ANSITerminal', 'OUnit'],
    link: 'https://github.coecis.cornell.edu/ak2488/CS3110_Final_Project',
  },
];

const PortfolioPage = () => {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardHover = {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#FFFAF0] min-h-screen text-[#2D3436]"
    >
      {/* Manually added metadata since we can't use Next.js Head */}
      {typeof document !== 'undefined' && (
        <>
          <title>Aryan Kumar - Computer Science Portfolio</title>
          <meta name="description" content="Personal portfolio showcasing computer science projects and skills" />
        </>
      )}

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-poppins text-[#FF6B6B]">Aryan Kumar</h1>
          <nav className="flex space-x-6 font-poppins font-medium">
            <a href="#about" className="hover:text-[#FF6B6B] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#FF6B6B] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#FF6B6B] transition-colors">Projects</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-20 mt-10">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6 font-poppins leading-tight text-[#2D3436]">
              Computer Science Student & <span className="text-[#FF6B6B]">Software Developer</span>
            </h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8 font-merriweather leading-relaxed text-gray-700"
            >
              Hi there! I'm Aryan Kumar, a student at Cornell University, majoring in Computer Science and minoring in AI. I'm a passionate tech enthusiast who thrives at the intersection of innovation, creativity, and problem-solving. My journey at Cornell has taken me from creating a platform with Cornell GreenClub to optimize transportation routes and reduce carbon emissions to developing AI path-planning algorithms for autonomous boats as part of the Cornell Autoboat Project Team. Outside of coding, you'll find me hiking scenic trails, running around lakes, or playing the piano.  I’m driven by the belief that technology is more than just tools—it’s a force for shaping a sustainable, smarter future. Let’s connect and create something extraordinary together!
            </motion.p>
            <div className="flex flex-col gap-6">
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
                  className="inline-flex items-center justify-center gap-2 bg-[#FF6B6B] text-white px-8 py-4 rounded-lg hover:bg-[#FF5252] transition-colors font-poppins font-medium text-lg shadow-lg hover:shadow-xl ml-4"
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
            className="hidden md:block"
          >
            <div className="bg-blue-100 rounded-full w-64 h-64 mx-auto overflow-hidden">
              <img
                src="profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-4"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-12 font-poppins text-[#2D3436]">
            Technical Skills
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={index}
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
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#FFFAF0]">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-4"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-12 font-poppins text-[#2D3436]">
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
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
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#FF6B6B] text-white py-20"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-poppins">Let's Connect</h2>
          <p className="text-xl mb-8 font-merriweather max-w-2xl mx-auto">
            Interested in collaborating or discussing potential opportunities?
            Feel free to reach out at ak2488 [at] cornell [dot] edu.
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#2D3436] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center font-merriweather">
          <p>&copy; 2024 Aryan Kumar.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default PortfolioPage;