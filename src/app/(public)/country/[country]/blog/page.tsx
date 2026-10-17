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
import { Blogs } from '@/screens/Blogs';
import { getPostsByCountry } from '@/sanity/queries/post/post.client';

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

type CountryBlogsPageProps = {
  params: Promise<{
    country: Routes.SRI_LANKA | Routes.THAILAND | Routes.JAPAN;
  }>;
};

export async function generateMetadata({
  params,
}: CountryBlogsPageProps): Promise<Metadata> {
  const { country } = await params;
  if (!allCountries.includes(country)) {
    notFound();
  }

  const { title } = CountriesJSON[country];
  const pageTitle = `בלוג הטיולים ל${title}`;
  const description = `מאמרים, טיפים והמלצות לטיול ל${title} – כל מה שכדאי לדעת לפני שנוסעים, מאת צוות FlySan.`;
  const url = absoluteUrl(`/country/${country}/blog`);

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

const CountryBlogsPage = async ({
  params,
}: CountryBlogsPageProps): Promise<JSX.Element> => {
  const { country } = await params;
  if (!allCountries.includes(country) && !images[country]) {
    notFound();
  }

  const { title } = CountriesJSON[country];
  const posts = await getPostsByCountry(country);

  return (
    <Blogs
      countryName={title}
      activityName="בלוגים"
      activitySlug={Routes.BLOG}
      countrySlug={country}
      image={images[country]?.blurDataURL ?? ''}
      data={posts}
    />
  );
};

export default CountryBlogsPage;
