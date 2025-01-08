'use client';

import React from 'react';
import { FaHotel, FaPlaneDeparture } from 'react-icons/fa';
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

interface CityProps {
  cityName: string;
  countryName: string;
  description: string;
  image: string;
  forWho: string;
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
  forWho,
  citySlug,
  countrySlug,
  hotels,
  attractions,
}: CityProps): JSX.Element => (
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
    <section className="tb:py-4 flex max-w-[900px] flex-col items-center gap-2 py-2">
      <FaPlaneDeparture size={50} aria-hidden />
      <h2 className="app-h2">אז למי {cityName} מתאימה!</h2>
      <p className="app-p">{forWho}</p>
    </section>
    {!!hotels.length && (
      <CarouselSection
        title={`אז איפה ישנים ב${cityName}`}
        data={hotels}
        linkText="לכל הבתי מלון"
        linkHref={`${citySlug}/${Routes.HOTELS}`}
        icon={<FaHotel size={50} aria-hidden />}
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
  </div>
);
