import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Smartphone, Box, Monitor, Music } from 'lucide-react';

interface ExpertiseProps {
  currentT: {
    expertiseTitle: string;
    expertiseTitleItalic: string;
    exp1Title: string;
    exp1Desc: string;
    exp2Title: string;
    exp2Desc: string;
    exp3Title: string;
    exp3Desc: string;
  };
}

const Expertise: React.FC<ExpertiseProps> = ({ currentT }) => {
  return (
    <section id="expertise" className="relative z-10 py-32 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-8xl font-cinzel text-stroke leading-tight uppercase">
          {currentT.expertiseTitle} <br/> 
          <motion.i 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-white normal-case font-light" 
            style={{WebkitTextStroke: '0px'}}
          >
            {currentT.expertiseTitleItalic}
          </motion.i>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        {/* Item 1 */}
        <ExpertiseCard 
          icon={<><Terminal className="w-8 h-8" /><Shield className="w-8 h-8 text-gold" /></>}
          title={currentT.exp1Title}
          desc={currentT.exp1Desc}
          tags={['React', 'Node.js', 'Kali Linux']}
          index={0}
        />

        {/* Item 2 */}
        <ExpertiseCard 
          icon={<><Smartphone className="w-8 h-8" /><Box className="w-8 h-8 text-gold" /></>}
          title={currentT.exp2Title}
          desc={currentT.exp2Desc}
          tags={['Baileys WA', 'NPM Logic', 'Automation']}
          index={1}
        />

        {/* Item 3 */}
        <ExpertiseCard 
          icon={<><Monitor className="w-8 h-8" /><Music className="w-8 h-8 text-gold" /></>}
          title={currentT.exp3Title}
          desc={currentT.exp3Desc}
          tags={['UI/UX', 'Vector Art', 'FL Studio']}
          index={2}
        />
      </div>
    </section>
  );
};

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tags: string[];
  index: number;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon, title, desc, tags, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
    className="glass-panel p-10 md:p-12 group hover:border-gold/30 transition-all duration-700 relative overflow-hidden"
  >
    {/* Subtle animated border gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    
    <div className="flex gap-4 mb-10 text-gray-500 group-hover:text-gold transition-colors duration-500">
      {icon}
    </div>
    <h3 className="text-2xl md:text-3xl font-cinzel mb-6 text-white group-hover:text-gold transition-colors">{title}</h3>
    <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-8">
      {desc}
    </p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag: string) => (
        <span key={tag} className="text-[9px] tracking-widest uppercase text-gray-500 px-3 py-1 border border-white/5 bg-white/[0.02] group-hover:border-gold/20 transition-colors">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default Expertise;
