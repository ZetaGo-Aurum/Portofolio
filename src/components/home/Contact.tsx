import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { socials } from '../../content/socials';

interface ContactProps {
  currentT: {
    contactTitle: string;
    contactTitleItalic: string;
    contactDesc: string;
  };
}

const Contact: React.FC<ContactProps> = ({ currentT }) => {
  return (
    <section id="contact" className="relative z-10 py-32 md:py-48 px-6 md:px-12 border-t border-white/5 bg-black/40">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-cinzel mb-12 text-white drop-shadow-lg leading-tight uppercase">
              {currentT.contactTitle} <br/> 
              <i className="text-gray-500 font-light block mt-4 normal-case italic">{currentT.contactTitleItalic}</i>
            </h2>
            <p className="text-base md:text-lg text-gray-400 font-light max-w-md leading-relaxed">
              {currentT.contactDesc}
            </p>
          </div>
          
          <div className="mt-16 md:mt-24 lg:mt-32">
            <div className="text-[10px] tracking-[0.5em] text-gray-600 uppercase mb-8">System Status</div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs tracking-widest text-gold uppercase">Operational // Ready for Connection</span>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col justify-center mt-12 lg:mt-0">
          {socials.map((social: { name: string; label: string; url: string }, index: number) => (
            <motion.div 
              key={social.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <a 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex justify-between items-center py-6 md:py-10 border-b border-white/10 hover:border-gold/50 transition-all duration-700"
              >
                <div>
                  <h4 className="text-xl md:text-4xl font-light text-gray-400 group-hover:text-white transition-all duration-500">
                    {social.name}
                  </h4>
                  <p className="text-[9px] md:text-xs text-gray-600 tracking-[0.3em] uppercase mt-4 group-hover:text-gold transition-colors">
                    {social.label}
                  </p>
                </div>
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-700 group-hover:-rotate-45">
                  <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6 text-gray-500 group-hover:text-black transition-colors" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
