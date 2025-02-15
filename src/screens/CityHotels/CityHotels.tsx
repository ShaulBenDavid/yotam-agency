'use client';

import React from 'react';
import { forUrl } from '@/sanity/sanity.utils';
import { CityExtra } from '@/features/CityExtra';
import { Routes } from '@/routes';
import { HotelCard } from '@/components/HotelCard';
import { Hotel } from '@/sanity/types';
import { HotelModal, useHotelModal } from '@/features/HotelModal';

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
}: CityHotelsProps): JSX.Element => {
  const { onShow, onClose, hotelModalRef, hotelModalData } = useHotelModal();

  return (
    <>
      <CityExtra
        activityName="מלונות"
        activitySlug={Routes.HOTELS}
        cityName={cityName}
        countryName={countryName}
        image={image}
        citySlug={citySlug}
        countrySlug={countrySlug}
        data={hotels}
        cardRender={(params) => (
          <HotelCard
            name={params.title}
            image={forUrl(params.mainImage).url()}
            address={params.address}
            stars={params.starRating}
            rate={params.reviewScore}
            fromPrice={params?.price}
            mapLink={params.mapLink}
            onClick={() => onShow(params)}
          />
        )}
      />
      <HotelModal onClose={onClose} ref={hotelModalRef} data={hotelModalData} />
    </>
  );
};
