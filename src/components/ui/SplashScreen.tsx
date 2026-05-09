import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onInitialize: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onInitialize }) => {
  const [status, setStatus] = useState('READY');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(onInitialize, 800);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [loading, onInitialize]);

  const handleInit = () => {
    setLoading(true);
    setStatus('INITIALIZING');
  };

  return (
    <motion.div 
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#D4AF3715,transparent)] opacity-50 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12">
        {/* Logo / Title Area */}
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, letterSpacing: '1em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-xs md:text-sm text-gold font-light uppercase mb-2"
          >
            ZetaGo System
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-5xl md:text-7xl font-cinzel text-white tracking-widest font-bold"
          >
            AURUM
          </motion.h1>
        </div>

        {/* Console / Status */}
        <div className="font-mono text-[10px] md:text-xs text-gray-500 tracking-widest uppercase flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-gold/50 animate-ping" />
            <span>CORE STATUS: <span className={loading ? "text-gold" : "text-white"}>{status}</span></span>
          </div>
          {loading && (
            <div className="w-48 h-[2px] bg-white/5 mt-4 relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gold origin-left"
                style={{ scaleX: progress / 100 }}
              />
            </div>
          )}
        </div>

        {/* The Initialize Button */}
        <AnimatePresence>
          {!loading && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleInit}
              className="mt-8 group relative px-12 py-4 border border-white/10 overflow-hidden transition-all duration-500 hover:border-gold/50"
            >
              <div className="absolute inset-0 bg-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              <span className="relative z-10 text-[10px] tracking-[0.8em] uppercase text-white group-hover:text-gold transition-colors font-bold">
                Initialize
              </span>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/30" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold/30" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold/30" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/30" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </motion.div>
  );
};

export default SplashScreen;
