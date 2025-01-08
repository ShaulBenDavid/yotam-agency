'use client';

import React from 'react';
import { FaHotel } from 'react-icons/fa';
import { CountryExtra } from '@/features/CountryExtra/CountryExtra';
import { Routes } from '@/routes';
import { forUrl } from '@/sanity/sanity.utils';
import { Attraction } from '@/sanity/types';
import { AttractionCard } from '@/components/AttractionCard';

interface CountryAttractionsProps {
  countryName: string;
  countrySlug: string;
  image: string;
  data: Attraction[];
}

export const CountryAttractions = ({
  countryName,
  image,
  countrySlug,
  data,
}: CountryAttractionsProps): JSX.Element => (
  <CountryExtra
    activityName="אטרקציות"
    activitySlug={Routes.ATTRACTIONS}
    linkText="לכל האטרקציות ב"
    icon={<FaHotel size={50} aria-hidden />}
    carouselTitle="אטרקציות ב"
    countrySlug={countrySlug}
    countryName={countryName}
    image={image}
    data={data}
    cardRender={({ title, address, mainImage }) => (
      <AttractionCard
        name={title}
        image={forUrl(mainImage).url()}
        address={address}
      />
    )}
  />
);
