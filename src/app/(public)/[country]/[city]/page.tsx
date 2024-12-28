import React from 'react';
import { notFound } from 'next/navigation';
import SriLankaBImage from '@/assets/images/sriLankaB.jpg';
import ThailandBImage from '@/assets/images/thailandB.jpg';
import JapanBImage from '@/assets/images/japanB.jpg';
import CountriesJSON from '@/constants/content/countries.json';
import { Routes } from '@/routes';
import { countries } from '@/routes/routes.types';
import { CitySlugType, getAllCities, getCity } from '@/sanity/queries/city';
import { City } from '@/screens/City';

const images = {
  [Routes.SRI_LANKA]: SriLankaBImage,
  [Routes.JAPAN]: JapanBImage,
  [Routes.THAILAND]: ThailandBImage,
};

export async function generateStaticParams() {
  const cities: CitySlugType[] = await getAllCities();
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
  const { country, city: citySlug } = await params;
  const cityData = await getCity(citySlug);

  if (!countries.includes(country)) {
    notFound();
  }

  return (
    <City
      cityName={cityData.title}
      countryName={CountriesJSON[cityData.country].title}
      image={images[cityData.country]?.blurDataURL ?? ''}
      description={cityData.description}
      forWho={cityData.forWho}
    />
  );
};

export default CityPage;
