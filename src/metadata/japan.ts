import type { Metadata } from 'next';
import { ogImages } from './ogImage';
import { absoluteUrl } from './seo';

const description =
  'תכנון טיול עצמאי ליפן יכול להיות מורכב – שפה, תרבות ותחבורה שונות ממה שמוכר לנו. ייעוץ מקצועי של FlySan הופך את התכנון לפשוט ומדויק, ואת הטיול לחוויה בלתי נשכחת.';

export const japanMetadata: Metadata = {
  // Plain string so the root layout's '%s | FlySan' template wraps it once
  // (an object with its own template here would double up the brand name).
  title: 'ייעוץ ותכנון מסלול ליפן',
  description,
  alternates: {
    canonical: absoluteUrl('/japan-planing-trip'),
  },
  keywords: [
    'יפן',
    'תכנון מסלול ליפן',
    'ייעוץ למסלול ביפן',
    'ייעוץ ותכנון מסלול ביפן',
    'תכנון טיול ליפן',
  ],
  openGraph: {
    title: 'FlySan - ייעוץ ותכנון מסלול ליפן',
    description,
    url: absoluteUrl('/japan-planing-trip'),
    siteName: 'FlySan',
    type: 'website',
    locale: 'he_IL',
    images: ogImages,
  },
  twitter: {
    title: 'FlySan - ייעוץ ותכנון מסלול ליפן',
    site: '@flysan',
    description,
    card: 'summary_large_image',
    images: ogImages,
  },
};
