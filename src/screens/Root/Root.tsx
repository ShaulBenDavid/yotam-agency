import React from 'react';
import JapanImage from '@/assets/images/jpLandImg.jpg';
import { CitiesSection } from '@/features/CountryPage/CitiesSection';
import { type CityLinkType } from '@/sanity/queries/city';
import type { ImageLinkProps } from '@/components/ImageLink/ImageLink';
import { Routes } from '@/routes';
import { forUrl } from '@/sanity/sanity.utils';
import { Logo } from '@/components/Logo';
import { Intro } from '../../features/Intro';
import { ContactUs } from '../../features/ContactUs';
import { ShareWithFriends } from '../../features/ShareWithFriends';
import { WhyUs } from './components/WhyUs';

interface RootProps {
  cities?: CityLinkType[];
}

export const Root = ({ cities }: RootProps): JSX.Element => {
  const transformedCitiesLink = cities?.map(
    ({ slug: cSlug, mainImage, country, title }): ImageLinkProps => ({
      title: title,
      href: `/${Routes.COUNTRY}/${country}/${cSlug.current}/`,
      image: forUrl(mainImage).url(),
    })
  );

  return (
    <div className="flex flex-col gap-2 pb-8 tb:gap-2">
      <Intro title={<Logo />} image={JapanImage.src} minHeight="288px" />

      {/* <Countries />
       */}
      {!!transformedCitiesLink?.length && (
        <CitiesSection countryName="יפן" cities={transformedCitiesLink} />
      )}
      <ContactUs />
      <WhyUs />
      <ShareWithFriends />
    </div>
  );
};
