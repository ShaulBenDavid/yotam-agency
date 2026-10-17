import React from 'react';
import { WEBSITE_URL } from '@/constants';

type ArticleJsonLdSchema = {
  '@context': 'https://schema.org';
  '@type': 'BlogPosting';
  headline: string;
  description?: string;
  image?: string[];
  datePublished: string;
  dateModified: string;
  author: { '@type': 'Organization'; name: string };
  publisher: {
    '@type': 'Organization';
    name: string;
    logo: { '@type': 'ImageObject'; url: string };
  };
  mainEntityOfPage: { '@type': 'WebPage'; '@id': string };
};

type ArticleJsonLdProps = {
  headline: string;
  description?: string;
  imageUrl?: string;
  datePublished: string;
  dateModified: string;
  url: string;
};

/** Renders BlogPosting schema for a FlySan Japan blog article. */
export const ArticleJsonLd = ({
  headline,
  description,
  imageUrl,
  datePublished,
  dateModified,
  url,
}: ArticleJsonLdProps): JSX.Element => {
  const data: ArticleJsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    image: imageUrl ? [imageUrl] : undefined,
    datePublished,
    dateModified,
    author: { '@type': 'Organization', name: 'FlySan' },
    publisher: {
      '@type': 'Organization',
      name: 'FlySan',
      logo: { '@type': 'ImageObject', url: `${WEBSITE_URL}/Logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
};
