import React from 'react';
import Link from 'next/link';
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
import { Section } from '@/components/Section';
import { SectionHeader } from '@/components/SectionHeader';

const infoTileClassName =
  'group flex min-h-24 flex-col items-center justify-center gap-3 rounded-card bg-tint px-4 py-6 text-center text-[17px] font-bold text-primary-950 transition hover:-translate-y-0.5 hover:bg-primary-950 hover:text-white tb:min-h-32';

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
    <div className="flex flex-col" tabIndex={-1} id={slug}>
      <Intro title={name} image={image} minHeight="260px" maxHeight="460px" />
      <Section width="prose" className="pb-0 tb:pb-0">
        <p className="ds-body text-[17px]">{description}</p>
        <FcCloseUpMode size={44} aria-hidden className="mx-auto mt-8" />
      </Section>
      {!!transformedCitiesLink?.length && (
        <CitiesSection countryName={name} cities={transformedCitiesLink} />
      )}
      <Section className="pt-0 tb:pt-0">
        <SectionHeader title="למידע נוסף" />
        <div className="grid grid-cols-1 gap-3 xs:grid-cols-3 tb:gap-5">
          <Link href={`${slug}/${Routes.HOTELS}`} className={infoTileClassName}>
            <FaHotel aria-hidden size={26} />
            בתי במלון
          </Link>
          <Link
            href={`${slug}/${Routes.ATTRACTIONS}`}
            className={infoTileClassName}
          >
            <MdOutlineAttractions aria-hidden size={28} />
            אטרקציות
          </Link>
          <Link href={`${slug}/${Routes.BLOG}`} className={infoTileClassName}>
            <LuBookOpenText aria-hidden size={26} />
            בלוגים
          </Link>
        </div>
      </Section>
      <ShareWithFriends url={`/${Routes.COUNTRY}/${slug}`} />
    </div>
  );
};
