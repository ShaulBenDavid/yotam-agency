import React from 'react';
import { FcCloseUpMode } from 'react-icons/fc';
import { Intro } from '@/features/Intro';
import { CityLinkType } from '@/sanity/queries/city';
import { ImageLinkProps } from '@/components/ImageLink/ImageLink';
import { forUrl } from '@/sanity/sanity.utils';
import { Routes } from '@/routes';
import { CitiesSection } from './CitiesSection';
import { ShareWithFriends } from '../ShareWithFriends';

interface CountryPageProps {
  name: string;
  description: string;
  image: string;
  forWho: string;
  slug: string;
  cities?: CityLinkType[];
}

export const CountryPage = ({
  name,
  description,
  image,
  forWho,
  slug,
  cities,
}: CountryPageProps): JSX.Element => {
  const transformedCitiesLink = cities?.map(
    ({ slug: cSlug, mainImage, country, title }): ImageLinkProps => ({
      title: title,
      href: `/${Routes.COUNTRY}/${country}/${cSlug.current}/`,
      image: forUrl(mainImage).url(),
    })
  );

  return (
    <div
      className="tb:gap-2 flex flex-col items-center gap-2 pb-8"
      tabIndex={-1}
      id={slug}
    >
      <Intro title={name} image={image} maxHeight="400px" />
      <div className="tb:py-4 max-w-[900px] py-2">
        <p className="app-p">{description}</p>
      </div>
      <section className="tb:py-4 flex max-w-[900px] flex-col items-center gap-2 py-2">
        <FcCloseUpMode size={50} aria-hidden />
        <h2 className="app-h2">אז למי {name} מתאימה!</h2>
        <p className="app-p">{forWho}</p>
      </section>
      {transformedCitiesLink && (
        <CitiesSection countryName={name} cities={transformedCitiesLink} />
      )}
      <ShareWithFriends
        title="אהבת?! ספר לחברים"
        description="שלח לחברים ומצא פרטנרים לטיול עוד היום!"
        url={`/${Routes.COUNTRY}/${slug}`}
      />
    </div>
  );
};
