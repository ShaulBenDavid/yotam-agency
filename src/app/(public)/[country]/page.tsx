import React from 'react';
import { notFound } from 'next/navigation';
import { CountryPage } from '@/features/CountryPage';
import SriLankaBImage from '@/assets/images/sriLankaB.jpg';
import ThailandBImage from '@/assets/images/thailandB.jpg';
import JapanBImage from '@/assets/images/japanB.jpg';
import CountriesJSON from '@/constants/content/countries.json';
import { Routes } from '@/routes';
import { countries } from '@/routes/routes.types';

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

const Country = async ({ params }: CountryProps) => {
  const { country } = await params;

  if (!countries.includes(country)) {
    notFound();
  }

  return (
    <CountryPage
      name={CountriesJSON[country].title}
      image={images[country].src}
      description={CountriesJSON[country].description}
      forWho={CountriesJSON[country].forWho}
    />
  );
};

export default Country;
