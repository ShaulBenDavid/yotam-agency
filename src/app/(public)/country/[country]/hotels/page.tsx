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
import {
  CitySlugType,
  getAllCities,
  getCitiesByCountry,
} from '@/sanity/queries/city';

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

type CountryHotelsPageProps = {
  params: Promise<{
    country: Routes.SRI_LANKA | Routes.THAILAND | Routes.JAPAN;
  }>;
};

export async function generateMetadata({
  params,
}: CountryHotelsPageProps): Promise<Metadata> {
  const { country } = await params;
  if (!countries.includes(country)) {
    notFound();
  }

  const { title } = CountriesJSON[country];

  return {
    title: `מלונות ב${title}`,
    authors: {
      name: 'FlySan',
      url: `${WEBSITE_URL}/${country}/hotels`,
    },
    openGraph: {
      title: `מלונות ב${title}`,
    },
    twitter: {
      title: `מלונות ב${title}`,
    },
  };
}

const CountryHotelsPage = async ({
  params,
}: CountryHotelsPageProps): Promise<JSX.Element> => {
  const { country } = await params;
  if (!countries.includes(country) && !images[country]) {
    notFound();
  }
  const cities = await getCitiesByCountry(country);
  console.log(cities);

  return <div>s</div>;
};

export default CountryHotelsPage;
