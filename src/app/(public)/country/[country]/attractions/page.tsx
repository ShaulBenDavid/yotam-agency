import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SriLankaBImage from '@/assets/images/sriLankaB.jpg';
import ThailandBImage from '@/assets/images/thailandB.jpg';
import JapanBImage from '@/assets/images/japanB.jpg';
import CountriesJSON from '@/constants/content/countries.json';
import { Routes } from '@/routes';
import { countries } from '@/routes/routes.types';
import { WEBSITE_URL } from '@/constants';
import { CitySlugType, getAllCities } from '@/sanity/queries/city';
import { getAttractionsByCountry } from '@/sanity/queries/attraction';
import { CountryAttractions } from '@/screens/CountryAttractions';

const images = {
  [Routes.SRI_LANKA]: SriLankaBImage,
  [Routes.JAPAN]: JapanBImage,
  [Routes.THAILAND]: ThailandBImage,
};

export async function generateStaticParams() {
  const cities: CitySlugType[] = await getAllCities();
  return cities.map((city) => ({
    country: city.country,
  }));
}

type CountryAttractionsPageProps = {
  params: Promise<{
    country: Routes.SRI_LANKA | Routes.THAILAND | Routes.JAPAN;
  }>;
};

export async function generateMetadata({
  params,
}: CountryAttractionsPageProps): Promise<Metadata> {
  const { country } = await params;
  if (!countries.includes(country)) {
    notFound();
  }

  const { title } = CountriesJSON[country];

  return {
    title: `אטרקציות ב${title}`,
    authors: {
      name: 'FlySan',
      url: `${WEBSITE_URL}/${country}/hotels`,
    },
    openGraph: {
      title: `אטרקציות ב${title}`,
    },
    twitter: {
      title: `אטרקציות ב${title}`,
    },
  };
}

const CountryAttractionsPage = async ({
  params,
}: CountryAttractionsPageProps): Promise<JSX.Element> => {
  const { country } = await params;
  if (!countries.includes(country) && !images[country]) {
    notFound();
  }

  const { title } = CountriesJSON[country];
  const attractions = await getAttractionsByCountry(country);

  return (
    <CountryAttractions
      countrySlug={country}
      countryName={title}
      image={images[country].blurDataURL ?? ''}
      data={attractions}
    />
  );
};

export default CountryAttractionsPage;
