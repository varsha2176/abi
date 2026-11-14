import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SecretEnvelope } from './components/SecretEnvelope';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { MainCharacter } from './components/MainCharacter';
import { FramesGallery } from './components/FramesGallery';
import { LittleThings } from './components/LittleThings';
import { MrVarshaReveal } from './components/MrVarshaReveal';
import { PersonalLetter } from './components/PersonalLetter';
import { FinalPhotoMoment } from './components/FinalPhotoMoment';
import { BirthdayFinale } from './components/BirthdayFinale';
import { AudioPlayer, AudioPlayerHandle } from './components/AudioPlayer';

export const App: React.FC = () => {
  const [isUniverseOpen, setIsUniverseOpen] = useState(false);
  const audioRef = useRef<AudioPlayerHandle | null>(null);

  const handleOpenUniverse = () => {
    setIsUniverseOpen(true);
    // Start playing "Uyire Un Uyirena Naan Irupen" right on envelope open
    audioRef.current?.play();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-ivory text-espresso selection:bg-dustyrose selection:text-white relative">
      <AnimatePresence mode="wait">
        {!isUniverseOpen && (
          <SecretEnvelope key="envelope" onOpen={handleOpenUniverse} />
        )}
      </AnimatePresence>

      {/* Main Website Sections */}
      {isUniverseOpen && (
        <motion.main
          key="universe"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Subtle Navigation Bar */}
          <Navigation />

          {/* Section 02: Hero Magazine Presentation */}
          <HeroSection />

          {/* Section 03: The Main Character Profile */}
          <MainCharacter />

          {/* Section 04: Memories Photo Scrapbook & Lightbox */}
          <FramesGallery />

          {/* Section 05: It's The Little Things Notes */}
          <LittleThings />

          {/* Section 06: Mr. Varsha Cinematic Showcase */}
          <div id="mr-varsha">
            <MrVarshaReveal />
          </div>

          {/* Section 07: Digital Handwritten Love Letter */}
          <PersonalLetter />

          {/* Section 08: Final Full-Bleed Photo Moment */}
          <FinalPhotoMoment />

          {/* Section 09: Celebratory Finale & Confetti */}
          <BirthdayFinale onReplay={handleReplay} />
        </motion.main>
      )}

      {/* Background Ambient Audio Player always mounted */}
      <AudioPlayer ref={audioRef} />
    </div>
  );
};

export default App;
