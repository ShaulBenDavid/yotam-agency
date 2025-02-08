import React from 'react';
import { ImageLink } from '@/components/ImageLink';
import { ImageLinkProps } from '@/components/ImageLink/ImageLink';

interface CitiesSectionProps {
  countryName: string;
  cities: ImageLinkProps[];
}

export const CitiesSection = ({
  countryName,
  cities,
}: CitiesSectionProps): JSX.Element => (
  <section className="flex w-full flex-col items-center gap-2 py-2 tb:py-4">
    <h2 className="app-h2">יעדים ב{countryName}</h2>
    <div className="grid w-full grid-cols-cards-xl-auto-fit gap-2">
      {cities.map(({ title, href, image }) => (
        <ImageLink title={title} href={href} image={image} key={href} />
      ))}
    </div>
  </section>
);
