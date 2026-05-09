import React from 'react';
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
      <div className="lux-reveal mb-24 text-center md:text-left">
        <h2 className="text-5xl md:text-8xl font-cinzel text-stroke leading-tight uppercase">
          {currentT.expertiseTitle} <br/> 
          <i className="text-white normal-case font-light" style={{WebkitTextStroke: '0px'}}>{currentT.expertiseTitleItalic}</i>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        {/* Item 1 */}
        <ExpertiseCard 
          icon={<><Terminal className="w-8 h-8" /><Shield className="w-8 h-8 text-gold" /></>}
          title={currentT.exp1Title}
          desc={currentT.exp1Desc}
          tags={['React', 'Node.js', 'Kali Linux']}
          delay="0.2s"
        />

        {/* Item 2 */}
        <ExpertiseCard 
          icon={<><Smartphone className="w-8 h-8" /><Box className="w-8 h-8 text-gold" /></>}
          title={currentT.exp2Title}
          desc={currentT.exp2Desc}
          tags={['Baileys WA', 'NPM Logic', 'Automation']}
          delay="0.4s"
        />

        {/* Item 3 */}
        <ExpertiseCard 
          icon={<><Monitor className="w-8 h-8" /><Music className="w-8 h-8 text-gold" /></>}
          title={currentT.exp3Title}
          desc={currentT.exp3Desc}
          tags={['UI/UX', 'Vector Art', 'FL Studio']}
          delay="0.6s"
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
  delay: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon, title, desc, tags, delay }) => (
  <div className="lux-reveal glass-panel p-10 md:p-12 group hover:border-gold/30 transition-all duration-700" style={{ transitionDelay: delay }}>
    <div className="flex gap-4 mb-10 text-gray-500 group-hover:text-gold transition-colors duration-500">
      {icon}
    </div>
    <h3 className="text-2xl md:text-3xl font-cinzel mb-6 text-white group-hover:text-gold transition-colors">{title}</h3>
    <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-8">
      {desc}
    </p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag: string) => (
        <span key={tag} className="text-[9px] tracking-widest uppercase text-gray-500 px-3 py-1 border border-white/5 bg-white/[0.02]">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default Expertise;
