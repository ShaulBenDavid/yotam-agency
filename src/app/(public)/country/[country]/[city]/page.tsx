import React from 'react';
import { absoluteUrl, ogImages, truncateDescription } from '@/metadata';
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
import { BreadcrumbJsonLd } from '@/components/JsonLd';
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
  const { title, description: rawDescription } = cityData;
  const pageTitle = `חופשה ב${title}`;
  const description = truncateDescription(rawDescription);
  const url = absoluteUrl(`/country/${country}/${city}`);

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
  const countryTitle = CountriesJSON[cityData.country].title;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'בית', url: WEBSITE_URL },
          { name: countryTitle, url: absoluteUrl(`/country/${country}`) },
          {
            name: cityData.title,
            url: absoluteUrl(`/country/${country}/${citySlug}`),
          },
        ]}
      />
      <City
        cityName={cityData.title}
        countryName={countryTitle}
        image={images[cityData.country]?.blurDataURL ?? ''}
        description={cityData.description}
        citySlug={citySlug}
        countrySlug={country}
        hotels={hotels}
        attractions={attractions}
      />
    </>
  );
};

export default CityPage;
