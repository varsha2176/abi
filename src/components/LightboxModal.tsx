import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { PhotoItem } from '../utils/imageDiscovery';

interface LightboxModalProps {
  photo: PhotoItem | null;
  photos: PhotoItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  photos,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!photo) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-cinematic-dark/95 backdrop-blur-xl p-4 sm:p-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Counter Badge */}
        <div className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-champagne text-xs font-mono tracking-widest">
          <span>MEMORY</span>
          <span className="font-bold text-white">
            #{String(currentIndex + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Prev Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous photo"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white/90 transition-all hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next photo"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white/90 transition-all hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Card Container */}
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative max-w-4xl max-h-[85vh] flex flex-col items-center bg-[#241A1B] p-3 sm:p-5 rounded-2xl border border-champagne/30 shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-h-[68vh] overflow-hidden rounded-xl flex items-center justify-center">
            <img
              src={photo.url}
              alt={photo.caption}
              className="max-h-[68vh] max-w-full object-contain rounded-lg"
            />
          </div>

          {/* Caption & Details Footer */}
          <div className="w-full mt-4 pt-3 border-t border-champagne/20 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 px-2">
            <div>
              <p className="font-allura text-2xl sm:text-3xl text-dustyrose">
                {photo.caption}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-champagne/80 font-sans">
              <Heart className="w-3.5 h-3.5 fill-dustyrose text-dustyrose" />
              <span>A moment for eternity</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
