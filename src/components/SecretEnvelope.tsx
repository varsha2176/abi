import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowDown, Heart } from 'lucide-react';
import { siteContent } from '../config/siteContent';

interface SecretEnvelopeProps {
  onOpen: () => void;
}

export const SecretEnvelope: React.FC<SecretEnvelopeProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleStartExperience = () => {
    setIsOpening(true);
    // Allow animation to play gracefully before transitioning
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center min-h-screen bg-[#1E1416] text-ivory px-6 py-12 overflow-hidden film-grain"
    >
      {/* Ambient background glow & radial gradient */}
      <div className="absolute inset-0 bg-radial from-burgundy/30 via-wine/20 to-[#140E10] pointer-events-none" />

      {/* Floating subtle romantic particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${(i * 6.5 + 5) % 100}vw`,
              y: '105vh',
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              y: '-5vh',
              opacity: [0, 0.7, 0],
              scale: [0.6, 1.2, 0.8],
            }}
            transition={{
              duration: 10 + (i % 6) * 2.5,
              repeat: Infinity,
              delay: (i * 0.7) % 7,
              ease: 'easeInOut',
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-champagne/40 blur-[0.5px]"
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-xl w-full flex flex-col items-center text-center">
        {/* Top Editorial Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-champagne/30 bg-burgundy/40 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-dustyrose" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium text-champagne/90">
            {siteContent.intro.topBadge}
          </span>
        </motion.div>

        {/* Vintage Interactive Envelope Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md my-4 p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#2A1B20] to-[#1D1316] border border-champagne/25 shadow-2xl shadow-black/60 text-center cursor-pointer group"
          onClick={handleStartExperience}
        >
          {/* Subtle gold ribbon line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />

          {/* Wax Seal Medallion */}
          <div className="mx-auto mb-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-burgundy via-wine to-[#38141F] border-2 border-champagne/60 shadow-lg shadow-burgundy/50 flex items-center justify-center transform transition-all duration-500 group-hover:scale-105 group-hover:border-champagne">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-dashed border-champagne/40 flex flex-col items-center justify-center">
              <span className="font-borel text-lg sm:text-xl text-champagne leading-none">A</span>
              <span className="text-[8px] uppercase tracking-widest text-blush/70 font-sans mt-0.5">2026</span>
            </div>
          </div>

          <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-champagne/70 font-sans mb-3">
            {siteContent.intro.envelopePreview.tag}
          </p>

          <h2 className="font-bodoni text-2xl sm:text-3xl text-ivory tracking-wide mb-2">
            {siteContent.intro.envelopePreview.title}
          </h2>

          <p className="font-allura text-2xl sm:text-3xl text-dustyrose mb-4">
            {siteContent.intro.envelopePreview.subtitle}
          </p>

          <div className="w-12 h-[1px] bg-champagne/30 mx-auto my-3" />

          <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-champagne/80 font-medium">
            {siteContent.intro.envelopePreview.signature}
          </p>
        </motion.div>

        {/* Main Heading Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 mb-8"
        >
          <h1 className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-ivory/95 font-normal leading-snug tracking-wide">
            {siteContent.intro.heading.split('\n').map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-blush/80 font-sans max-w-md mx-auto">
            {siteContent.intro.subheading}
          </p>
        </motion.div>

        {/* Action Button: [ OPEN YOUR SURPRISE ] */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col items-center"
        >
          <button
            onClick={handleStartExperience}
            disabled={isOpening}
            className="relative px-8 py-4 sm:px-10 sm:py-4.5 rounded-full bg-gradient-to-r from-dustyrose via-burgundy to-wine text-ivory font-serif text-sm sm:text-base tracking-widest uppercase border border-champagne/40 shadow-xl shadow-burgundy/40 hover:shadow-champagne/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center gap-3 overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2 font-medium">
              <Heart className="w-4 h-4 fill-champagne text-champagne group-hover:scale-125 transition-transform duration-300" />
              {isOpening ? "Opening Your Universe..." : siteContent.intro.buttonText}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>

          {/* Animated Handwritten Hint */}
          <div className="mt-5 flex items-center gap-2 text-champagne/70 font-allura text-xl sm:text-2xl animate-bounce">
            <span>{siteContent.intro.hintText}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
