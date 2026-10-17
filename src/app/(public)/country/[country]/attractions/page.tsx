import React from 'react';
import { absoluteUrl, ogImages } from '@/metadata';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SriLankaBImage from '@/assets/images/sriLankaB.jpg';
import ThailandBImage from '@/assets/images/thailandB.jpg';
import JapanBImage from '@/assets/images/japanB.jpg';
import CountriesJSON from '@/constants/content/countries.json';
import { Routes } from '@/routes';
import { allCountries } from '@/routes/routes.types';
import { getAttractionsByCountry } from '@/sanity/queries/attraction';
import { CountryAttractions } from '@/screens/CountryAttractions';

const images = {
  [Routes.SRI_LANKA]: SriLankaBImage,
  [Routes.JAPAN]: JapanBImage,
  [Routes.THAILAND]: ThailandBImage,
};

export function generateStaticParams() {
  return [
    // ! Archive countries for now
    // { country: Routes.SRI_LANKA },
    // { country: Routes.THAILAND },
    { country: Routes.JAPAN },
  ];
}

type CountryAttractionsPageProps = {
  params: Promise<{
    country: Routes.SRI_LANKA | Routes.THAILAND | Routes.JAPAN;
  }>;
};

export async function generateMetadata({
  params,
}: CountryAttractionsPageProps): Promise<Metadata> {
  const { country } = await params;
  if (!allCountries.includes(country)) {
    notFound();
  }

  const { title } = CountriesJSON[country];
  const pageTitle = `אטרקציות ב${title}`;
  const description = `גלו את האטרקציות, הסיורים והחוויות המומלצות ב${title} – FlySan עוזרת לכם לבחור ולהזמין בדיוק את מה שמתאים למסלול שלכם.`;
  const url = absoluteUrl(`/country/${country}/attractions`);

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

const CountryAttractionsPage = async ({
  params,
}: CountryAttractionsPageProps): Promise<JSX.Element> => {
  const { country } = await params;
  if (!allCountries.includes(country) && !images[country]) {
    notFound();
  }

  const { title, cid } = CountriesJSON[country];
  const attractions = await getAttractionsByCountry(country);

  return (
    <CountryAttractions
      countrySlug={country}
      countryName={title}
      image={images[country].blurDataURL ?? ''}
      cid={cid}
      data={attractions}
    />
  );
};

export default CountryAttractionsPage;
