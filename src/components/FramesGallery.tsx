import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../config/siteContent';
import { getAllGalleryPhotos, PhotoItem } from '../utils/imageDiscovery';
import { LightboxModal } from './LightboxModal';
import { Camera, Eye, Sparkles } from 'lucide-react';

export const FramesGallery: React.FC = () => {
  const photos = getAllGalleryPhotos();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handleNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const handlePrev = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-ivory text-espresso px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Chapter Marker */}
      <div className="absolute top-8 left-8 lg:left-16 pointer-events-none opacity-30 select-none">
        <span className="font-bodoni text-7xl lg:text-9xl text-champagne/40 font-light">
          03
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-champagne bg-white mb-4 shadow-sm"
          >
            <Camera className="w-3.5 h-3.5 text-dustyrose" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-burgundy font-medium">
              {siteContent.gallery.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-bodoni text-4xl sm:text-6xl font-bold tracking-tight text-espresso uppercase"
          >
            {siteContent.gallery.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-allura text-3xl sm:text-4xl text-burgundy mt-1"
          >
            {siteContent.gallery.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-cormorant text-lg sm:text-xl text-espresso/70 italic mt-3"
          >
            "{siteContent.gallery.description}"
          </motion.p>
        </div>

        {/* Gallery Content with Tailored Aspect Ratio Frames */}
        {photos.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {photos.map((item, idx) => {
              const rotations = ['rotate-0', 'rotate-1', '-rotate-1', 'rotate-0', 'rotate-1', '-rotate-1'];
              const rotation = rotations[idx % rotations.length];
              const isLandscape = item.aspect === 'landscape';

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: (idx % 4) * 0.08 }}
                  className={`break-inside-avoid transform ${rotation} transition-all duration-300 hover:rotate-0`}
                >
                  <div
                    onClick={() => handleOpenLightbox(idx)}
                    className="polaroid-frame p-3.5 sm:p-4 rounded-xl cursor-pointer group relative overflow-hidden bg-white border border-champagne/40"
                  >
                    {/* Image Container with Exact Aspect Ratio */}
                    <div
                      className={`relative overflow-hidden rounded-lg bg-champagne-light w-full ${
                        isLandscape ? 'aspect-[4/3]' : ''
                      }`}
                      style={!isLandscape ? { aspectRatio: `${item.width} / ${item.height}` } : undefined}
                    >
                      <img
                        src={item.url}
                        alt={item.caption}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Hover Overlay with View Icon */}
                      <div className="absolute inset-0 bg-espresso/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="p-3 rounded-full bg-white/95 text-burgundy shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <Eye className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Landscape Badge for Wide Photos */}
                      {isLandscape && (
                        <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-mono tracking-widest text-champagne uppercase">
                          LANDSCAPE STILL
                        </div>
                      )}
                    </div>

                    {/* Polaroid Bottom Caption */}
                    <div className="pt-3 pb-1 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-espresso/50 text-[10px] uppercase font-mono tracking-wider mb-1">
                        <span>MEMORY #{String(idx + 1).padStart(2, '0')}</span>
                        <span className="font-sans text-dustyrose">★ CHERISHED</span>
                      </div>
                      <p className="font-allura text-2xl text-burgundy/90 truncate">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto p-10 rounded-2xl bg-white border border-champagne text-center shadow-lg">
            <Camera className="w-12 h-12 text-burgundy mx-auto mb-3" />
            <h3 className="font-playfair text-2xl font-bold text-espresso mb-2">
              Curating Memories
            </h3>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedPhotoIndex !== null && (
          <LightboxModal
            photo={photos[selectedPhotoIndex]}
            photos={photos}
            currentIndex={selectedPhotoIndex}
            onClose={handleCloseLightbox}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </div>
    </section>
  );
};
