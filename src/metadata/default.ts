import type { Metadata } from 'next';
import { WEBSITE_URL } from '../constants';

const url = new URL('https://www.flysan.co.il');

export const defaultMetadata: Metadata = {
  title: {
    default: 'FlySan - תכנון טיולים ביפן',
    template: '%s | FlySan',
  },
  description:
    'פלייסאן היא סוכנות נסיעות המתמחה בטיולים ליפן, עם דגש על חוויות ייחודיות, שירות אישי ותכנון מדויק. בזכות הקשרים המקומיים שלנו והאהבה לאנשים ותרבויות, אנו מציעים חבילות טיול, מלונות, סיורים מודרכים וייעוץ מקצועי לכל יעד, כך שתוכלו ליהנות מחופשה בלתי נשכחת בראש שקט.',
  metadataBase: url,
  applicationName: 'FlySan',
  authors: { name: 'FlySan צוות', url },
  creator: 'FlySan צוות',
  keywords: [
    // 'חופשות במזרח',
    // 'טיולים באסיה',
    // 'דילים למזרח',
    'טיסות זולות',
    // 'חופשה במזרח',
    'FlySan',
    // 'טיול במזרח',
    // 'בתי מלון בתאילנד',
    'בתי מלון ביפן',
    // 'בתי מלון סרי לנקה',
    // 'חופשה בתאילנד',
    'חופשה ביפן',
    // 'חופשה בסרי לנקה',
    'טיולים ביפן',
    'תכנון מסלול יפן',
    'תכנון טיול יפן',
    'פליסאן',
    'פלי סאן',
  ],
  alternates: {
    canonical: new URL(WEBSITE_URL),
  },
  generator: 'Next.js',
  publisher: 'FlySan Team',
  manifest: '/site.json',
  icons: {
    apple: {
      url: '/apple-touch-icon.png',
      type: 'image/png',
    },
    icon: [
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/safari-pinned-tab.svg',
        rel: 'mask-icon',
      },
    ],
  },
  openGraph: {
    title: 'FlySan - החופשה הבאה שלך במזרח',
    description:
      'פלייסאן היא סוכנות נסיעות המתמחה בטיולים למזרח הרחוק, עם דגש על חוויות ייחודיות, שירות אישי ותכנון מדויק. בזכות הקשרים המקומיים שלנו והאהבה לאנשים ותרבויות, אנו מציעים חבילות טיול, מלונות, סיורים מודרכים וייעוץ מקצועי לכל יעד, כך שתוכלו ליהנות מחופשה בלתי נשכחת בראש שקט.',
    url: WEBSITE_URL,
    siteName: 'FlySan',
    type: 'website',
    images: [
      {
        url: new URL('https://i.imgur.com/bRUKfyg.jpeg'),
        alt: 'Intro',
        type: 'image/jpg',
      },
    ],
  },
  twitter: {
    title: 'FlySan - החופשה הבאה שלך במזרח',
    site: '@flysan',
    description:
      'פלייסאן היא סוכנות נסיעות המתמחה בטיולים למזרח הרחוק, עם דגש על חוויות ייחודיות, שירות אישי ותכנון מדויק. בזכות הקשרים המקומיים שלנו והאהבה לאנשים ותרבויות, אנו מציעים חבילות טיול, מלונות, סיורים מודרכים וייעוץ מקצועי לכל יעד, כך שתוכלו ליהנות מחופשה בלתי נשכחת בראש שקט.',
    card: 'summary_large_image',
  },
};
