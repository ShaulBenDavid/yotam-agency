'use client';

import React from 'react';
import { FaHotel } from 'react-icons/fa';
import { Intro } from '@/features/Intro';
import { CityLinkType } from '@/sanity/queries/city';
import { Attraction, Hotel } from '@/sanity/types';
import { HotelCard } from '@/components/HotelCard';
import { forUrl } from '@/sanity/sanity.utils';
import { ShareWithFriends } from '../../features/ShareWithFriends';
import { ContactUs } from '../../features/ContactUs';
import { CarouselSection } from './components/CarouselSection';
import { AttractionCard } from '@/components/AttractionCard';
import { MdOutlineAttractions } from 'react-icons/md';
import { Routes } from '@/routes';
import { HotelModal, useHotelModal } from '@/features/HotelModal';

interface CityProps {
  cityName: string;
  countryName: string;
  description: string;
  image: string;
  citySlug: string;
  countrySlug: string;
  cities?: CityLinkType[];
  hotels: Hotel[];
  attractions: Attraction[];
}

export const City = ({
  cityName,
  countryName,
  description,
  image,
  citySlug,
  countrySlug,
  hotels,
  attractions,
}: CityProps): JSX.Element => {
  const { onShow, onClose, hotelModalRef, hotelModalData } = useHotelModal();

  return (
    <div
      className="tb:gap-2 flex flex-col items-center gap-2 pb-8"
      id={citySlug}
      tabIndex={-1}
    >
      <Intro
        title={`${countryName} - ${cityName}`}
        image={image}
        maxHeight="250px"
      />
      <div className="tb:py-4 max-w-[900px] py-2">
        <p className="app-p">{description}</p>
      </div>
      {!!hotels.length && (
        <CarouselSection
          title={`אז איפה ישנים ב${cityName}`}
          data={hotels}
          linkText="לכל הבתי מלון"
          linkHref={`${citySlug}/${Routes.HOTELS}`}
          icon={<FaHotel size={50} aria-hidden />}
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
      )}
      {!!attractions.length && (
        <>
          <hr className="border-primary-950 my-6 w-full" aria-hidden />
          <CarouselSection
            title={`אז מה עושים ב${cityName}`}
            data={attractions}
            linkText="לכל האטרקציות"
            linkHref={`${citySlug}/${Routes.ATTRACTIONS}`}
            icon={<MdOutlineAttractions size={50} aria-hidden />}
            cardRender={({ title, address, mainImage }) => (
              <AttractionCard
                name={title}
                image={forUrl(mainImage).url()}
                address={address}
              />
            )}
          />
        </>
      )}

      <ContactUs />
      <ShareWithFriends
        title="אהבת?! ספר לחברים"
        description="שלח לחברים ומצא פרטנרים לטיול עוד היום!"
        url={`/${Routes.COUNTRY}/${countrySlug}/${citySlug}`}
      />
      {hotelModalData && (
        <HotelModal
          onClose={onClose}
          ref={hotelModalRef}
          data={hotelModalData}
        />
      )}
    </div>
  );
};
