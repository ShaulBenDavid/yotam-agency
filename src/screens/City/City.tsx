import React from 'react';
import { FaPlaneDeparture } from 'react-icons/fa';
import { Intro } from '@/screens/Root/components/Intro';
import { CityLinkType } from '@/sanity/queries/city';
import { Hotel } from '@/sanity/types';
import { ShareWithFriends } from '../../features/ShareWithFriends';
import { ContactUs } from '../Root/components/ContactUs';
import { HotelsSection } from './components/HotelsSection';

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
    {!!hotels.length && <HotelsSection cityName={cityName} hotels={hotels} />}
    <ContactUs />
    <ShareWithFriends
      title="אהבת?! ספר לחברים"
      description="שלח לחברים ומצא פרטנרים לטיול עוד היום!"
      url={`/${countrySlug}/${citySlug}`}
    />
  </div>
);
