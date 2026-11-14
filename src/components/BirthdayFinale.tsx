import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { siteContent } from '../config/siteContent';
import { Sparkles, RotateCcw, Heart, Flame } from 'lucide-react';

interface BirthdayFinaleProps {
  onReplay: () => void;
}

export const BirthdayFinale: React.FC<BirthdayFinaleProps> = ({ onReplay }) => {
  const [candleBlown, setCandleBlown] = useState(false);
  const { finale } = siteContent;

  const triggerLuxuryConfetti = () => {
    // High-end champagne, gold, rose, and wine palette
    const colors = ['#E8D8C6', '#C99594', '#642C3B', '#DFB3B2', '#FFFFFF'];

    // Left cannon
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 60,
      origin: { x: 0.1, y: 0.75 },
      colors,
      disableForReducedMotion: true,
    });

    // Right cannon
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 60,
      origin: { x: 0.9, y: 0.75 },
      colors,
      disableForReducedMotion: true,
    });

    // Center burst
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors,
      disableForReducedMotion: true,
    });
  };

  const handleBlowCandle = () => {
    setCandleBlown(true);
    triggerLuxuryConfetti();
  };

  return (
    <footer className="relative py-28 lg:py-36 bg-gradient-to-b from-[#24131A] via-[#1D0E14] to-[#12080D] text-ivory px-6 sm:px-12 lg:px-20 overflow-hidden film-grain">
      {/* Chapter Marker */}
      <div className="absolute top-8 left-8 lg:left-20 pointer-events-none opacity-20 select-none">
        <span className="font-bodoni text-7xl lg:text-9xl text-champagne/30 font-light">
          07
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Edition Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-champagne/40 bg-burgundy/40 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-dustyrose" />
          <span className="text-[11px] uppercase tracking-[0.28em] font-medium text-champagne/90">
            {finale.badge}
          </span>
        </motion.div>

        {/* Minimal Animated Candle Wish Feature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 flex flex-col items-center cursor-pointer group"
          onClick={handleBlowCandle}
        >
          <div className="relative w-12 h-24 flex flex-col items-center justify-end">
            {/* Candle Flame (Pulsing / Flickering) */}
            {!candleBlown ? (
              <div className="relative mb-1 flex items-center justify-center">
                <div className="w-5 h-7 rounded-full bg-gradient-to-t from-orange-400 via-amber-300 to-yellow-100 blur-[0.5px] animate-pulse shadow-lg shadow-amber-500/50" />
                <div className="absolute w-2 h-4 rounded-full bg-white opacity-80" />
              </div>
            ) : (
              <div className="mb-2 text-xs font-mono text-champagne/70 animate-fade-in">
                💨 Wish Made!
              </div>
            )}

            {/* Candle Wick */}
            <div className="w-0.5 h-2.5 bg-neutral-700" />

            {/* Candle Body */}
            <div className="w-6 h-14 rounded-t-sm bg-gradient-to-b from-champagne via-ivory to-champagne/80 shadow-md border-t border-white/40" />
          </div>

          <button
            type="button"
            className="mt-3 text-xs uppercase tracking-widest text-champagne/80 group-hover:text-champagne font-sans transition-colors flex items-center gap-1.5"
          >
            <Flame className="w-3.5 h-3.5 text-dustyrose" />
            {candleBlown ? "Wish granted · Celebrate again" : "Tap to make a wish & blow the candle"}
          </button>
        </motion.div>

        {/* Typography Lines */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="space-y-3 mb-6"
        >
          <p className="font-playfair text-sm sm:text-base uppercase tracking-[0.3em] text-champagne/75 font-semibold">
            {finale.line1}
          </p>
          <p className="font-bodoni text-2xl sm:text-4xl text-blush tracking-wide">
            {finale.line2}
          </p>
        </motion.div>

        {/* Main Greeting Banner */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-bodoni text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ivory mb-4"
        >
          {finale.mainGreeting}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-cormorant italic text-xl sm:text-2xl text-champagne/80 max-w-lg mb-10"
        >
          "{finale.subtext}"
        </motion.p>

        {/* REPLAY THE MAGIC Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <button
            onClick={() => {
              triggerLuxuryConfetti();
              onReplay();
            }}
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-dustyrose via-burgundy to-wine border border-champagne/40 shadow-xl shadow-burgundy/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 text-sm sm:text-base font-serif uppercase tracking-widest text-ivory"
          >
            <RotateCcw className="w-4 h-4 text-champagne group-hover:-rotate-90 transition-transform duration-500" />
            <span>{finale.replayButton}</span>
          </button>
        </motion.div>

        {/* Delicate Divider */}
        <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent my-8" />

        {/* Editorial Footer */}
        <div className="space-y-2 text-center text-xs tracking-widest uppercase font-sans text-champagne/60">
          <p className="flex items-center justify-center gap-2">
            <Heart className="w-3.5 h-3.5 fill-dustyrose text-dustyrose" />
            <span>{finale.footerText}</span>
          </p>
          <p className="text-[10px] text-champagne/40 font-mono">
            {finale.credits}
          </p>
        </div>
      </div>
    </footer>
  );
};
