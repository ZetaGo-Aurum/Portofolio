import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '../ui/Carousel';
import { projects } from '../../content/projects';

interface ProjectsProps {
  currentT: {
    worksTitle: string;
    worksTitleItalic: string;
  };
}

const Projects: React.FC<ProjectsProps> = ({ currentT }) => {
  return (
    <section id="projects" className="relative z-10 pt-32 pb-0 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-8xl font-cinzel text-stroke leading-tight uppercase">
            {currentT.worksTitle} <br/> 
            <motion.i 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-white normal-case font-light" 
              style={{WebkitTextStroke: '0px'}}
            >
              {currentT.worksTitleItalic}
            </motion.i>
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Carousel projects={projects} />
      </motion.div>
      
      <div className="h-32 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
};

export default Projects;
