import React from 'react';
import { absoluteUrl, ogImages } from '@/metadata';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SriLankaBImage from '@/assets/images/sriLankaB.jpg';
import ThailandBImage from '@/assets/images/thailandB.jpg';
import JapanBImage from '@/assets/images/japanB.jpg';
import CountriesJSON from '@/constants/content/countries.json';
import { Routes } from '@/routes';
import { allCountries } from '@/routes/routes.types';
import { getHotelsByCountry } from '@/sanity/queries/hotel';
import { CountryHotels } from '@/screens/CountryHotels';

const images = {
  [Routes.SRI_LANKA]: SriLankaBImage,
  [Routes.JAPAN]: JapanBImage,
  [Routes.THAILAND]: ThailandBImage,
};

export function generateStaticParams() {
  return [
    // ! Archive countries for now
    // { country: Routes.SRI_LANKA },
    // { country: Routes.THAILAND },
    { country: Routes.JAPAN },
  ];
}

type CountryHotelsPageProps = {
  params: Promise<{
    country: Routes.SRI_LANKA | Routes.THAILAND | Routes.JAPAN;
  }>;
};

export async function generateMetadata({
  params,
}: CountryHotelsPageProps): Promise<Metadata> {
  const { country } = await params;
  if (!allCountries.includes(country)) {
    notFound();
  }

  const { title } = CountriesJSON[country];
  const pageTitle = `מלונות ב${title}`;
  const description = `מחפשים מלון ל${title}? FlySan ממליצה על בתי המלון והריוקנים הכי מתאימים, מתקציב ועד יוקרה, לכל חלקי ${title}.`;
  const url = absoluteUrl(`/country/${country}/hotels`);

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    authors: {
      name: 'FlySan',
      url,
    },
    openGraph: {
      images: ogImages,
      title: pageTitle,
      description,
      url,
      siteName: 'FlySan',
      type: 'website',
      locale: 'he_IL',
    },
    twitter: {
      images: ogImages,
      title: pageTitle,
      description,
      card: 'summary_large_image',
    },
  };
}

const CountryHotelsPage = async ({
  params,
}: CountryHotelsPageProps): Promise<JSX.Element> => {
  const { country } = await params;
  if (!allCountries.includes(country) && !images[country]) {
    notFound();
  }

  const { title } = CountriesJSON[country];
  const hotels = await getHotelsByCountry(country);

  return (
    <CountryHotels
      countrySlug={country}
      countryName={title}
      image={images[country].blurDataURL ?? ''}
      data={hotels}
    />
  );
};

export default CountryHotelsPage;
