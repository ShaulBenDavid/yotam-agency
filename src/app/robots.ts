import type { MetadataRoute } from 'next';
import { WEBSITE_URL } from '@/constants';

// Allows all crawlers; keeps /studio (Sanity Studio) and /api out of the index.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio', '/api'],
    },
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
  };
}
