import React from 'react';
import { WEBSITE_URL, contactData } from '@/constants';
import { socialLinksConfig } from '@/constants/socials';

type OrganizationJsonLdSchema = {
  '@context': 'https://schema.org';
  '@type': 'TravelAgency';
  name: string;
  url: string;
  logo: string;
  image: string;
  telephone: string;
  email: string;
  sameAs: string[];
  areaServed: { '@type': 'Country'; name: string };
  knowsAbout: string[];
};

/**
 * Site-wide TravelAgency structured data. Rendered once in the public root
 * layout so every page on the site carries the same organization markup.
 */
export const OrganizationJsonLd = (): JSX.Element => {
  const data: OrganizationJsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'FlySan',
    url: WEBSITE_URL,
    logo: `${WEBSITE_URL}/Logo.png`,
    image: `${WEBSITE_URL}/Logo.png`,
    telephone: `+${contactData.phone.replace(/[+-]/g, '')}`,
    email: contactData.email,
    sameAs: socialLinksConfig.map((social) => social.link),
    areaServed: {
      '@type': 'Country',
      name: 'Israel',
    },
    knowsAbout: ['Japan travel', 'Travel planning', 'טיולים ליפן'],
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
