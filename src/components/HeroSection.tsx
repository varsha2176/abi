import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../config/siteContent';
import { getHeroPhoto } from '../utils/imageDiscovery';
import { Sparkles, ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const heroPhoto = getHeroPhoto();

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-ivory text-espresso px-6 sm:px-12 lg:px-20 py-20 lg:py-28 overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute top-12 left-10 lg:left-20 pointer-events-none opacity-40 select-none">
        <span className="font-bodoni text-7xl lg:text-9xl text-champagne/40 font-light tracking-tighter">
          01
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Asymmetric Editorial Bold Typography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1"
        >
          {/* Editorial Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-dustyrose" />
            <span className="text-xs uppercase tracking-[0.28em] font-medium text-burgundy">
              {siteContent.hero.editionBadge}
            </span>
          </div>

          {/* Clean, Non-Overlapping Bold Capital Typography */}
          <div className="mb-6 space-y-1">
            <h1 className="font-bodoni text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-espresso leading-none uppercase">
              {siteContent.hero.mainTitle}
            </h1>
            <h2 className="font-bodoni text-4xl sm:text-6xl xl:text-7xl font-black tracking-wide text-burgundy leading-none uppercase pt-2">
              {siteContent.hero.nameHeading}
            </h2>
          </div>

          {/* Subtext & Quotation */}
          <p className="font-cormorant text-xl sm:text-2xl text-espresso/80 italic font-medium max-w-xl mb-5">
            "{siteContent.hero.subtext}"
          </p>

          <p className="font-sans text-sm sm:text-base text-espresso/70 leading-relaxed max-w-lg mb-8">
            {siteContent.hero.quote}
          </p>

          {/* Dedicated info row */}
          <div className="flex items-center gap-6 pt-4 border-t border-champagne/60">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-espresso/50 font-sans">DEDICATED TO</p>
              <p className="font-playfair font-semibold text-espresso text-sm tracking-wider uppercase">
                {siteContent.recipient.name} ({siteContent.recipient.nickname})
              </p>
            </div>
            <div className="h-8 w-[1px] bg-champagne" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-espresso/50 font-sans">SPECIAL EDITION</p>
              <p className="font-playfair font-semibold text-burgundy text-sm tracking-wider">
                VOLUME 2026
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Photograph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Outer Decorative Offset Frame */}
            <div className="absolute -inset-3 sm:-inset-4 border border-dustyrose/40 rounded-2xl pointer-events-none" />
            
            {/* Main Polaroid / Editorial Photo Container */}
            <div className="relative bg-white p-3.5 sm:p-4 rounded-xl shadow-2xl shadow-espresso/15 border border-champagne/40">
              <div className="relative w-full overflow-hidden rounded-lg bg-champagne-light aspect-[4/5] flex items-center justify-center">
                {heroPhoto ? (
                  <img
                    src={heroPhoto.url}
                    alt="Abishek"
                    className="w-full h-full object-cover object-top transform transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-ivory to-champagne/50">
                    <Sparkles className="w-8 h-8 text-burgundy mb-2" />
                    <span className="font-bodoni text-2xl text-burgundy uppercase font-bold">ABISHEK</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent pointer-events-none opacity-30" />
              </div>

              {/* Photo Caption Strip */}
              <div className="pt-3 pb-1 px-1 flex items-center justify-between text-espresso/70">
                <span className="font-allura text-2xl text-burgundy">
                  {heroPhoto ? heroPhoto.caption : "My favourite human"}
                </span>
                <span className="text-[10px] tracking-widest uppercase font-mono text-espresso/50">
                  MEMORIES
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="mt-12 lg:mt-16 flex flex-col items-center justify-center">
        <a
          href="#main-character"
          className="group flex flex-col items-center gap-2 text-espresso/50 hover:text-burgundy transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans group-hover:tracking-[0.35em] transition-all duration-300">
            SCROLL TO EXPLORE
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-dustyrose" />
        </a>
      </div>
    </section>
  );
};
