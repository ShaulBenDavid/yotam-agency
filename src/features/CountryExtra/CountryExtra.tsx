import React, { Fragment } from 'react';
import { CarouselSection } from '@/screens/City/components/CarouselSection';
import { City } from '@/sanity/types';
import { Intro } from '../Intro';
import { ContactUs } from '../ContactUs';
import { ShareWithFriends } from '../ShareWithFriends';
import { transformToCityHotelStructure } from './CountryExtra.utils';
import { buildRoutePath } from '@/utils';
import { Routes } from '@/routes';
import { KlookWidget } from '@/components/Klook';
import { Section } from '@/components/Section';

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
  cid?: number;
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
  cid,
  linkText,
  cardRender,
}: CountryExtraProps<T>): JSX.Element => {
  const transformedData =
    countrySlug === Routes.SRI_LANKA ? [] : transformToCityHotelStructure(data);

  return (
    <div className="flex flex-col" id={activitySlug} tabIndex={-1}>
      <Intro
        title={`${activityName} ב-${countryName}`}
        image={image}
        maxHeight="320px"
      />
      {typeof cid === 'number' && <KlookWidget cid={cid} />}
      {countrySlug === Routes.SRI_LANKA ? (
        <Section
          ariaLabel={activityName}
          innerClassName="grid grid-cols-1 gap-4 xs:grid-cols-2 tb:grid-cols-3 tb:gap-5 md:grid-cols-4"
        >
          {data?.map((item) => (
            <Fragment key={item._id}>{cardRender(item)}</Fragment>
          ))}
        </Section>
      ) : (
        Object.entries(transformedData)?.map(
          ([citySlug, { city, data: cardData }], index) => (
            <CarouselSection
              key={citySlug}
              tone={index % 2 === 1 ? 'tint' : 'plain'}
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
