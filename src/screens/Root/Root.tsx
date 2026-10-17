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
import { SocialButtons } from './components/SocialButtons';

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
    <div className="flex flex-col">
      <Intro
        title={<Logo width={320} className="mx-auto h-auto w-[min(72vw,360px)]" />}
        image={JapanImage.src}
        minHeight="420px"
        maxHeight="640px"
      />

      {/* <Countries /> */}
      {!!transformedCitiesLink?.length && (
        <CitiesSection countryName="יפן" cities={transformedCitiesLink} />
      )}
      <SocialButtons />
      <ContactUs />
      <WhyUs />

      <div className="ds-container py-10 empty:hidden tb:py-14">
        <div
          className="elfsight-app-0ccda39a-87b9-45d4-8ffc-ca63c7e79275"
          data-elfsight-app-lazy
        ></div>
      </div>
      <ShareWithFriends />
    </div>
  );
};
