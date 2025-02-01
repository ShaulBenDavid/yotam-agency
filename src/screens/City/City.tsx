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
import {
  AttractionModal,
  useAttractionModal,
} from '@/features/AttractionModal';

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
  const {
    onShowAttraction,
    onCloseAttraction,
    attractionModalRef,
    attractionModalData,
  } = useAttractionModal();

  return (
    <div
      className="flex flex-col items-center gap-2 pb-8 tb:gap-2"
      id={citySlug}
      tabIndex={-1}
    >
      <Intro
        title={`${countryName} - ${cityName}`}
        image={image}
        maxHeight="250px"
      />
      <div className="max-w-[900px] py-2 tb:py-4">
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
          <hr className="my-6 w-full border-primary-950" aria-hidden />
          <CarouselSection
            title={`אז מה עושים ב${cityName}`}
            data={attractions}
            linkText="לכל האטרקציות"
            linkHref={`${citySlug}/${Routes.ATTRACTIONS}`}
            icon={<MdOutlineAttractions size={50} aria-hidden />}
            cardRender={(params) => (
              <AttractionCard
                name={params.title}
                image={forUrl(params.mainImage).url()}
                description={params.description}
                onClick={() => onShowAttraction(params)}
              />
            )}
          />
        </>
      )}

      <ContactUs />
      <ShareWithFriends url={`/${Routes.COUNTRY}/${countrySlug}/${citySlug}`} />
      {hotelModalData && (
        <HotelModal
          onClose={onClose}
          ref={hotelModalRef}
          data={hotelModalData}
        />
      )}
      {attractionModalData && (
        <AttractionModal
          onClose={onCloseAttraction}
          ref={attractionModalRef}
          data={attractionModalData}
        />
      )}
    </div>
  );
};
