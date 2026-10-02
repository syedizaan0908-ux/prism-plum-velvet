export const APP_NAME = "Kashuu Di — Birthday Celebration";

export const CELEBRATION_AT = new Date("2026-10-02T19:00:00+05:30");

export const PHOTOS = {
  portrait: "/photos/portrait.jpg",
  ceremony: "/photos/ceremony.jpg",
  together: "/photos/together.jpg",
} as const;

export const AUDIO_SRC = "/audio/birthday-song.mp3";

export const DUA_ARABIC =
  "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا";

export const DUA_TRANSLATION =
  "Our Lord, grant us comfort to our eyes and make us a leader for the righteous.";

export const BIRTHDAY_DUA =
  "May Allah (SWT) bless your age with Barakah, your heart with peace, your mind with wisdom, and grant you health, prosperity, and endless happiness in this world and the Next. Ameen.";

export const TRIBUTE =
  "To a mentor who guides with patience, a sister who inspires with wisdom, and a soul that spreads light wherever she goes. Kashuu Di, your presence is a blessing in all our lives. May every step of your journey be guided by Allah's infinite Mercy, and may your days be filled with endless contentment, success, and divine favor.";

export const WISHES = [
  "May Allah grant you a life full of Iman, health, happiness, and peace. Happy Birthday!",
  "May every year bring you closer to your dreams and elevate your status in both worlds.",
  "May your home always remain filled with Sukoon, love, and divine Barakah. Ameen!",
] as const;

export type GalleryItem = {
  id: string;
  src: string;
  caption: string;
  pos: string;
  aspect: string;
  wide?: boolean;
  alt: string;
};

export const GALLERY: GalleryItem[] = [
  {
    id: "light",
    src: PHOTOS.portrait,
    caption: "A Guiding Light",
    pos: "pos-portrait-her",
    aspect: "aspect-portrait",
    alt: "Kashuu Di smiling in a patterned hijab",
  },
  {
    id: "joy",
    src: PHOTOS.together,
    caption: "Moments of Joy",
    pos: "pos-together-both",
    aspect: "aspect-wide",
    wide: true,
    alt: "Kashuu Di and family sharing a joyful peace-sign moment",
  },
  {
    id: "grace",
    src: PHOTOS.ceremony,
    caption: "Grace & Elegance",
    pos: "pos-ceremony-her",
    aspect: "aspect-tall",
    alt: "Kashuu Di in ceremonial dress, a portrait of grace",
  },
  {
    id: "journey",
    src: PHOTOS.ceremony,
    caption: "Blessed Journey",
    pos: "pos-ceremony-both",
    aspect: "aspect-portrait",
    alt: "Kashuu Di beneath a canopy of roses on a blessed occasion",
  },
  {
    id: "warmth",
    src: PHOTOS.portrait,
    caption: "Wisdom & Warmth",
    pos: "pos-portrait-pair",
    aspect: "aspect-square",
    alt: "Kashuu Di with family in a warm, smiling portrait",
  },
  {
    id: "cherished",
    src: PHOTOS.together,
    caption: "Always Cherished",
    pos: "pos-together-her",
    aspect: "aspect-portrait",
    alt: "Kashuu Di in a black hijab, smiling with a peace sign",
  },
];

export const PETALS = [
  { left: 4, duration: 16, delay: 0, size: 12, sway: 28, tint: 0 },
  { left: 12, duration: 18, delay: 2.1, size: 9, sway: 36, tint: 1 },
  { left: 19, duration: 14, delay: 4.4, size: 14, sway: 22, tint: 0 },
  { left: 27, duration: 20, delay: 1.2, size: 11, sway: 40, tint: 2 },
  { left: 34, duration: 15, delay: 5.6, size: 8, sway: 18, tint: 1 },
  { left: 41, duration: 19, delay: 0.8, size: 13, sway: 32, tint: 0 },
  { left: 48, duration: 17, delay: 3.3, size: 10, sway: 26, tint: 2 },
  { left: 55, duration: 21, delay: 6.1, size: 12, sway: 34, tint: 1 },
  { left: 62, duration: 14.5, delay: 2.7, size: 9, sway: 20, tint: 0 },
  { left: 69, duration: 18.5, delay: 4.9, size: 15, sway: 38, tint: 2 },
  { left: 76, duration: 16.5, delay: 1.6, size: 11, sway: 24, tint: 1 },
  { left: 83, duration: 19.5, delay: 5.2, size: 8, sway: 30, tint: 0 },
  { left: 90, duration: 15.5, delay: 0.4, size: 13, sway: 21, tint: 2 },
  { left: 8, duration: 22, delay: 7.4, size: 10, sway: 42, tint: 1 },
  { left: 51, duration: 13.5, delay: 8.1, size: 7, sway: 16, tint: 0 },
  { left: 95, duration: 17.8, delay: 3.8, size: 12, sway: 27, tint: 2 },
] as const;

export const PARTICLES = [
  { l: 8, t: 18, d: 0, dur: 9, s: 3 },
  { l: 22, t: 42, d: 1.4, dur: 11, s: 2 },
  { l: 37, t: 12, d: 2.2, dur: 8, s: 4 },
  { l: 51, t: 68, d: 0.6, dur: 12, s: 2 },
  { l: 64, t: 28, d: 3.1, dur: 10, s: 3 },
  { l: 78, t: 54, d: 1.8, dur: 9, s: 2 },
  { l: 91, t: 16, d: 2.7, dur: 13, s: 3 },
  { l: 14, t: 76, d: 4.2, dur: 8, s: 2 },
  { l: 44, t: 36, d: 0.9, dur: 11, s: 4 },
  { l: 72, t: 82, d: 3.6, dur: 10, s: 2 },
  { l: 58, t: 8, d: 5.1, dur: 9, s: 3 },
  { l: 31, t: 58, d: 2.4, dur: 12, s: 2 },
] as const;
