import React from 'react';
import { Routes } from '@/routes';
import { ContactUs } from '@/features/ContactUs';
import { Intro } from '@/features/Intro';
import { ShareWithFriends } from '../ShareWithFriends';
import { MoreHotel } from '@/components/HotelCard/MoreHotel';

interface DataProps {
  _id: string;
}

interface CityExtraProps<T> {
  activityName: string;
  activitySlug: string;
  cityName: string;
  countryName: string;
  image: string;
  citySlug: string;
  countrySlug: string;
  data: T[];
  cardRender: (data: T) => JSX.Element;
}

export const CityExtra = <T extends DataProps>({
  activityName,
  activitySlug,
  countryName,
  cityName,
  image,
  countrySlug,
  citySlug,
  data,
  cardRender,
}: CityExtraProps<T>): JSX.Element => (
  <div
    className="flex flex-col items-center gap-2 pb-8 tb:gap-2"
    id={activitySlug}
    tabIndex={-1}
  >
    <Intro
      title={`${activityName} ב-${cityName} ${countryName}`}
      image={image}
      maxHeight="250px"
    />
    <section
      className="grid w-full grid-cols-cards-auto-fit gap-6 py-2 tb:grid-cols-cards-xl-auto-fit tb:py-4"
      aria-label={activityName}
    >
      {data?.map((item) => cardRender(item))}
      {activitySlug === 'hotels' && <MoreHotel />}
    </section>
    <ContactUs title="לפרטים ומלונות נוספים צרו קשר" />
    <ShareWithFriends
      url={`/${Routes.COUNTRY}/${countrySlug}/${citySlug}/${activitySlug}`}
    />
  </div>
);
