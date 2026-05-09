import React from 'react';

interface PhilosophyProps {
  currentT: {
    philosophy: string;
    roles: string[];
  };
}

const Philosophy: React.FC<PhilosophyProps> = ({ currentT }) => {
  return (
    <section className="relative z-10 py-32 md:py-48 px-6 md:px-12 max-w-5xl mx-auto text-center border-t border-white/5">
      <div className="lux-reveal glass-panel p-12 md:p-24 rounded-sm border-gold/10 group hover:border-gold/30 transition-all duration-1000">
        <p className="text-2xl md:text-5xl leading-tight font-light text-gray-200 group-hover:text-white transition-colors duration-700">
          {currentT.philosophy}
        </p>
        
        <div className="mt-16 md:mt-24 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-[10px] md:text-xs text-gray-500 tracking-[0.4em] uppercase">
          {currentT.roles.map((role: string, index: number) => (
            <React.Fragment key={role}>
              <span className={index === currentT.roles.length - 1 ? "text-gold font-bold" : ""}>
                {role}
              </span>
              {index < currentT.roles.length - 1 && (
                <div className="w-1 h-1 bg-white/20 rounded-full" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
