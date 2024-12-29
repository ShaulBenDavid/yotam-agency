import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SriLankaBImage from '@/assets/images/sriLankaB.jpg';
import ThailandBImage from '@/assets/images/thailandB.jpg';
import JapanBImage from '@/assets/images/japanB.jpg';
import CountriesJSON from '@/constants/content/countries.json';
import { Routes } from '@/routes';
import { countries } from '@/routes/routes.types';
import { CitySlugType, getAllCities, getCity } from '@/sanity/queries/city';
import { City } from '@/screens/City';
import { getHotels } from '@/sanity/queries/hotel';
import { getAttractions } from '@/sanity/queries/attraction';
import { WEBSITE_URL } from '@/constants';

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

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { country, city } = await params;
  const { title, description } = await getCity(city);

  return {
    title,
    description,
    authors: {
      name: 'FlySan',
      url: `${WEBSITE_URL}/${country}/${city}`,
    },
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}

const CityPage = async ({ params }: CityPageProps): Promise<JSX.Element> => {
  const { country, city: citySlug } = await params;
  const cityData = await getCity(citySlug);
  const hotels = await getHotels(citySlug);
  const attractions = await getAttractions(citySlug);
  console.log(hotels, attractions);

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
      citySlug={citySlug}
      countrySlug={country}
    />
  );
};

export default CityPage;
