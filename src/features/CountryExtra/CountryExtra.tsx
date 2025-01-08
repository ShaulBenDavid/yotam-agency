import React from 'react';
import { CarouselSection } from '@/screens/City/components/CarouselSection';
import { City } from '@/sanity/types';
import { Intro } from '../Intro';
import { ContactUs } from '../ContactUs';
import { ShareWithFriends } from '../ShareWithFriends';
import { transformToCityHotelStructure } from './CountryExtra.utils';
import { buildRoutePath } from '@/utils';
import { Routes } from '@/routes';

export interface CountryExtraDataProps {
  _id: string;
  city: City;
}

interface CountryExtraProps<T> {
  activitySlug: string;
  activityName: string;
  countryName: string;
  countrySlug: string;
  image: string;
  carouselTitle: string;
  linkText: string;
  data: T[];
  icon: JSX.Element;
  cardRender: (data: T) => JSX.Element;
}

export const CountryExtra = <T extends CountryExtraDataProps>({
  activitySlug,
  activityName,
  countryName,
  image,
  countrySlug,
  data,
  icon,
  carouselTitle,
  linkText,
  cardRender,
}: CountryExtraProps<T>): JSX.Element => {
  const transformedData = transformToCityHotelStructure(data);

  return (
    <div
      className="tb:gap-2 flex flex-col items-center gap-2 pb-8"
      id={activitySlug}
      tabIndex={-1}
    >
      <Intro
        title={`${activityName} ב-${countryName}`}
        image={image}
        maxHeight="250px"
      />

      {Object.entries(transformedData)?.map(
        ([citySlug, { city, data: cardData }]) => (
          <CarouselSection
            key={citySlug}
            title={`${carouselTitle}${city.title}`}
            data={cardData}
            linkText={`${linkText}${city.title}`}
            linkHref={`/${buildRoutePath(Routes.COUNTRY, countrySlug, citySlug, activitySlug)}`}
            icon={icon}
            cardRender={(card) => cardRender(card)}
          />
        )
      )}
      <ContactUs />
      <ShareWithFriends
        title="אהבת?! ספר לחברים"
        description="שלח לחברים ומצא פרטנרים לטיול עוד היום!"
        url={`/${countrySlug}/${activitySlug}`}
      />
    </div>
  );
};
