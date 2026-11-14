# The Abishek Experience · Birthday Edition 2026
### A Little Universe Made For One Person

A cinematic, luxury, romantic birthday website created for **Abishek** (affectionately known as **Mr. Varsha**). 

---

## 🌟 Quick Start Guide

### 1. Add Your 25 Photographs
Copy and paste all 25 of your photographs into the `image` folder:
```
abibday/
└── image/
    ├── photo1.jpg
    ├── photo2.jpg
    ├── ...
    └── photo25.jpg
```
*Note: Any image filenames are supported (`.jpg`, `.jpeg`, `.png`, `.webp`). The website automatically detects and sorts them.*

### 2. (Optional) Add Background Music
To have romantic music play when the audio button is toggled, place an MP3 file named `music.mp3` directly into the `image` folder:
```
abibday/
└── image/
    └── music.mp3
```

### 3. Run the Development Server
Open PowerShell or your terminal in `c:\Users\aarun\OneDrive\Desktop\abibday` and run:
```bash
npm run dev
```
Then open your browser at:
```
http://localhost:5173
```
*(On mobile devices connected to your same Wi-Fi, you can open the Network URL displayed by Vite!)*

### 4. Build for Production
To generate an optimized static build:
```bash
npm run build
```
The output will be created in the `dist/` directory, ready to deploy to Netlify, Vercel, Firebase Hosting, or GitHub Pages.

---

## ✍️ How to Customize Text & The Love Letter

All messages, names, captions, and letters are centralized in **one single file**:
👉 **`src/config/siteContent.ts`**

In that file, you can edit:
- **`recipient`**: Name, nickname (*Mr. Varsha*), edition year.
- **`intro`**: Opening screen badge, heading, envelope preview seal text.
- **`hero`**: Hero typography and subtext.
- **`mainCharacter`**: Editorial dossier profile specs and quotes.
- **`gallery`**: 25 photo captions (edit any caption to match a specific picture).
- **`littleThings`**: The 6 romantic notes and observations.
- **`mrVarsha`**: Mr. Varsha cinematic teaser and specs.
- **`letter`**: The complete personal love letter, salutation, paragraphs, and signature.
- **`finale`**: Celebration text, candle wish, and replay button.

---

## 🎬 Cinematic Chapters Built

1. **Chapter 01: The Secret Envelope** — A full-screen romantic opening screen with a gold wax seal stamped with "A", delicate floating particles, and the `[ OPEN YOUR SURPRISE ]` experience reveal.
2. **Chapter 02: The Hero** — Editorial magazine cover layout with bold Bodoni Moda typography, oversized calligraphy (*"Abishek."*), and Frame 01 hero portrait.
3. **Chapter 03: The Main Character** — Editorial dossier file celebrating Mr. Varsha, his charm, personality specs, and layered photographs.
4. **Chapter 04: 25 Frames, Infinite Memories** — Extraordinary dynamic scrapbook masonry photo gallery with polaroid styling, delicate rotations, and a full-screen interactive lightbox with keyboard & mobile navigation.
5. **Chapter 05: It's The Little Things** — 6 pinned tactile editorial cards with romantic observations.
6. **Chapter 06: Mr. Varsha Edition** — Dramatic dark burgundy/espresso cinematic shift with golden borders and high-impact typography.
7. **Chapter 07: A Letter For You** — Deckled cream paper love letter with wax seal, Cormorant Garamond typography, and handwritten signature.
8. **Chapter 08: The Final Photo Moment** — Full-bleed cinematic still with dark vignette overlay and poetic typography: *"IF I COULD FRAME ONE THING... it would be this moment."*
9. **Chapter 09: The Birthday Finale** — Celebratory chapter with an interactive minimal candle to make a wish and blow, a luxury champagne & rose gold confetti burst, and `[ REPLAY THE MAGIC ]` button.
10. **Ambient Audio Player** — Discreet floating soundwave player with graceful fallback.

---
*Created with love for Abishek · 2026*
