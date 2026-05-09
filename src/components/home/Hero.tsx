import React from 'react';
import L2DPlaceholder from '../ui/L2DPlaceholder';

interface HeroProps {
  currentT: {
    heroSubtitle: string;
    heroDesc: string;
  };
}

const Hero: React.FC<HeroProps> = ({ currentT }) => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden px-6 z-10">
      
      {/* Dynamic Background L2D Placeholders */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30 mix-blend-screen">
        {/* Character 1 - Top Left */}
        <L2DPlaceholder 
          image="https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1974&auto=format&fit=crop" 
          name="Hoshino"
          delay={0.2}
          className="absolute -top-[5%] -left-[15%] w-[60vw] h-[40vh] md:top-[10%] md:left-[5%] md:w-[15vw] md:h-[45vh]"
        />
        
        {/* Character 2 - Top Right */}
        <L2DPlaceholder 
          image="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1974&auto=format&fit=crop" 
          name="Shiroko"
          delay={0.5}
          className="hidden md:block absolute top-[15%] right-[5%] w-[12vw] h-[35vh]"
        />
        
        {/* Character 3 - Bottom Left */}
        <L2DPlaceholder 
          image="https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=1974&auto=format&fit=crop" 
          name="Aris"
          delay={0.8}
          className="hidden md:block absolute bottom-[10%] left-[10%] w-[10vw] h-[40vh]"
        />
        
        {/* Character 4 - Bottom Right */}
        <L2DPlaceholder 
          image="https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1974&auto=format&fit=crop" 
          name="Yuuka"
          delay={1.1}
          className="absolute -bottom-[5%] -right-[20%] w-[70vw] h-[45vh] md:bottom-[15%] md:right-[12%] md:w-[14vw] md:h-[50vh]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-7xl mx-auto">
        <div className="lux-reveal mb-8">
          <p className="text-[10px] md:text-sm tracking-[0.5em] uppercase text-gray-400 font-light" style={{ transitionDelay: '0.2s' }}>
            {currentT.heroSubtitle}
          </p>
        </div>
        
        <div className="lux-reveal">
          <h1 className="text-[11vw] md:text-[10vw] font-cinzel leading-[1.1] mb-8 drop-shadow-2xl" style={{ transitionDelay: '0.4s' }}>
            <span className="italic font-light text-gray-300">RAYHAN</span> <br/> 
            <span className="font-semibold tracking-tighter text-white">DZAKY</span>
          </h1>
        </div>

        <div className="lux-reveal">
          <div className="w-16 h-[1px] bg-gold mx-auto mb-8" style={{ transitionDelay: '0.6s' }} />
          <p className="text-sm md:text-xl text-gray-400 font-light max-w-2xl mx-auto tracking-wide leading-relaxed px-4" style={{ transitionDelay: '0.8s' }}>
            {currentT.heroDesc}
          </p>
        </div>
        
        <div className="lux-reveal mt-16">
          <button 
            onClick={() => document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 border border-white/10 overflow-hidden transition-all duration-500 hover:border-gold/50"
            style={{ transitionDelay: '1s' }}
          >
            <span className="relative z-10 text-[10px] tracking-[0.5em] uppercase text-white group-hover:text-gold transition-colors">Explore Works</span>
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
