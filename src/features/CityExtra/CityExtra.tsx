import React from 'react';
import { ContactUs } from '@/features/ContactUs';
import { Intro } from '@/features/Intro';
import { ShareWithFriends } from '../ShareWithFriends';

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
    className="tb:gap-2 flex flex-col items-center gap-2 pb-8"
    id={activitySlug}
    tabIndex={-1}
  >
    <Intro
      title={`${activityName} ב-${cityName} ${countryName}`}
      image={image}
      maxHeight="250px"
    />
    <section
      className="tb:py-4 grid-cols-cards-xl-auto-fit grid w-full gap-6 py-2"
      aria-label={activityName}
    >
      {data?.map((item) => cardRender(item))}
    </section>
    <ContactUs />
    <ShareWithFriends
      title="אהבת?! ספר לחברים"
      description="שלח לחברים ומצא פרטנרים לטיול עוד היום!"
      url={`/${countrySlug}/${citySlug}/${activitySlug}`}
    />
  </div>
);
