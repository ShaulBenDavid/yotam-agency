import React from 'react';

export type BreadcrumbItem = {
  name: string;
  url: string;
};

type BreadcrumbJsonLdSchema = {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: {
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }[];
};

type BreadcrumbJsonLdProps = {
  items: BreadcrumbItem[];
};

/** Renders a BreadcrumbList schema for a country/city style page trail. */
export const BreadcrumbJsonLd = ({
  items,
}: BreadcrumbJsonLdProps): JSX.Element => {
  const data: BreadcrumbJsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
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
