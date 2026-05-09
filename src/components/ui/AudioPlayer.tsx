import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startExperience = () => {
    setShowOverlay(false);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Autoplay blocked", err));
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showOverlay && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center gap-8 cursor-pointer"
            onClick={startExperience}
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-24 h-24 rounded-full border border-gold/50 flex items-center justify-center"
            >
              <Play className="w-8 h-8 text-gold fill-gold ml-1" />
            </motion.div>
            <div className="text-center">
              <h2 className="font-cinzel text-2xl tracking-[0.3em] text-white">INITIATE CORE</h2>
              <p className="text-[10px] tracking-[0.5em] text-gray-500 uppercase mt-4">Click to begin experience</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <audio 
        ref={audioRef} 
        loop 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder ambient music
      />

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={toggleAudio}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:border-gold/50 transition-colors"
      >
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-gold" />
        ) : (
          <VolumeX className="w-4 h-4 text-gray-500" />
        )}
        
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border border-gold animate-ping opacity-20" />
        )}
      </motion.button>
    </>
  );
};

export default AudioPlayer;
