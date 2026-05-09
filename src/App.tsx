import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/home/Hero';
import Expertise from './components/home/Expertise';
import Projects from './components/home/Projects';
import Philosophy from './components/home/Philosophy';
import Contact from './components/home/Contact';
import Footer from './components/common/Footer';
import AudioPlayer from './components/ui/AudioPlayer';
import { translations, Language } from './content/translations';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentT = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for Reveal Animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.lux-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [lang]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#030303]">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_-20%,#3b3b3b,transparent)] animate-pulse" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_0%_100%,#D4AF3744,transparent)]" />
        </div>
        <div className="absolute inset-0 backdrop-blur-[100px]"></div>
      </div>

      <AudioPlayer />
      <Navbar currentT={currentT} lang={lang} setLang={setLang} scrolled={scrolled} />
      
      <main className="relative z-10">
        <Hero currentT={currentT} />
        <Expertise currentT={currentT} />
        <Projects currentT={currentT} />
        <Philosophy currentT={currentT} />
        <Contact currentT={currentT} />
      </main>

      <Footer currentT={currentT} />
    </div>
  );
}
