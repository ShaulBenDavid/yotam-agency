'use client';

import React from 'react';
import { forUrl } from '@/sanity/sanity.utils';
import { CityExtra } from '@/features/CityExtra';
import { Routes } from '@/routes';
import { HotelCard } from '@/components/HotelCard';
import { Hotel } from '@/sanity/types';

interface CityHotelsProps {
  cityName: string;
  countryName: string;
  image: string;
  citySlug: string;
  countrySlug: string;
  hotels: Hotel[];
}

export const CityHotels = ({
  countryName,
  cityName,
  image,
  countrySlug,
  citySlug,
  hotels,
}: CityHotelsProps): JSX.Element => (
  <CityExtra
    activityName="מלונות"
    activitySlug={Routes.HOTELS}
    cityName={cityName}
    countryName={countryName}
    image={image}
    citySlug={citySlug}
    countrySlug={countrySlug}
    data={hotels}
    cardRender={({
      title,
      starRating,
      price,
      reviewScore,
      address,
      mainImage,
      mapLink,
    }) => (
      <HotelCard
        name={title}
        image={forUrl(mainImage).url()}
        address={address}
        stars={starRating}
        rate={reviewScore}
        fromPrice={price}
        mapLink={mapLink}
      />
    )}
  />
);
