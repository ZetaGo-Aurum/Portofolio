import React from 'react';
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
    <section id="projects" className="relative z-10 pt-32 pb-0 border-t border-white/5 bg-background/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
        <div className="lux-reveal">
          <h2 className="text-4xl md:text-8xl font-cinzel text-stroke leading-tight uppercase">
            {currentT.worksTitle} <br/> 
            <i className="text-white normal-case font-light" style={{WebkitTextStroke: '0px'}}>{currentT.worksTitleItalic}</i>
          </h2>
        </div>
      </div>

      <Carousel projects={projects} />
      
      <div className="h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};

export default Projects;
