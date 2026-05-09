import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import L2DPlaceholder from '../ui/L2DPlaceholder';

interface HeroProps {
  currentT: {
    heroSubtitle: string;
    heroDesc: string;
  };
}

const Hero: React.FC<HeroProps> = ({ currentT }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Balanced parallax for a "floating window" effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 30 });
  const smoothY3 = useSpring(y3, { stiffness: 100, damping: 30 });
  const smoothY4 = useSpring(y4, { stiffness: 100, damping: 30 });

  // Consistent portrait window size
  const windowClass = "absolute w-[38vw] h-[35vh] md:w-[16vw] md:h-[50vh] overflow-hidden rounded-sm border border-white/10 shadow-2xl bg-black/20 backdrop-blur-sm";

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden px-6 z-10"
    >
      
      {/* Dynamic Background Windows in X-Shape */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen">
        {/* Top Left Window */}
        <motion.div 
          style={{ y: smoothY1 }} 
          className={`${windowClass} top-[12%] left-[8%] md:top-[10%] md:left-[15%]`}
        >
          <L2DPlaceholder 
            image="https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1974&auto=format&fit=crop" 
            name="Hoshino"
            delay={0.2}
          />
        </motion.div>
        
        {/* Top Right Window */}
        <motion.div 
          style={{ y: smoothY2 }} 
          className={`${windowClass} top-[12%] right-[8%] md:top-[15%] md:right-[15%]`}
        >
          <L2DPlaceholder 
            image="/hero/Terakomari.Gandesblood.full.4048408.jpg" 
            name="Terakomari"
            delay={0.5}
          />
        </motion.div>
        
        {/* Bottom Left Window */}
        <motion.div 
          style={{ y: smoothY3 }} 
          className={`${windowClass} bottom-[12%] left-[8%] md:bottom-[15%] md:left-[18%]`}
        >
          <L2DPlaceholder 
            image="/hero/estella-pointing-at-the-camera-in-arknights-endfield.jpg" 
            name="Estella"
            delay={0.8}
          />
        </motion.div>
        
        {/* Bottom Right Window */}
        <motion.div 
          style={{ y: smoothY4 }} 
          className={`${windowClass} bottom-[12%] right-[8%] md:bottom-[10%] md:right-[18%]`}
        >
          <L2DPlaceholder 
            image="/hero/wallpaperflare.com_wallpaper.jpg" 
            name="Terakomari"
            delay={1.1}
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <p className="text-[10px] md:text-sm tracking-[0.5em] uppercase text-gray-400 font-light">
            {currentT.heroSubtitle}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[11vw] md:text-[10vw] font-cinzel leading-[1.1] mb-8 drop-shadow-2xl">
            <span className="italic font-light text-gray-300">ZETAGO</span> <br/> 
            <span className="font-semibold tracking-tighter text-white">AURUM</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-16 h-[1px] bg-gold mx-auto mb-8" />
          <p className="text-sm md:text-xl text-gray-400 font-light max-w-2xl mx-auto tracking-wide leading-relaxed px-4">
            {currentT.heroDesc}
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-5 border border-white/10 overflow-hidden transition-all duration-500 hover:border-gold/50 rounded-full"
          >
            <span className="relative z-10 text-[10px] tracking-[0.6em] uppercase text-white group-hover:text-gold transition-colors font-bold">Explore Works</span>
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 opacity-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
