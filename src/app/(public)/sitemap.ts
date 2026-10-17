import type { MetadataRoute } from 'next';
import { WEBSITE_URL } from '@/constants';
import { Routes } from '@/routes';
import { getAllCities } from '@/sanity/queries/city';
import { getAllPostsSlug } from '@/sanity/queries/post/post.client';

type SitemapEntry = MetadataRoute.Sitemap[number];

const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/about-us', priority: 0.6 },
  { path: '/contact-us', priority: 0.6 },
  { path: '/attractions', priority: 0.7 },
  { path: '/japan-planing-trip', priority: 0.8 },
  { path: `/country/${Routes.JAPAN}`, priority: 0.9 },
  { path: `/country/${Routes.JAPAN}/attractions`, priority: 0.8 },
  { path: `/country/${Routes.JAPAN}/hotels`, priority: 0.8 },
  { path: `/country/${Routes.JAPAN}/blog`, priority: 0.7 },
  { path: '/privacy-policy', priority: 0.3 },
  { path: '/accessibility', priority: 0.3 },
];

const toUrl = (path: string): string =>
  `${WEBSITE_URL}${path === '/' ? '' : path}`;

/**
 * Covers every static public route plus Japan's dynamic city and blog
 * routes (Thailand/Sri Lanka stay excluded — they're archived, not live).
 * /studio and /api are app-router routes outside this (public) segment, so
 * they're never included here.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: SitemapEntry[] = STATIC_ROUTES.map(
    ({ path, priority }) => ({
      url: toUrl(path),
      lastModified: now,
      changeFrequency: 'weekly',
      priority,
    })
  );

  const allCities = await getAllCities();
  const japanCities = allCities.filter(
    (city) => city.country === Routes.JAPAN
  );

  const cityEntries: SitemapEntry[] = japanCities.flatMap((city) => {
    const base = `/country/${Routes.JAPAN}/${city.slug.current}`;
    return [
      {
        url: toUrl(base),
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
      {
        url: toUrl(`${base}/hotels`),
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      },
      {
        url: toUrl(`${base}/attractions`),
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      },
    ];
  });

  const allPosts = await getAllPostsSlug();
  const japanPosts = allPosts.filter((post) => post.country === Routes.JAPAN);

  const postEntries: SitemapEntry[] = japanPosts.map((post) => ({
    url: toUrl(`/country/${Routes.JAPAN}/blog/${post.slug.current}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...cityEntries, ...postEntries];
}
