import React from 'react';
import { motion } from 'framer-motion';

interface PhilosophyProps {
  currentT: {
    philosophy: string;
    roles: string[];
  };
}

const Philosophy: React.FC<PhilosophyProps> = ({ currentT }) => {
  return (
    <section className="relative z-10 py-32 md:py-48 px-6 md:px-12 max-w-5xl mx-auto text-center border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel p-12 md:p-24 rounded-sm border-gold/10 group hover:border-gold/30 transition-all duration-1000 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl md:text-5xl leading-tight font-light text-gray-200 group-hover:text-white transition-colors duration-700 relative z-10"
        >
          {currentT.philosophy}
        </motion.p>
        
        <div className="mt-16 md:mt-24 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-[10px] md:text-xs text-gray-500 tracking-[0.4em] uppercase relative z-10">
          {currentT.roles.map((role: string, index: number) => (
            <React.Fragment key={role}>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                className={index === currentT.roles.length - 1 ? "text-gold font-bold" : ""}
              >
                {role}
              </motion.span>
              {index < currentT.roles.length - 1 && (
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                  className="w-1 h-1 bg-white/20 rounded-full" 
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Philosophy;
