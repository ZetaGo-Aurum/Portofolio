import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../../content/translations';

interface NavbarProps {
  currentT: {
    nav: Record<string, string>;
  };
  lang: Language;
  setLang: (lang: Language) => void;
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ currentT, lang, setLang, scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <div onClick={() => scrollTo('hero')} className="text-sm tracking-[0.2em] uppercase font-light cursor-pointer hover:text-white transition-colors">
          ZetaGo<span className="text-gold font-semibold">—Aurum</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-xs tracking-[0.3em] uppercase text-gray-400">
          {Object.entries(currentT.nav).map(([key, label]) => (
            <button key={key} onClick={() => scrollTo(key)} className="hover:text-white transition-colors">
              {label}
            </button>
          ))}
        </div>

        {/* Language & Menu Toggle */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-xs tracking-widest font-light">
            <Globe className="w-4 h-4 text-gray-400" />
            <button onClick={() => setLang('en')} className={`transition-colors ${lang === 'en' ? 'text-white font-medium' : 'text-gray-600 hover:text-gray-300'}`}>EN</button>
            <span className="text-gray-700">/</span>
            <button onClick={() => setLang('id')} className={`transition-colors ${lang === 'id' ? 'text-white font-medium' : 'text-gray-600 hover:text-gray-300'}`}>ID</button>
          </div>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-400 hover:text-white">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-12 md:hidden"
          >
            {Object.entries(currentT.nav).map(([key, label]) => (
              <button 
                key={key} 
                onClick={() => scrollTo(key)} 
                className="text-2xl font-cinzel tracking-widest text-gray-400 hover:text-gold transition-colors uppercase"
              >
                {label}
              </button>
            ))}
            
            <div className="flex items-center gap-6 text-sm tracking-[0.3em] mt-8">
              <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-gold' : 'text-gray-600'}>EN</button>
              <button onClick={() => setLang('id')} className={lang === 'id' ? 'text-gold' : 'text-gray-600'}>ID</button>
            </div>
            
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-6 text-gray-400">
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
