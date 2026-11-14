import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../config/siteContent';
import { getMrVarshaPhoto } from '../utils/imageDiscovery';
import { Crown, Heart } from 'lucide-react';

export const MrVarshaReveal: React.FC = () => {
  const photo = getMrVarshaPhoto();

  return (
    <section className="relative py-28 lg:py-40 bg-cinematic-dark text-ivory px-6 sm:px-12 lg:px-20 overflow-hidden film-grain">
      {/* Cinematic Ambient Radial Glow */}
      <div className="absolute inset-0 bg-radial from-burgundy/30 via-cinematic-mid/40 to-cinematic-dark pointer-events-none" />

      {/* Chapter Marker */}
      <div className="absolute top-8 left-8 lg:left-20 pointer-events-none opacity-20 select-none">
        <span className="font-bodoni text-8xl lg:text-9xl text-champagne font-light">
          05
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Top Teaser Typography */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-champagne/40 bg-cinematic-accent/60 backdrop-blur-md mb-6"
          >
            <Crown className="w-3.5 h-3.5 text-champagne" />
            <span className="text-[11px] uppercase tracking-[0.28em] font-medium text-champagne">
              THE SIGNATURE CHAPTER
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair text-xs sm:text-sm uppercase tracking-[0.35em] text-champagne/70 font-semibold mb-3"
          >
            {siteContent.mrVarsha.teaser}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-bodoni text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-ivory uppercase"
          >
            {siteContent.mrVarsha.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-allura text-3xl sm:text-5xl text-dustyrose mt-2"
          >
            {siteContent.mrVarsha.tagline}
          </motion.p>
        </div>

        {/* Central Spotlight Frame + Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photograph with Cinematic Framing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Golden Border Offset */}
              <div className="absolute -inset-3 border border-champagne/30 rounded-2xl pointer-events-none" />

              <div className="relative p-3 bg-gradient-to-b from-[#2A1B20] to-[#1D1316] rounded-xl border border-champagne/40 shadow-2xl shadow-black">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-black/60 relative">
                  {photo ? (
                    <img
                      src={photo.url}
                      alt="Mr. Varsha Signature"
                      className="w-full h-full object-cover object-top transform transition-transform duration-700 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-cinematic-accent/40">
                      <Crown className="w-12 h-12 text-champagne mb-3" />
                      <span className="font-bodoni text-3xl text-ivory">Mr. Varsha</span>
                    </div>
                  )}

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cinematic-dark/70 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="pt-3 pb-1 px-1 flex items-center justify-between text-xs text-champagne/80 font-mono">
                  <span>EXCLUSIVELY CURATED</span>
                  <span>LIMITED EDITION · 1 OF 1</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Definition & Specs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-champagne/60" />
              <span className="text-xs uppercase tracking-[0.25em] text-champagne font-sans font-semibold">
                THE DEFINITION
              </span>
            </div>

            <h3 className="font-playfair text-2xl sm:text-3xl font-semibold text-ivory leading-snug mb-5">
              "{siteContent.mrVarsha.quote}"
            </h3>

            <p className="font-sans text-sm sm:text-base text-blush/90 leading-relaxed mb-8">
              {siteContent.mrVarsha.description}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-champagne/20">
              {siteContent.mrVarsha.specs.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-cinematic-mid/70 border border-champagne/20 flex flex-col justify-between">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-dustyrose mb-1 font-semibold flex items-center gap-1.5">
                    <Heart className="w-2.5 h-2.5 fill-dustyrose text-dustyrose" />
                    {item.label}
                  </span>
                  <span className="font-playfair font-bold text-ivory text-sm tracking-wide">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
