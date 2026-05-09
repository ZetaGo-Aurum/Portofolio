import React from 'react';
import { motion } from 'framer-motion';

interface L2DPlaceholderProps {
  image?: string;
  video?: string;
  name: string;
  delay?: number;
  className?: string;
}

const L2DPlaceholder: React.FC<L2DPlaceholderProps> = ({ image, video, name, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 0.6, y: 0 }}
      whileHover={{ opacity: 1, scale: 1.05, filter: 'grayscale(0%)' }}
      transition={{ 
        delay, 
        duration: 1.2,
        y: {
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }
      }}
      className={`relative group cursor-pointer grayscale overflow-hidden rounded-sm border border-white/10 shadow-2xl ${className}`}
    >
      {video ? (
        <video 
          src={video} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        />
      ) : (
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
        <p className="text-[10px] tracking-widest uppercase text-gold font-bold">{name}</p>
        <div className="h-[1px] w-0 group-hover:w-full bg-gold transition-all duration-700" />
      </div>
    </motion.div>
  );
};

export default L2DPlaceholder;
