import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string;
}

interface CarouselProps {
  projects: Project[];
}

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-8 md:px-24">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative h-[450px] w-[280px] md:h-[600px] md:w-[500px] overflow-hidden bg-neutral-900 rounded-sm border border-white/5">
      <div
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-end p-8 bg-gradient-to-t from-black via-black/20 to-transparent">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">{project.tag}</p>
        <h3 className="font-cinzel text-3xl md:text-5xl text-white uppercase leading-none">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mt-4 font-light max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {project.description}
        </p>
        <button className="mt-6 flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-xs tracking-widest uppercase">
          View Project <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
