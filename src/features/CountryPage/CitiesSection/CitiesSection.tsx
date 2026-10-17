import React from 'react';
import { ImageLink } from '@/components/ImageLink';
import { ImageLinkProps } from '@/components/ImageLink/ImageLink';
import { Section } from '@/components/Section';
import { SectionHeader } from '@/components/SectionHeader';

interface CitiesSectionProps {
  countryName: string;
  cities: ImageLinkProps[];
}

export const CitiesSection = ({
  countryName,
  cities,
}: CitiesSectionProps): JSX.Element => (
  <Section>
    <SectionHeader title={`יעדים ב${countryName}`} />
    <div className="grid grid-cols-2 gap-3 max-tb:[&>*:last-child:nth-child(odd)]:col-span-2 tb:grid-cols-3 tb:gap-5">
      {cities.map(({ title, href, image }) => (
        <ImageLink title={title} href={href} image={image} key={href} />
      ))}
    </div>
  </Section>
);
