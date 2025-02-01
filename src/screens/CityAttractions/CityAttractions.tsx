'use client';

import React from 'react';
import { Attraction } from '@/sanity/types';
import { forUrl } from '@/sanity/sanity.utils';
import { AttractionCard } from '@/components/AttractionCard';
import { CityExtra } from '@/features/CityExtra';
import { Routes } from '@/routes';

interface CityAttractionsProps {
  cityName: string;
  countryName: string;
  image: string;
  citySlug: string;
  countrySlug: string;
  attractions: Attraction[];
}

export const CityAttractions = ({
  countryName,
  cityName,
  image,
  countrySlug,
  citySlug,
  attractions,
}: CityAttractionsProps): JSX.Element => (
  <CityExtra
    activityName="אטרקציות"
    activitySlug={Routes.ATTRACTIONS}
    cityName={cityName}
    countryName={countryName}
    image={image}
    citySlug={citySlug}
    countrySlug={countrySlug}
    data={attractions}
    cardRender={({ title, description, mainImage, _id }) => (
      <AttractionCard
        key={_id}
        name={title}
        image={forUrl(mainImage).url()}
        description={description}
      />
    )}
  />
);
