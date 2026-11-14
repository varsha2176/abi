import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../config/siteContent';
import { Heart } from 'lucide-react';

export const PersonalLetter: React.FC = () => {
  const { letter } = siteContent;

  return (
    <section id="letter" className="relative py-28 lg:py-36 bg-ivory text-espresso px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Chapter Marker */}
      <div className="absolute top-8 right-8 lg:right-20 pointer-events-none opacity-30 select-none">
        <span className="font-bodoni text-7xl lg:text-9xl text-champagne/40 font-light">
          06
        </span>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        {/* Letter Container with Deckled Paper Feel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative paper-texture p-8 sm:p-14 lg:p-20 rounded-2xl sm:rounded-3xl border-2 border-champagne/80 shadow-2xl shadow-espresso/10"
        >
          {/* Inner Delicate Double Border */}
          <div className="absolute inset-4 sm:inset-6 border border-dustyrose/30 rounded-xl sm:rounded-2xl pointer-events-none" />

          {/* Top Wax Seal Medallion */}
          <div className="flex justify-center mb-8 relative z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-burgundy via-wine to-[#38141F] border-2 border-champagne shadow-lg shadow-burgundy/40 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-dashed border-champagne/50 flex flex-col items-center justify-center">
                <Heart className="w-5 h-5 text-champagne fill-champagne/40" />
              </div>
            </div>
          </div>

          {/* Date / Volume Stamp */}
          <div className="text-center mb-10 relative z-10">
            <span className="text-[11px] uppercase tracking-[0.28em] text-dustyrose font-mono">
              {letter.dateText}
            </span>
            <div className="w-12 h-[1px] bg-champagne mx-auto mt-2" />
          </div>

          {/* Salutation */}
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bodoni text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso mb-8 relative z-10 uppercase"
          >
            {letter.salutation}
          </motion.h3>

          {/* Body Paragraphs Staggered Reveal */}
          <div className="space-y-6 font-cormorant text-xl sm:text-2xl text-espresso/90 leading-relaxed relative z-10">
            {letter.paragraphs.map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.08 * idx }}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Special Highlighted Quote */}
            {letter.highlightParagraph && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="my-8 py-4 px-6 rounded-xl bg-ivory border-l-4 border-burgundy shadow-sm"
              >
                <p className="font-playfair font-bold text-2xl sm:text-3xl text-burgundy italic">
                  "{letter.highlightParagraph}"
                </p>
              </motion.div>
            )}

            {/* Closing Wish */}
            {letter.closingWish && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-medium text-espresso"
              >
                {letter.closingWish}
              </motion.p>
            )}
          </div>

          {/* Sign-off & Large Handwritten Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-champagne/40 relative z-10"
          >
            <p className="font-cormorant italic text-xl sm:text-2xl text-espresso/80 mb-2">
              {letter.signOff}
            </p>
            <div className="font-allura text-5xl sm:text-6xl text-burgundy transform -rotate-2 origin-left font-semibold">
              {letter.signature}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
