import React from 'react';
import { ogImages } from '@/metadata';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ThailandBImage from '@/assets/images/thailandB.jpg';
import JapanBImage from '@/assets/images/japanB.jpg';
import CountriesJSON from '@/constants/content/countries.json';
import { Routes } from '@/routes';
import { countries } from '@/routes/routes.types';
import { getAttractions } from '@/sanity/queries/attraction';
import { absoluteUrl } from '@/metadata';
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

  const cityData = await getCity(city);
  const cityTitle = cityData?.title ?? city;
  const { title } = CountriesJSON[country];
  const pageTitle = `אטרקציות ב${cityTitle}`;
  const description = `גלו את האטרקציות והסיורים המומלצים ב${cityTitle}, ${title} – FlySan עוזרת לכם לבחור ולהזמין את החוויות הכי שוות לטיול שלכם.`;
  const url = absoluteUrl(`/country/${country}/${city}/attractions`);

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
      cid={cityData?.cid ?? 0}
      attractions={attractions}
    />
  );
};

export default CityAttractionsPage;
