import React from 'react';
import type { JSX } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaJs, FaChrome } from 'react-icons/fa';
import { SiD3Dotjs, SiTailwindcss, SiReact, SiReacthookform } from 'react-icons/si';

interface Project {
  title: string;
  type: 'Website' | 'App' | 'Extension';
  description: string;
  videoUrl: string;
  logo: string;
  techStack: { name: string; icon: JSX.Element }[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: 'Graphx',
    type: 'Website',
    description: 'A beautiful and interactive charting & graphing platform for visual data presentation with real-time updates and customizable themes.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    logo: 'https://img.icons8.com/ios-filled/100/combo-chart--v1.png',
    techStack: [
      { name: 'React', icon: <SiReact className="text-blue-500" /> },
      { name: 'D3.js', icon: <SiD3Dotjs className="text-orange-500" /> },
      { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> }
    ],
    liveUrl: 'https://yourdomain.com/graphx',
    githubUrl: 'https://github.com/yourname/graphx',
  },
  {
    title: 'Tasko',
    type: 'App',
    description: 'Tasko is a cross-platform mobile app for managing your daily tasks with animated insights, reminders, and team collaboration features.',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    logo: 'https://img.icons8.com/ios-filled/100/task.png',
    techStack: [
      { name: 'React Native', icon: <FaReact className="text-blue-400" /> },
      { name: 'Reanimated', icon: <SiReact className="text-purple-500" /> },
      { name: 'Formik', icon: <SiReacthookform className="text-blue-600" /> }
    ],
    liveUrl: 'https://yourdomain.com/tasko',
    githubUrl: 'https://github.com/yourname/tasko',
  },
  {
    title: 'Form Filler',
    type: 'Extension',
    description: 'A browser extension that automatically fills forms with dummy data for developers and testers with customizable templates.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    logo: 'https://img.icons8.com/ios-filled/100/contract.png',
    techStack: [
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'Chrome API', icon: <FaChrome className="text-green-500" /> },
      { name: 'Manifest V3', icon: <FaChrome className="text-blue-500" /> }
    ],
    liveUrl: 'https://chromewebstore.com/form-filler',
    githubUrl: 'https://github.com/yourname/form-filler',
  },
  {
    title: 'LinkSaver',
    type: 'Extension',
    description: 'A simple Chrome extension to save, tag, and search your favorite links directly from the browser with sync across devices.',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    logo: 'https://img.icons8.com/ios-filled/100/link.png',
    techStack: [
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'Chrome API', icon: <FaChrome className="text-green-500" /> }
    ],
    liveUrl: 'https://chromewebstore.com/linksaver',
    githubUrl: 'https://github.com/yourname/linksaver',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Section heading */}
      <div className="text-center mb-20 z-10 relative">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-blue-600">Projects</span>
        </motion.h1>
        <motion.p 
          className="text-gray-500 dark:text-gray-400 mt-2 text-base md:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A showcase of my best work across web, apps, and extensions with modern technologies
        </motion.p>
      </div>

      {/* Vertical timeline line */}
      <div className="absolute left-1/2 h-[calc(100%-180px)] top-36 bottom-0 transform -translate-x-1/2 z-0 overflow-hidden">
        <motion.div 
          className="w-[3px] h-full bg-gradient-to-b from-blue-600 to-purple-600"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        />
      </div>

      <div className="max-w-7xl mx-auto space-y-40 relative z-10">
        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className="relative flex flex-col md:flex-row items-center justify-between gap-10"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring", 
                damping: 10,
                stiffness: 100 
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              {/* Horizontal connector line */}
              <motion.div
                className={`hidden md:block absolute top-12 h-[2px] w-1/2 bg-gradient-to-r ${isLeft ? 'left-1/2 from-blue-600 to-transparent' : 'right-1/2 from-transparent to-purple-600'}`}
                initial={{ width: 0 }}
                whileInView={{ width: '50%' }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />

              {/* Center icon */}
              <motion.div 
                className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10,
                  delay: 0.3
                }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-600 shadow-xl flex items-center justify-center hover:shadow-blue-500/20 hover:border-blue-500 transition-all duration-300">
                  <img src={project.logo} alt="logo" className="w-10 h-10 object-contain" />
                </div>
              </motion.div>

              {/* Project content */}
              <div
                className={`flex flex-col w-full md:w-[45%] mt-20 md:mt-0 ${
                  isLeft ? 'md:mr-auto md:items-start md:text-left' : 'md:ml-auto md:items-end md:text-right'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-400 tracking-wide">
                    {project.type}
                  </h3>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg w-full">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    {project.techStack.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="flex items-center gap-1.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        {tech.icon}
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>

                  <div className={`flex flex-wrap gap-3 mt-6 ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm shadow-lg transition-all"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink />
                      Visit Live
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-300 px-5 py-2.5 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.45 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub />
                      View Code
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
