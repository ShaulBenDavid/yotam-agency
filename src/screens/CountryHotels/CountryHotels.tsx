'use client';

import React from 'react';
import { FaHotel } from 'react-icons/fa';
import { HotelCard } from '@/components/HotelCard';
import { CountryExtra } from '@/features/CountryExtra/CountryExtra';
import { Routes } from '@/routes';
import { forUrl } from '@/sanity/sanity.utils';
import { Hotel } from '@/sanity/types';
import { HotelModal, useHotelModal } from '@/features/HotelModal';

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
}: CountryHotelsProps): JSX.Element => {
  const { onShow, onClose, hotelModalRef, hotelModalData } = useHotelModal();

  return (
    <>
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
        cardRender={(params) => (
          <HotelCard
            key={params._id}
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
      {hotelModalData && (
        <HotelModal
          onClose={onClose}
          ref={hotelModalRef}
          data={hotelModalData}
        />
      )}
    </>
  );
};
