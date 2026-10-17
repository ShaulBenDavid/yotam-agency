import type { Metadata } from 'next';
import { WEBSITE_URL } from '../constants';
import { ogImages } from './ogImage';

const url = new URL('https://www.flysan.co.il');

export const defaultMetadata: Metadata = {
  title: {
    default: 'FlySan - תכנון טיולים ביפן',
    template: '%s | FlySan',
  },
  description:
    'FlySan היא סוכנות נסיעות המתמחה בטיולים מותאמים אישית ליפן. אנחנו בונים לכם מסלול מדויק – לינה, תחבורה ואטרקציות, עם ידע מקומי וניסיון רב. מתכננים חכם, מטיילים רגוע 🌸',
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
    title: 'FlySan - החופשה הבאה שלך ביפן',
    description:
      'FlySan היא סוכנות נסיעות המתמחה בטיולים מותאמים אישית ליפן. אנחנו בונים לכם מסלול מדויק – לינה, תחבורה ואטרקציות, עם ידע מקומי וניסיון רב. מתכננים חכם, מטיילים רגוע 🌸',
    url: WEBSITE_URL,
    siteName: 'FlySan',
    type: 'website',
    locale: 'he_IL',
    images: ogImages,
  },
  twitter: {
    title: 'FlySan - החופשה הבאה שלך ביפן',
    site: '@flysan',
    description:
      'FlySan היא סוכנות נסיעות המתמחה בטיולים מותאמים אישית ליפן. אנחנו בונים לכם מסלול מדויק – לינה, תחבורה ואטרקציות, עם ידע מקומי וניסיון רב. מתכננים חכם, מטיילים רגוע 🌸',
    card: 'summary_large_image',
    images: ogImages,
  },
};
