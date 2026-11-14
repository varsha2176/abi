/**
 * =======================================================================
 * THE ABISHEK EXPERIENCE — CENTRAL SITE CONTENT CONFIGURATION
 * =======================================================================
 */

export interface SiteContent {
  recipient: {
    name: string;
    nickname: string;
    title: string;
    speciality: string;
    alias: string;
    year: string;
  };
  intro: {
    topBadge: string;
    heading: string;
    subheading: string;
    buttonText: string;
    hintText: string;
    envelopePreview: {
      tag: string;
      title: string;
      subtitle: string;
      signature: string;
    };
  };
  hero: {
    editionBadge: string;
    mainTitle: string;
    nameHeading: string;
    subtext: string;
    quote: string;
  };
  mainCharacter: {
    title: string;
    subtitle: string;
    badge: string;
    profile: {
      name: string;
      alias: string;
      title: string;
      speciality: string;
      vibe: string;
      superpower: string;
    };
    quote: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    badge: string;
    description: string;
    defaultCaptions: string[];
  };
  littleThings: {
    title: string;
    subtitle: string;
    notes: Array<{
      id: number;
      tag: string;
      text: string;
      accent?: string;
    }>;
  };
  mrVarsha: {
    teaser: string;
    headline: string;
    tagline: string;
    quote: string;
    description: string;
    specs: Array<{ label: string; value: string }>;
  };
  letter: {
    salutation: string;
    paragraphs: string[];
    highlightParagraph: string;
    closingWish: string;
    signOff: string;
    signature: string;
    dateText: string;
  };
  finalMoment: {
    title: string;
    calligraphy: string;
    caption: string;
  };
  finale: {
    badge: string;
    line1: string;
    line2: string;
    mainGreeting: string;
    subtext: string;
    replayButton: string;
    footerText: string;
    credits: string;
  };
  music: {
    audioSrc: string;
    trackTitle: string;
  };
}

export const siteContent: SiteContent = {
  recipient: {
    name: "Abishek",
    nickname: "Mr. Varsha",
    title: "My Favourite Human",
    speciality: "Being Absolutely Himself",
    alias: "MR. VARSHA",
    year: "2026",
  },

  intro: {
    topBadge: "A SPECIAL DAY · A SPECIAL PERSON",
    heading: "Something beautiful\nis waiting for you.",
    subheading: "An experience made with love, exclusively for Abishek.",
    buttonText: "OPEN YOUR SURPRISE",
    hintText: "take a little journey ↓",
    envelopePreview: {
      tag: "A LITTLE SOMETHING FOR SOMEONE SPECIAL",
      title: "Dear Abishek,",
      subtitle: "your little world awaits.",
      signature: "— MR. VARSHA —",
    },
  },

  hero: {
    editionBadge: "THE BIRTHDAY EDITION · 2026",
    mainTitle: "HAPPY BIRTHDAY",
    nameHeading: "ABISHEK",
    subtext: "Today, the universe celebrates you.",
    quote: "Some people make ordinary days extraordinary. This little universe exists to celebrate one of them.",
  },

  mainCharacter: {
    title: "THE MAIN CHARACTER.",
    subtitle: "Obviously, it's you.",
    badge: "PERSON OF THE YEAR · VOLUME 2026",
    profile: {
      name: "Abishek",
      alias: "Mr. Varsha",
      title: "My Favourite Person",
      speciality: "Being Absolutely Himself",
      vibe: "Unapologetically genuine & effortlessly charming",
      superpower: "Lighting up every room without even trying",
    },
    quote: "A masterpiece in human form — an original, one of one.",
  },

  gallery: {
    title: "MEMORIES.",
    subtitle: "a thousand little feelings.",
    badge: "CURATED COLLECTION OF MEMORIES",
    description: "Every photograph is a doorway to a moment worth cherishing forever.",
    defaultCaptions: [
      "A moment worth keeping.",
      "One for the memories.",
      "This smile.",
      "A little piece of happiness.",
      "Forever a favourite frame.",
      "In every frame, pure magic.",
      "The quiet little joys.",
      "My favourite snapshot in time.",
      "Golden moments with you.",
      "Proof that warmth exists.",
      "Pure sunshine in human form.",
      "A memory etched in gold.",
      "The kind of laughter that stays.",
      "Unfiltered and utterly genuine.",
      "The simplest moments shine brightest.",
      "Captured forever in my heart.",
      "Never not making me smile.",
      "The world through your gentle eyes.",
      "Another sweet chapter documented.",
      "Grace, warmth, and all the charm.",
      "Moments that need no words.",
      "Still my favourite photo.",
      "Every glance is a story.",
      "Treasured beyond measure.",
      "To the one who means the world.",
    ],
  },

  littleThings: {
    title: "IT'S THE LITTLE THINGS.",
    subtitle: "the million little reasons I admire you.",
    notes: [
      {
        id: 1,
        tag: "NOTE 01",
        text: "I could admire you a thousand times and still find a thousand more reasons to.",
        accent: "dustyrose",
      },
      {
        id: 2,
        tag: "NOTE 02",
        text: "The way you chase your dreams makes me so incredibly proud of you.",
        accent: "champagne",
      },
      {
        id: 3,
        tag: "NOTE 03",
        text: "I love the person you are, and even more, the person you're becoming.",
        accent: "blush",
      },
      {
        id: 4,
        tag: "NOTE 04",
        text: "Even on your ordinary days, there's something extraordinary about you.",
        accent: "burgundy",
      },
      {
        id: 5,
        tag: "NOTE 05",
        text: "I hope you see yourself through my eyes, just once, and understand how special you truly are.",
        accent: "dustyrose",
      },
      {
        id: 6,
        tag: "NOTE 06",
        text: "If I had to choose my favourite person in this entire world, I'd find my way back to you every single time.",
        accent: "champagne",
      },
    ],
  },

  mrVarsha: {
    teaser: "LADIES AND GENTLEMEN...",
    headline: "MR. VARSHA.",
    tagline: "An original. A classic. One of one.",
    quote: "If love had a favourite person, it would always be you.",
    description: "Some people become a part of your life, but you became a part of my heart. You are my favourite thought, my safest feeling, my happiest place, and the person I never want to stop choosing. I don't need a perfect world; having you in mine is more than enough.",
    specs: [
      { label: "MY FAVOURITE PERSON", value: "You, in every lifetime." },
      { label: "MY HAPPY PLACE", value: "Wherever you are." },
      { label: "MY GREATEST BLESSING", value: "Having you in my life." },
      { label: "MY FOREVER DREAM", value: "A lifetime of us." },
      { label: "MY HEART'S CHOICE", value: "Always Abishek." },
    ],
  },

  letter: {
    salutation: "DEAR ABISHEK,",
    paragraphs: [
      "A very, very Happy Birthday to you, my love! ❤️",
      "I honestly don't think words will ever be enough to explain how grateful I am to have you in my life. Having you by my side is one of the most beautiful things that has ever happened to me, and I feel so lucky to call you mine.",
      "I wish you nothing but happiness, success, good health, endless opportunities, and all the beautiful things your heart has ever wished for. I hope this new chapter of your life brings you closer to every dream you've ever had. And I hope that, somewhere in all those dreams, you see a beautiful future with me too.",
      "I dream of a future with you — a life filled with love, laughter, silly little fights, endless conversations, and countless memories. I dream of us growing together, achieving our dreams together, and one day having our own cute little family. A little home filled with love, warmth, happiness, and the two of us choosing each other every single day.",
      "I want you to know that I would do anything to see that beautiful smile on your face. Your happiness means so much to me, and I never want you to forget how loved, valued, and special you are. I'll always want to stand beside you, support you, celebrate your victories, hold your hand through difficult days, and remind you that you never have to face anything alone.",
      "Thank you for being you. Thank you for coming into my life and making it so much more beautiful. I am genuinely, endlessly grateful for you, and I hope I get to celebrate countless more birthdays with you.",
      "No matter what life brings, I hope we keep choosing each other, keep growing together, and keep making our little world more beautiful.",
    ],
    highlightParagraph: "I love you more than words could ever explain, Abishek.",
    closingWish: "Happy Birthday once again, my favourite human. Here's to your dreams, our future, our little family someday, and a lifetime of beautiful memories together. ❤️",
    signOff: "With all my love,",
    signature: "Forever yours.",
    dateText: "The Birthday Edition · 2026",
  },

  finalMoment: {
    title: "IF I COULD FRAME ONE THING...",
    calligraphy: "it would be this moment.",
    caption: "A single second frozen in time, holding everything words cannot say.",
  },

  finale: {
    badge: "CHAPTER 2026",
    line1: "AND JUST LIKE THAT...",
    line2: "ANOTHER CHAPTER BEGINS.",
    mainGreeting: "HAPPY BIRTHDAY, ABISHEK.",
    subtext: "May this year be your softest, happiest, and most unforgettable yet.",
    replayButton: "REPLAY THE MAGIC",
    footerText: "MADE WITH LOVE. JUST FOR YOU.",
    credits: "THE ABISHEK EXPERIENCE · BIRTHDAY EDITION 2026",
  },

  music: {
    audioSrc: "/music.mp3",
    trackTitle: "Uyire Un Uyirena",
  },
};
