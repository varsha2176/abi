import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../config/siteContent';
import { Heart, Sparkles } from 'lucide-react';

export const LittleThings: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-ivory-warm text-espresso px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-champagne/40">
      {/* Chapter Marker */}
      <div className="absolute top-8 right-8 lg:right-20 pointer-events-none opacity-30 select-none">
        <span className="font-bodoni text-7xl lg:text-9xl text-dustyrose/30 font-light">
          04
        </span>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-champagne bg-white mb-4"
          >
            <Heart className="w-3.5 h-3.5 text-dustyrose fill-dustyrose/30" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-burgundy font-medium">
              LITTLE OBSERVATIONS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-bodoni text-3xl sm:text-5xl font-bold tracking-tight text-espresso uppercase"
          >
            {siteContent.littleThings.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-allura text-3xl sm:text-4xl text-dustyrose mt-1"
          >
            {siteContent.littleThings.subtitle}
          </motion.p>
        </div>

        {/* 6 Aesthetic Editorial Note Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.littleThings.notes.map((note, idx) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative p-8 rounded-2xl bg-white border border-champagne/80 shadow-lg shadow-espresso/5 flex flex-col justify-between group overflow-hidden"
            >
              {/* Decorative Washi Tape / Pin Motif */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-3 bg-champagne-light/80 border-b border-champagne/60 rounded-b-sm" />

              <div>
                <div className="flex items-center justify-between mb-6 pt-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-dustyrose font-bold">
                    {note.tag}
                  </span>
                  <Sparkles className="w-4 h-4 text-champagne group-hover:text-dustyrose transition-colors" />
                </div>

                <p className="font-cormorant text-2xl sm:text-[25px] leading-snug text-espresso font-semibold italic group-hover:text-burgundy transition-colors">
                  "{note.text}"
                </p>
              </div>

              {/* Bottom signature row: For Abishek */}
              <div className="mt-8 pt-4 border-t border-champagne/30 flex items-center justify-between">
                <span className="font-allura text-2xl text-dustyrose font-medium">
                  For Abishek
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-champagne group-hover:bg-burgundy transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
