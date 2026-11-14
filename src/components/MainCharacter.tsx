import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../config/siteContent';
import { getMainCharacterPhotos } from '../utils/imageDiscovery';
import { Sparkles, Star, Award, Heart } from 'lucide-react';

export const MainCharacter: React.FC = () => {
  const photos = getMainCharacterPhotos();
  const photoA = photos[0] || null;
  const photoB = photos[1] || null;

  return (
    <section id="main-character" className="relative py-24 lg:py-32 bg-ivory-warm text-espresso px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-champagne/40">
      {/* Editorial Chapter Number Watermark */}
      <div className="absolute top-8 right-8 lg:right-20 pointer-events-none opacity-30 select-none">
        <span className="font-bodoni text-7xl lg:text-9xl text-dustyrose/30 font-light">
          02
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-champagne bg-ivory mb-4"
          >
            <Star className="w-3 h-3 text-burgundy fill-burgundy" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-burgundy font-medium">
              {siteContent.mainCharacter.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-bodoni text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-espresso"
          >
            {siteContent.mainCharacter.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-allura text-3xl sm:text-4xl text-dustyrose mt-1"
          >
            {siteContent.mainCharacter.subtitle}
          </motion.p>
        </div>

        {/* Editorial Profile & Photography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Dossier / Profile Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-2xl border border-champagne/70 shadow-xl shadow-espresso/5">
              <div className="flex items-center justify-between pb-6 border-b border-champagne/60 mb-6">
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-mono text-dustyrose">
                    DOSSIER NO. 2026-AB
                  </span>
                  <h3 className="font-playfair text-2xl font-bold text-espresso">
                    The Main Character File
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-champagne-light flex items-center justify-center">
                  <Award className="w-5 h-5 text-burgundy" />
                </div>
              </div>

              {/* Profile Fields */}
              <div className="space-y-4 font-sans text-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-champagne/30">
                  <span className="text-xs uppercase tracking-wider text-espresso/50 font-medium">NAME</span>
                  <span className="font-playfair font-bold text-espresso text-base tracking-wide">
                    {siteContent.mainCharacter.profile.name}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-champagne/30">
                  <span className="text-xs uppercase tracking-wider text-espresso/50 font-medium">ALIAS</span>
                  <span className="font-borel text-burgundy text-lg">
                    {siteContent.mainCharacter.profile.alias}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-champagne/30">
                  <span className="text-xs uppercase tracking-wider text-espresso/50 font-medium">OFFICIAL TITLE</span>
                  <span className="font-cormorant font-semibold italic text-espresso text-base">
                    {siteContent.mainCharacter.profile.title}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-champagne/30">
                  <span className="text-xs uppercase tracking-wider text-espresso/50 font-medium">SPECIALITY</span>
                  <span className="font-sans font-medium text-espresso text-sm">
                    {siteContent.mainCharacter.profile.speciality}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-champagne/30">
                  <span className="text-xs uppercase tracking-wider text-espresso/50 font-medium">SIGNATURE VIBE</span>
                  <span className="font-sans text-espresso/80 text-sm">
                    {siteContent.mainCharacter.profile.vibe}
                  </span>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-ivory border border-champagne/50 flex items-start gap-3">
                <Heart className="w-4 h-4 text-burgundy mt-1 shrink-0 fill-burgundy/20" />
                <p className="font-cormorant italic text-base text-espresso/90">
                  "{siteContent.mainCharacter.quote}"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Layered Editorial Photos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center items-center py-6"
          >
            {/* Primary Portrait Card */}
            <div className="relative w-full max-w-sm sm:max-w-md polaroid-frame p-3 sm:p-4 rounded-xl z-10 rotate-1">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-champagne-light">
                {photoA ? (
                  <img
                    src={photoA.url}
                    alt="Abishek - Main Character"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-ivory">
                    <Sparkles className="w-8 h-8 text-dustyrose mb-2" />
                    <span className="font-borel text-2xl text-burgundy">Unapologetically Him</span>
                    <span className="font-serif text-xs uppercase tracking-wider text-espresso/60 mt-2">
                      Frame 02 / 25
                    </span>
                  </div>
                )}
              </div>
              <div className="pt-3 pb-1 flex justify-between items-center text-xs text-espresso/70">
                <span className="font-allura text-2xl text-burgundy">
                  {photoA ? photoA.caption : "Pure charm."}
                </span>
                <span className="font-mono text-[10px] text-espresso/50">MEMORIES VOL. 1</span>
              </div>
            </div>

            {/* Secondary Floating Accent Card (Offset behind if screen allows) */}
            <div className="hidden sm:block absolute -bottom-6 -left-4 w-44 polaroid-frame p-2.5 rounded-lg -rotate-6 z-20 border border-champagne shadow-lg">
              <div className="aspect-square w-full overflow-hidden rounded bg-champagne-light">
                {photoB ? (
                  <img
                    src={photoB.url}
                    alt="Abishek"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-champagne/40">
                    <span className="font-allura text-xl text-burgundy">Frame 03</span>
                  </div>
                )}
              </div>
              <p className="font-allura text-center text-base text-espresso/80 pt-1.5">
                {photoB ? photoB.caption : "That smile"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
