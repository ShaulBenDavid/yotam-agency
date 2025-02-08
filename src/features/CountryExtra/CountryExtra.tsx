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
  const transformedData =
    countrySlug === Routes.SRI_LANKA ? [] : transformToCityHotelStructure(data);

  return (
    <div
      className="flex flex-col items-center gap-2 pb-8 tb:gap-2"
      id={activitySlug}
      tabIndex={-1}
    >
      <Intro
        title={`${activityName} ב-${countryName}`}
        image={image}
        maxHeight="250px"
      />
      {countrySlug === Routes.SRI_LANKA ? (
        <section
          className="grid w-full grid-cols-cards-auto-fit gap-6 py-2 tb:grid-cols-cards-xl-auto-fit tb:py-4"
          aria-label={activityName}
        >
          {data?.map((item) => cardRender(item))}
        </section>
      ) : (
        Object.entries(transformedData)?.map(
          ([citySlug, { city, data: cardData }]) => (
            <CarouselSection
              key={citySlug}
              title={`${carouselTitle}${city.title}`}
              data={cardData}
              linkText={`${linkText}${city.title}`}
              linkHref={`/${buildRoutePath(Routes.COUNTRY, countrySlug, citySlug, activitySlug)}`}
              icon={icon}
              cardRender={(card) => cardRender(card)}
              subject={activityName}
            />
          )
        )
      )}

      <ContactUs title="לפרטים ומלונות נוספים צרו קשר" />
      <ShareWithFriends
        url={`/${Routes.COUNTRY}/${countrySlug}/${activitySlug}`}
      />
    </div>
  );
};
