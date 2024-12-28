import React from 'react';
import { notFound } from 'next/navigation';
import SriLankaBImage from '@/assets/images/sriLankaB.jpg';
import ThailandBImage from '@/assets/images/thailandB.jpg';
import JapanBImage from '@/assets/images/japanB.jpg';
import { Routes } from '@/routes';
import { countries } from '@/routes/routes.types';
import { getAllCities } from '@/sanity/queries/city';
import { City } from '@/sanity/types';

const images = {
  [Routes.SRI_LANKA]: SriLankaBImage,
  [Routes.JAPAN]: JapanBImage,
  [Routes.THAILAND]: ThailandBImage,
};

export async function generateStaticParams() {
  const cities: City[] = await getAllCities();
  return cities.map((city) => ({
    country: city.country,
    city: city.slug.current,
  }));
}

type CityPageProps = {
  params: Promise<{
    country: Routes.SRI_LANKA | Routes.THAILAND | Routes.JAPAN;
    city: string;
  }>;
};

const CityPage = async ({ params }: CityPageProps) => {
  const { country, city } = await params;

  if (!countries.includes(country)) {
    notFound();
  }
  console.log(images);
  return <div>{city}</div>;
};

export default CityPage;
