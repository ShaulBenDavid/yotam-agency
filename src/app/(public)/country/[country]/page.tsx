import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CountryPage } from '@/features/CountryPage';
import SriLankaBImage from '@/assets/images/sriLankaB.jpg';
import ThailandBImage from '@/assets/images/thailandB.jpg';
import JapanBImage from '@/assets/images/japanB.jpg';
import CountriesJSON from '@/constants/content/countries.json';
import { Routes } from '@/routes';
import { countries } from '@/routes/routes.types';
import { getCitiesLinkByCountry } from '@/sanity/queries/city';
import { WEBSITE_URL } from '@/constants';

const images = {
  [Routes.SRI_LANKA]: SriLankaBImage,
  [Routes.JAPAN]: JapanBImage,
  [Routes.THAILAND]: ThailandBImage,
};

export function generateStaticParams() {
  return [
    { country: Routes.SRI_LANKA },
    { country: Routes.THAILAND },
    { country: Routes.JAPAN },
  ];
}

type CountryProps = {
  params: Promise<{
    country: Routes.SRI_LANKA | Routes.THAILAND | Routes.JAPAN;
  }>;
};

export async function generateMetadata({
  params,
}: CountryProps): Promise<Metadata> {
  const { country } = await params;

  if (!countries.includes(country)) {
    notFound();
  }

  const { title, description } = CountriesJSON[country];

  return {
    title: `חופשה ב${title}`,
    description,
    authors: {
      name: 'FlySan',
      url: `${WEBSITE_URL}/${country}`,
    },
    openGraph: {
      title: `חופשה ב${title}`,
      description,
    },
    twitter: {
      title: `חופשה ב${title}`,
      description,
    },
  };
}

const Country = async ({ params }: CountryProps): Promise<JSX.Element> => {
  const { country } = await params;
  if (!countries.includes(country)) {
    notFound();
  }

  const cities = await getCitiesLinkByCountry(country);

  return (
    <CountryPage
      name={CountriesJSON[country].title}
      image={images[country].src}
      description={CountriesJSON[country].description}
      cities={cities}
      slug={country}
    />
  );
};

export default Country;
