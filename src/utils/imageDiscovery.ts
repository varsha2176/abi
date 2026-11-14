import { siteContent } from '../config/siteContent';

export interface PhotoItem {
  id: number;
  url: string;
  filename: string;
  caption: string;
  width: number;
  height: number;
  ratio: number;
  aspect: 'portrait' | 'landscape' | 'square' | 'tall';
}

const photoMetadataList: Array<{
  filename: string;
  width: number;
  height: number;
  aspect: PhotoItem['aspect'];
  caption?: string;
}> = [
  // Wide landscape photo specifically paired with "Every glance is a story."
  { filename: "IMG-20260629-WA0202.jpg", width: 4032, height: 3024, aspect: "landscape", caption: "Every glance is a story." },
  { filename: "IMG-20260629-WA0247.jpg", width: 2316, height: 3088, aspect: "portrait", caption: "A moment worth keeping." },
  { filename: "IMG-20260629-WA0288.jpg", width: 3024, height: 4032, aspect: "portrait", caption: "One for the memories." },
  { filename: "IMG-20260629-WA0296.jpg", width: 3024, height: 4032, aspect: "portrait", caption: "This smile." },
  { filename: "IMG-20260705-WA0039.jpg", width: 900, height: 1600, aspect: "tall", caption: "A little piece of happiness." },
  { filename: "IMG-20260705-WA0041.jpg", width: 720, height: 1280, aspect: "tall", caption: "Forever a favourite frame." },
  { filename: "IMG-20260725-WA0099.jpg", width: 960, height: 1280, aspect: "portrait", caption: "In every frame, pure magic." },
  { filename: "IMG-20260725-WA0151.jpg", width: 3024, height: 4032, aspect: "portrait", caption: "The quiet little joys." },
  { filename: "IMG-20260725-WA0220.jpg", width: 3024, height: 4032, aspect: "portrait", caption: "My favourite snapshot in time." },
  { filename: "IMG-20260725-WA0245.jpg", width: 3024, height: 4032, aspect: "portrait", caption: "Golden moments with you." },
  { filename: "IMG-20260801-WA0178.jpg", width: 3024, height: 4032, aspect: "portrait", caption: "Proof that warmth exists." },
  { filename: "IMG-20260801-WA0184.jpg", width: 3024, height: 4032, aspect: "portrait", caption: "Pure sunshine in human form." },
  { filename: "IMG-20260808-WA0209.jpg", width: 3024, height: 4032, aspect: "portrait", caption: "A memory etched in gold." },
  { filename: "IMG-20261018-WA0009.jpg", width: 637, height: 1280, aspect: "tall", caption: "The kind of laughter that stays." },
  { filename: "IMG-20261018-WA0060.jpg", width: 3120, height: 4160, aspect: "portrait", caption: "Unfiltered and utterly genuine." },
  { filename: "IMG_20260709_180557.jpg", width: 1816, height: 3376, aspect: "tall", caption: "The simplest moments shine brightest." },
  { filename: "IMG_20260801_190314.jpg", width: 1840, height: 4096, aspect: "tall", caption: "Captured forever in my heart." },
  { filename: "IMG_20260809_121147.jpg", width: 3072, height: 4096, aspect: "portrait", caption: "Never not making me smile." },
  { filename: "IMG_20260924_232629.jpg", width: 960, height: 1280, aspect: "portrait", caption: "The world through your gentle eyes." },
  { filename: "IMG_20261011_233953.jpg", width: 4096, height: 3072, aspect: "landscape", caption: "Treasured beyond measure." },
  { filename: "IMG_20261015_212529.jpg", width: 1080, height: 632, aspect: "landscape", caption: "Moments that need no words." },
  { filename: "photo1.png", width: 540, height: 685, aspect: "portrait", caption: "To the one who means the world." },
  { filename: "Screenshot_20260628_235405.jpg", width: 1080, height: 2392, aspect: "landscape", caption: "Another sweet chapter documented." },
  { filename: "Screenshot_20260823_104557.jpg", width: 1080, height: 1410, aspect: "portrait", caption: "Grace, warmth, and all the charm." },
  { filename: "Screenshot_20261114_183221.jpg", width: 1080, height: 1683, aspect: "portrait", caption: "Still my favourite photo." },
];

export const discoveredPhotos: PhotoItem[] = photoMetadataList.map((meta, index) => {
  return {
    id: index + 1,
    url: `/image/${meta.filename}`,
    filename: meta.filename,
    caption: meta.caption || siteContent.gallery.defaultCaptions[index % siteContent.gallery.defaultCaptions.length],
    width: meta.width,
    height: meta.height,
    ratio: Math.round((meta.width / meta.height) * 100) / 100,
    aspect: meta.aspect,
  };
});

export const hasUserPhotos = discoveredPhotos.length > 0;

/**
 * Hero Photo: Clean high-res portrait of Abishek
 */
export function getHeroPhoto(): PhotoItem | null {
  return discoveredPhotos.find(p => p.filename === 'photo1.png') ||
         discoveredPhotos.find(p => p.filename === 'IMG_20260809_121147.jpg') ||
         discoveredPhotos[0] || null;
}

/**
 * Main Character Section: Two prominent portraits
 */
export function getMainCharacterPhotos(): PhotoItem[] {
  const photoA = discoveredPhotos.find(p => p.filename === 'IMG-20260725-WA0151.jpg') || discoveredPhotos[1];
  const photoB = discoveredPhotos.find(p => p.filename === 'IMG-20260801-WA0184.jpg') || discoveredPhotos[2];
  return [photoA, photoB];
}

/**
 * Mr. Varsha Showcase: An iconic stylish portrait
 */
export function getMrVarshaPhoto(): PhotoItem | null {
  return discoveredPhotos.find(p => p.filename === 'IMG-20261018-WA0060.jpg') ||
         discoveredPhotos.find(p => p.filename === 'IMG-20260808-WA0209.jpg') ||
         discoveredPhotos[3];
}

/**
 * Final Moment Photo: The grand cinematic landscape
 */
export function getFinalMomentPhoto(): PhotoItem | null {
  return discoveredPhotos.find(p => p.filename === 'IMG_20261011_233953.jpg') ||
         discoveredPhotos.find(p => p.filename === 'IMG-20260629-WA0202.jpg') ||
         discoveredPhotos[discoveredPhotos.length - 1];
}

/**
 * All memories for the gallery
 */
export function getAllGalleryPhotos(): PhotoItem[] {
  return discoveredPhotos;
}
