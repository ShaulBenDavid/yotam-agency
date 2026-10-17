import React from 'react';
import { absoluteUrl, ogImages } from '@/metadata';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CountryPage } from '@/features/CountryPage';
import SriLankaBImage from '@/assets/images/sriLankaB.jpg';
import ThailandBImage from '@/assets/images/thailandB.jpg';
import JapanBImage from '@/assets/images/japanB.jpg';
import CountriesJSON from '@/constants/content/countries.json';
import { Routes } from '@/routes';
import { allCountries } from '@/routes/routes.types';
import { getCitiesLinkByCountry } from '@/sanity/queries/city';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { WEBSITE_URL } from '@/constants';

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

type CountryProps = {
  params: Promise<{
    country: Routes.SRI_LANKA | Routes.THAILAND | Routes.JAPAN;
  }>;
};

export async function generateMetadata({
  params,
}: CountryProps): Promise<Metadata> {
  const { country } = await params;

  if (!allCountries.includes(country)) {
    notFound();
  }

  const { title } = CountriesJSON[country];
  const pageTitle = `חופשה ב${title}`;
  const description =
    'FlySan עוזרת לכם לתכנן טיול בלתי נשכח ליפן – מהערים הגדולות ועד הכפרים המסורתיים, עם מלונות, אטרקציות וטיפים מקומיים למסלול מושלם.';
  const url = absoluteUrl(`/country/${country}`);

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

const Country = async ({ params }: CountryProps): Promise<JSX.Element> => {
  const { country } = await params;
  if (!allCountries.includes(country)) {
    notFound();
  }

  const cities = await getCitiesLinkByCountry(country);
  const { title } = CountriesJSON[country];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'בית', url: WEBSITE_URL },
          { name: title, url: absoluteUrl(`/country/${country}`) },
        ]}
      />
      <CountryPage
        name={title}
        image={images[country].src}
        description={CountriesJSON[country].description}
        cities={cities}
        slug={country}
      />
    </>
  );
};

export default Country;
