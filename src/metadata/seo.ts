import { WEBSITE_URL } from '../constants';

/**
 * Builds an absolute canonical URL for a given site path.
 * Always returns a URL rooted at the production domain, regardless of
 * leading/trailing slashes on the input path.
 */
export const absoluteUrl = (path: string): string => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${WEBSITE_URL}${normalized === '/' ? '' : normalized}`;
};

/**
 * Trims a CMS-sourced description down to a safe meta-description length
 * without cutting mid-word, so dynamic (Sanity) content never produces an
 * overly long <meta name="description">.
 */
export const truncateDescription = (text: string, maxLength = 160): string => {
  if (!text || text.length <= maxLength) return text;

  const sliced = text.slice(0, maxLength);
  const lastSpace = sliced.lastIndexOf(' ');
  const safe = lastSpace > 0 ? sliced.slice(0, lastSpace) : sliced;

  return `${safe.trim()}…`;
};
