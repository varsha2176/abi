import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Sparkles } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Prologue', href: '#' },
    { name: 'Main Character', href: '#main-character' },
    { name: 'Memories', href: '#gallery' },
    { name: 'Mr. Varsha', href: '#mr-varsha' },
    { name: 'The Letter', href: '#letter' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/90 backdrop-blur-md shadow-sm border-b border-champagne/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Brand Monogram */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-bodoni font-bold text-lg sm:text-xl tracking-widest text-espresso uppercase group-hover:text-burgundy transition-colors">
            {siteContent.recipient.name}
          </span>
          <span className="text-xs uppercase tracking-widest text-dustyrose font-mono">
            / 2026
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-medium text-espresso/70 hover:text-burgundy transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Badge / Monogram Pill */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-champagne bg-white/60 text-[11px] font-mono tracking-widest text-burgundy">
          <Sparkles className="w-3 h-3 text-dustyrose" />
          <span>{siteContent.recipient.nickname}</span>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
          className="md:hidden p-2 rounded-lg text-espresso hover:text-burgundy"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory border-b border-champagne/60 px-6 py-6 shadow-xl space-y-4">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-[0.2em] font-medium text-espresso py-1 border-b border-champagne/20"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex items-center gap-2 text-xs text-burgundy font-medium">
            <Heart className="w-3.5 h-3.5 fill-dustyrose text-dustyrose" />
            <span>A Little Universe Made For One Person</span>
          </div>
        </div>
      )}
    </header>
  );
};
