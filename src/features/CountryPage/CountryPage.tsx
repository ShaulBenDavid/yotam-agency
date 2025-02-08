import React from 'react';
import { FaHotel } from 'react-icons/fa';
import { MdOutlineAttractions } from 'react-icons/md';
import { FcCloseUpMode } from 'react-icons/fc';
import { LuBookOpenText } from 'react-icons/lu';
import { Intro } from '@/features/Intro';
import { CityLinkType } from '@/sanity/queries/city';
import { ImageLinkProps } from '@/components/ImageLink/ImageLink';
import { forUrl } from '@/sanity/sanity.utils';
import { Routes } from '@/routes';
import { CitiesSection } from './CitiesSection';
import { ShareWithFriends } from '../ShareWithFriends';
import { ButtonLink } from '@/components/ButtonLink';

interface CountryPageProps {
  name: string;
  description: string;
  image: string;
  slug: string;
  cities?: CityLinkType[];
}

export const CountryPage = ({
  name,
  description,
  image,
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
      className="flex flex-col items-center gap-2 pb-8 tb:gap-2"
      tabIndex={-1}
      id={slug}
    >
      <Intro title={name} image={image} maxHeight="400px" />
      <div className="max-w-[900px] py-2 tb:py-4">
        <p className="app-p">{description}</p>
      </div>
      <FcCloseUpMode size={50} aria-hidden />
      {!!transformedCitiesLink?.length && (
        <CitiesSection countryName={name} cities={transformedCitiesLink} />
      )}
      <section className="flex flex-col items-center gap-2 py-2 tb:py-4">
        <h2 className="app-h2">למידע נוסף</h2>
        <div className="flex flex-row flex-wrap justify-center gap-2">
          <ButtonLink href={`${slug}/${Routes.HOTELS}`} width="fit-content">
            בתי במלון <FaHotel aria-hidden className="mr-2" size={24} />
          </ButtonLink>
          <ButtonLink
            href={`${slug}/${Routes.ATTRACTIONS}`}
            width="fit-content"
          >
            אטרקציות
            <MdOutlineAttractions aria-hidden className="mr-2" size={24} />
          </ButtonLink>
          <ButtonLink href={`${slug}/${Routes.BLOG}`} width="fit-content">
            בלוגים
            <LuBookOpenText aria-hidden className="mr-2" size={24} />
          </ButtonLink>
        </div>
      </section>
      <ShareWithFriends url={`/${Routes.COUNTRY}/${slug}`} />
    </div>
  );
};
