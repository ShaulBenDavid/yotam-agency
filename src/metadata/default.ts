import type { Metadata } from 'next';
import { WEBSITE_URL } from '../constants';

const url = new URL('https://www.flysan.co.il');

export const defaultMetadata: Metadata = {
  title: {
    default: 'FlySan - החופשה הבאה שלך במזרח',
    template: '%s | FlySan',
  },
  description:
    'FlySan היא חברה ישראלית המתמחה בעסקאות טיולים במזרח אסיה. מצאו את הדיל המושלם לחופשה הבאה שלכם.',
  metadataBase: url,
  applicationName: 'FlySan',
  authors: { name: 'FlySan צוות', url },
  creator: 'FlySan צוות',
  keywords: [
    'חופשות במזרח',
    'טיולים באסיה',
    'דילים למזרח',
    'טיסות זולות',
    'חופשה במזרח',
    'FlySan',
    'טיול במזרח',
    'בתי מלון בתאילנד',
    'בתי מלון ביפן',
    'בתי מלון סרי לנקה',
    'חופשה בתאילנד',
    'חופשה ביפן',
    'חופשה בסרי לנקה',
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
      'FlySan היא חברה ישראלית המתמחה בעסקאות טיולים במזרח אסיה. מצאו את הדיל המושלם לחופשה הבאה שלכם.',
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
      'FlySan היא חברה ישראלית המתמחה בעסקאות טיולים במזרח אסיה. מצאו את הדיל המושלם לחופשה הבאה שלכם.',
    card: 'summary_large_image',
  },
};
