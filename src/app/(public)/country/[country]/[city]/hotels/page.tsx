import React from 'react';
import { ogImages } from '@/metadata';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ThailandBImage from '@/assets/images/thailandB.jpg';
import JapanBImage from '@/assets/images/japanB.jpg';
import CountriesJSON from '@/constants/content/countries.json';
import { Routes } from '@/routes';
import { countries } from '@/routes/routes.types';
import { absoluteUrl } from '@/metadata';
import { CitySlugType, getAllCities, getCity } from '@/sanity/queries/city';
import { CityHotels } from '@/screens/CityHotels';
import { getHotels } from '@/sanity/queries/hotel';

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

type CityHotelsPageProps = {
  params: Promise<{
    country: Routes.THAILAND | Routes.JAPAN;
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

  const cityData = await getCity(city);
  const cityTitle = cityData?.title ?? city;
  const { title } = CountriesJSON[country];
  const pageTitle = `מלונות ב${cityTitle}`;
  const description = `מחפשים מלון ב${cityTitle}, ${title}? FlySan ממליצה על המלונות הכי מתאימים לטיול שלכם – מבתי מלון יוקרתיים ועד ריוקנים מסורתיים.`;
  const url = absoluteUrl(`/country/${country}/${city}/hotels`);

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    authors: {
      name: 'FlySan',
      url,
    },
    openGraph: {
      images: ogImages,
      title: pageTitle,
      description,
      url,
      siteName: 'FlySan',
      type: 'website',
      locale: 'he_IL',
    },
    twitter: {
      images: ogImages,
      title: pageTitle,
      description,
      card: 'summary_large_image',
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
