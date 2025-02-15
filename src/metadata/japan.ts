import type { Metadata } from 'next';
import { WEBSITE_URL } from '../constants';

export const japanMetadata: Metadata = {
  title: {
    default: 'FlySan - ייעוץ ותכנון מסלול ליפן',
    template: '%s | FlySan',
  },
  description:
    'יפן היא מדינה מדהימה, אבל מורכבת לטיול עצמאי. התרבות, השפה, התחבורה וההרגלים המקומיים שונים ממה שרוב המטיילים מכירים. תכנון נכון יכול להפוך את החוויה שלך מחופשה מסובכת למסע בלתי נשכח. למה כדאי להיעזר בייעוץ מקצועי לתכנון טיול ליפן?',

  keywords: [
    'יפן',
    'תכנון מסלול ליפן',
    'ייעוץ למסלול ביפן',
    'ייעוץ ותכנון מסלול ביפן',
    'תכנון טיול ליפן',
    'יפן 2025',
  ],
  openGraph: {
    title: 'FlySan - ייעוץ ותכנון מסלול ליפן',
    description:
      'יפן היא מדינה מדהימה, אבל מורכבת לטיול עצמאי. התרבות, השפה, התחבורה וההרגלים המקומיים שונים ממה שרוב המטיילים מכירים. תכנון נכון יכול להפוך את החוויה שלך מחופשה מסובכת למסע בלתי נשכח. למה כדאי להיעזר בייעוץ מקצועי לתכנון טיול ליפן?',
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
    title: 'FlySan - ייעוץ ותכנון מסלול ליפן',
    site: '@flysan',
    description:
      'יפן היא מדינה מדהימה, אבל מורכבת לטיול עצמאי. התרבות, השפה, התחבורה וההרגלים המקומיים שונים ממה שרוב המטיילים מכירים. תכנון נכון יכול להפוך את החוויה שלך מחופשה מסובכת למסע בלתי נשכח. למה כדאי להיעזר בייעוץ מקצועי לתכנון טיול ליפן?',
    card: 'summary_large_image',
  },
};
