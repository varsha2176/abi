import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export interface AudioPlayerHandle {
  play: () => void;
  pause: () => void;
}

export const AudioPlayer = forwardRef<AudioPlayerHandle>((_, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(`${import.meta.env.BASE_URL}music.mp3`);
    audio.loop = true;
    audioRef.current = audio;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.pause();
    };
  }, []);

  useImperativeHandle(ref, () => ({
    play: () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Handled gracefully if browser policy delays
        });
      }
    },
    pause: () => {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  }));

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Floating Audio Button */}
      <button
        onClick={togglePlay}
        aria-label="Toggle background music"
        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-ivory/95 hover:bg-white text-espresso shadow-xl backdrop-blur-md border border-champagne/60 hover:border-burgundy/40 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Sound Wave Animation Bars */}
        <div className="flex items-center gap-0.5 h-3.5">
          <span
            className={`w-0.5 bg-burgundy rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-pulse h-3.5' : 'h-1.5 opacity-40'
            }`}
          />
          <span
            className={`w-0.5 bg-burgundy rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-pulse h-2.5 delay-75' : 'h-2.5 opacity-60'
            }`}
          />
          <span
            className={`w-0.5 bg-burgundy rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-pulse h-4 delay-150' : 'h-1 opacity-30'
            }`}
          />
          <span
            className={`w-0.5 bg-burgundy rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-pulse h-3 delay-100' : 'h-2 opacity-50'
            }`}
          />
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-burgundy hidden sm:inline leading-tight">
            Uyire Un Uyirena
          </span>
          <span className="text-[9px] uppercase tracking-widest text-espresso/60 hidden sm:inline leading-tight">
            {isPlaying ? 'Now Playing' : 'Tap to Play'}
          </span>
        </div>

        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-burgundy ml-1" />
        ) : (
          <VolumeX className="w-4 h-4 text-espresso/40 group-hover:text-espresso/70 ml-1" />
        )}
      </button>
    </div>
  );
});
