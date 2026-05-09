import React from 'react';

interface FooterProps {
  currentT: {
    footer: string;
  };
}

const Footer: React.FC<FooterProps> = ({ currentT }) => {
  return (
    <footer className="relative z-10 py-12 md:py-20 text-center border-t border-white/5 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-[10px] md:text-xs tracking-[0.5em] text-gray-600 uppercase mb-4">
          Terminal Echo
        </div>
        <p className="text-[9px] md:text-[10px] tracking-[0.2em] text-gray-500 uppercase">
          © 2026 Rayhan Dzaky Al Mubarok. {currentT.footer}
        </p>
        
        <div className="mt-12 flex justify-center gap-8">
          <div className="h-[1px] w-12 bg-white/5" />
          <div className="h-[1px] w-4 bg-gold/20" />
          <div className="h-[1px] w-12 bg-white/5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
