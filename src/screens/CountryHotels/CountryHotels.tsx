'use client';

import React from 'react';
import { FaHotel } from 'react-icons/fa';
import { HotelCard } from '@/components/HotelCard';
import { CountryExtra } from '@/features/CountryExtra/CountryExtra';
import { Routes } from '@/routes';
import { forUrl } from '@/sanity/sanity.utils';
import { Hotel } from '@/sanity/types';

interface CountryHotelsProps {
  countryName: string;
  countrySlug: string;
  image: string;
  data: Hotel[];
}

export const CountryHotels = ({
  countryName,
  image,
  countrySlug,
  data,
}: CountryHotelsProps): JSX.Element => (
  <CountryExtra
    activityName="מלונות"
    activitySlug={Routes.HOTELS}
    linkText="לכל המלונות ב"
    icon={<FaHotel size={50} aria-hidden />}
    carouselTitle="בתי מלון ב"
    countrySlug={countrySlug}
    countryName={countryName}
    image={image}
    data={data}
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
