import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ThailandBImage from '@/assets/images/thailandB.jpg';
import JapanBImage from '@/assets/images/japanB.jpg';
import CountriesJSON from '@/constants/content/countries.json';
import { Routes } from '@/routes';
import { countries } from '@/routes/routes.types';
import { getAttractions } from '@/sanity/queries/attraction';
import { WEBSITE_URL } from '@/constants';
import { CitySlugType, getAllCities, getCity } from '@/sanity/queries/city';
import { CityAttractions } from '@/screens/CityAttractions';

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

type CityAttractionsPageProps = {
  params: Promise<{
    country: Routes.THAILAND | Routes.JAPAN;
    city: string;
  }>;
};

export async function generateMetadata({
  params,
}: CityAttractionsPageProps): Promise<Metadata> {
  const { country, city } = await params;
  if (!countries.includes(country)) {
    notFound();
  }

  const { title } = CountriesJSON[country];

  return {
    title: `אטרקציות ב${title}`,
    authors: {
      name: 'FlySan',
      url: `${WEBSITE_URL}/${country}/${city}/attractions`,
    },
    openGraph: {
      title: `אטרקציות ב${title}`,
    },
    twitter: {
      title: `אטרקציות ב${title}`,
    },
  };
}

const CityAttractionsPage = async ({
  params,
}: CityAttractionsPageProps): Promise<JSX.Element> => {
  const { country, city: citySlug } = await params;
  if (!countries.includes(country)) {
    notFound();
  }

  const cityData = await getCity(citySlug);
  if (!cityData?.title) {
    notFound();
  }
  const attractions = await getAttractions(citySlug);

  return (
    <CityAttractions
      cityName={cityData.title}
      countryName={CountriesJSON[cityData.country].title}
      image={images[cityData.country]?.blurDataURL ?? ''}
      citySlug={citySlug}
      countrySlug={country}
      attractions={attractions}
    />
  );
};

export default CityAttractionsPage;
