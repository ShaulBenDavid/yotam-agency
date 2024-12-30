'use client';

import React from 'react';
import { FaHotel } from 'react-icons/fa6';
import type { Hotel } from '@/sanity/types';
import { Carousel } from '@/components/Carousel';
import { HotelCard } from '@/components/HotelCard';
import { forUrl } from '@/sanity/sanity.utils';
import { ButtonLink } from '@/components/ButtonLink';
import { Routes } from '@/routes';
import { FaArrowLeft } from 'react-icons/fa';

interface HotelsSectionProps {
  hotels: Hotel[];
  cityName: string;
}

export const HotelsSection = ({
  hotels,
  cityName,
}: HotelsSectionProps): JSX.Element => (
  <section className="tb:py-4 flex w-full flex-col items-center gap-2 py-2">
    <FaHotel size={50} aria-hidden />
    <h2 className="app-h2">אז איפה ישנים ב{cityName}</h2>
    <Carousel
      data={hotels}
      cardRender={({
        title,
        starRating,
        price,
        reviewScore,
        address,
        mainImage,
      }) => (
        <HotelCard
          name={title}
          image={forUrl(mainImage).url()}
          address={address}
          stars={starRating}
          rate={reviewScore}
          fromPrice={price}
        />
      )}
    />
    <ButtonLink href={Routes.HOTELS} width="250px">
      לכל בתי המלון <FaArrowLeft />
    </ButtonLink>
  </section>
);
