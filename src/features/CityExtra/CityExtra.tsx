import React, { Fragment } from 'react';
import { Routes } from '@/routes';
import { ContactUs } from '@/features/ContactUs';
import { Intro } from '@/features/Intro';
import { ShareWithFriends } from '../ShareWithFriends';
import { KlookWidget } from '@/components/Klook';
import { Section } from '@/components/Section';

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
  cid?: number;
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
  cid,
  data,
  cardRender,
}: CityExtraProps<T>): JSX.Element => (
  <div className="flex flex-col" id={activitySlug} tabIndex={-1}>
    <Intro
      title={`${activityName} ב-${cityName} ${countryName}`}
      image={image}
      maxHeight="320px"
    />
    {typeof cid === 'number' && <KlookWidget cid={cid} />}
    <Section
      ariaLabel={activityName}
      innerClassName="grid grid-cols-1 gap-4 xs:grid-cols-2 tb:grid-cols-3 tb:gap-5 md:grid-cols-4"
    >
      {data?.map((item) => (
        <Fragment key={item._id}>{cardRender(item)}</Fragment>
      ))}
    </Section>
    <ContactUs title="לפרטים ומלונות נוספים צרו קשר" />
    <ShareWithFriends
      url={`/${Routes.COUNTRY}/${countrySlug}/${citySlug}/${activitySlug}`}
    />
  </div>
);
