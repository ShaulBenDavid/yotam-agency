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
import { getCity } from '@/sanity/queries/city';
import { CityHotels } from '@/screens/CityHotels';
import { getHotels } from '@/sanity/queries/hotel';

const images = {
  [Routes.SRI_LANKA]: SriLankaBImage,
  [Routes.JAPAN]: JapanBImage,
  [Routes.THAILAND]: ThailandBImage,
};

type CityHotelsPageProps = {
  params: Promise<{
    country: Routes.SRI_LANKA | Routes.THAILAND | Routes.JAPAN;
    city: string;
  }>;
};

export async function generateMetadata({
  params,
}: CityHotelsPageProps): Promise<Metadata> {
  const { country, city } = await params;
  if (!countries.includes(country)) {
    notFound();
  }

  return {
    title: city,
    authors: {
      name: 'FlySan',
      url: `${WEBSITE_URL}/${country}/${city}/hotels`,
    },
    openGraph: {
      title: city,
    },
    twitter: {
      title: city,
    },
  };
}

const CityHotelsPage = async ({
  params,
}: CityHotelsPageProps): Promise<JSX.Element> => {
  const { country, city: citySlug } = await params;
  if (!countries.includes(country)) {
    notFound();
  }

  const cityData = await getCity(citySlug);
  if (!cityData?.title) {
    notFound();
  }
  const hotels = await getHotels(citySlug);

  return (
    <CityHotels
      cityName={cityData.title}
      countryName={CountriesJSON[cityData.country].title}
      image={images[cityData.country]?.blurDataURL ?? ''}
      citySlug={citySlug}
      countrySlug={country}
      hotels={hotels}
    />
  );
};

export default CityHotelsPage;
