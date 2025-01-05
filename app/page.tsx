"use client";
import React from 'react';
import {
  Code,
  Github,
  Linkedin,
  Mail,
  FileText,
  Server,
  Database,
  Layout,
  Zap,
  Globe,
  Box,
  Cloud,
  Link,
  Trophy
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
      { name: 'Express', icon: Server }
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
      { name: 'TensorFlow', icon: Box },
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
    description: '🏆 Best Product Award @ J&J Hackathon \'24: HireVision is a transparent interview platform that streamlines the HireVue process by providing detailed candidate reviews with pros, cons, and summaries. It also delivers behavioral analytics across applicants, helping companies visualize hiring patterns and optimize recruitment strategies.',
    technologies: ['TypeScript', 'Python', 'GPT-4', 'FastAPI', 'React', 'Tailwind CSS', 'Supabase', 'Prisma'],
    link: 'https://github.com/23spakkerakari/HireVision',
    website: 'https://www.canva.com/design/DAGWBja42Uw/OB7lXjmUI9obDXJgJ2LSxg/edit?utm_content=DAGWBja42Uw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'

  },
  {
    title: 'Pathway',
    description: '🏆 Runner Up (Beginner Track) @ Big Red Hacks \'24: Pathway is a community-driven mapping platform designed for disabled users, enabling them to discover and share accessibility information about various locations through an intuitive and inclusive interface.',
    technologies: ['TypeScript', 'Python', 'FastAPI', 'React', 'Tailwind CSS', 'Google Maps API'],
    link: 'https://github.com/jonathandlee/Pathway',

  }
];

const PortfolioPage = () => {
  return (
    <div className="bg-[#FFFAF0] min-h-screen text-[#2D3436]">
      {/* Manually added metadata since we can't use Next.js Head */}
      {typeof document !== 'undefined' && (
        <>
          <title>Aryan Kumar - Computer Science Portfolio</title>
          <meta name="description" content="Personal portfolio showcasing computer science projects and skills" />
        </>
      )}

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-md">
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
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-5xl font-bold mb-6 font-poppins leading-tight text-[#2D3436]">
              Computer Science Student & <span className="text-[#FF6B6B]">Software Developer</span>
            </h2>
            <p className="mb-8 font-merriweather leading-relaxed text-gray-700">
              Hi there! I'm Aryan Kumar, a student at Cornell University, majoring in Computer Science and minoring in AI. I'm a passionate tech enthusiast who thrives at the intersection of innovation, creativity, and problem-solving. My journey at Cornell has taken me from creating a platform with Cornell GreenClub to optimize transportation routes and reduce carbon emissions to developing AI path-planning algorithms for autonomous boats as part of the Cornell Autoboat Project Team. Outside of coding, you'll find me hiking scenic trails, running around lakes, or playing the piano.  I’m driven by the belief that technology is more than just tools—it’s a force for shaping a sustainable, smarter future. Let’s connect and create something extraordinary together!
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex space-x-4 items-center">
                <a href="#" aria-label="GitHub" className="hover:text-[#FF6B6B] transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-[#FF6B6B] transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" aria-label="Email" className="hover:text-[#FF6B6B] transition-colors">
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
          </div>
          <div className="hidden md:block">
            <div className="bg-blue-100 rounded-full w-64 h-64 mx-auto overflow-hidden">
              <img
                src="profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-[#2D3436]">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <div
                key={index}
                className="bg-[#FFFAF0] p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#FFFAF0]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-[#2D3436]">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#FF6B6B] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-poppins">Let's Connect</h2>
          <p className="text-xl mb-8 font-merriweather max-w-2xl mx-auto">
            Interested in collaborating or discussing potential opportunities?
            Feel free to reach out.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="bg-white text-[#FF6B6B] px-8 py-4 rounded-lg hover:bg-[#FFFAF0] transition-colors inline-flex items-center gap-2 font-poppins font-medium"
          >
            <Mail /> Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D3436] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center font-merriweather">
          <p>&copy; 2024 Your Name. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;