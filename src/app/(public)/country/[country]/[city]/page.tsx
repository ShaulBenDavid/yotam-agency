import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ThailandBImage from '@/assets/images/thailandB.jpg';
import JapanBImage from '@/assets/images/japanB.jpg';
import CountriesJSON from '@/constants/content/countries.json';
import { Routes } from '@/routes';
import { countries } from '@/routes/routes.types';
import { CitySlugType, getAllCities, getCity } from '@/sanity/queries/city';
import { City } from '@/screens/City';
import { getFiveHotels } from '@/sanity/queries/hotel';
import { getFiveAttractions } from '@/sanity/queries/attraction';
import { WEBSITE_URL } from '@/constants';

const images = {
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
    country: Routes.THAILAND | Routes.JAPAN;
    city: string;
  }>;
};

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { country, city } = await params;
  if (!countries.includes(country)) {
    notFound();
  }

  const cityData = await getCity(city);

  if (!cityData) {
    notFound();
  }
  const { title, description } = cityData;

  return {
    title: `חופשה ב${title}`,
    description,
    authors: {
      name: 'FlySan',
      url: `${WEBSITE_URL}/${country}/${city}`,
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

const CityPage = async ({ params }: CityPageProps): Promise<JSX.Element> => {
  const { country, city: citySlug } = await params;
  if (!countries.includes(country)) {
    notFound();
  }

  const cityData = await getCity(citySlug);
  if (!cityData?.title) {
    notFound();
  }
  const hotels = await getFiveHotels(citySlug);
  const attractions = await getFiveAttractions(citySlug);

  return (
    <City
      cityName={cityData.title}
      countryName={CountriesJSON[cityData.country].title}
      image={images[cityData.country]?.blurDataURL ?? ''}
      description={cityData.description}
      citySlug={citySlug}
      countrySlug={country}
      hotels={hotels}
      attractions={attractions}
    />
  );
};

export default CityPage;
