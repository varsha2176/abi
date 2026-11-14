import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../config/siteContent';
import { getFinalMomentPhoto } from '../utils/imageDiscovery';
import { Sparkles } from 'lucide-react';

export const FinalPhotoMoment: React.FC = () => {
  const photo = getFinalMomentPhoto();

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-black overflow-hidden film-grain">
      {/* Background Full-Bleed Photograph */}
      <div className="absolute inset-0 z-0">
        {photo ? (
          <img
            src={photo.url}
            alt="Final Photo Moment"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-105 scale-105 transform hover:scale-110 transition-transform duration-1000"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-[#241A1B] via-burgundy/40 to-[#171313]" />
        )}

        {/* Cinematic Vignette Overlays */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/90 pointer-events-none" />
      </div>

      {/* Center Cinematic Typography Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-ivory">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-champagne/40 bg-black/40 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-dustyrose" />
          <span className="text-[11px] uppercase tracking-[0.28em] font-medium text-champagne/90">
            CINEMATIC STILL
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-bodoni text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white/95"
        >
          {siteContent.finalMoment.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-2 sm:mt-4 mb-6"
        >
          <span className="font-allura text-5xl sm:text-7xl lg:text-8xl text-champagne block">
            {siteContent.finalMoment.calligraphy}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-cormorant italic text-lg sm:text-2xl text-ivory/80 max-w-xl mx-auto"
        >
          "{siteContent.finalMoment.caption}"
        </motion.p>
      </div>
    </section>
  );
};
