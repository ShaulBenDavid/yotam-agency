import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SriLankaBImage from '@/assets/images/sriLankaB.jpg';
import ThailandBImage from '@/assets/images/thailandB.jpg';
import JapanBImage from '@/assets/images/japanB.jpg';
import CountriesJSON from '@/constants/content/countries.json';
import { Routes } from '@/routes';
import { countries } from '@/routes/routes.types';
import { WEBSITE_URL } from '@/constants';
import { Blogs } from '@/screens/Blogs';
import { getPostsByCountry } from '@/sanity/queries/post/post.client';

const images = {
  [Routes.SRI_LANKA]: SriLankaBImage,
  [Routes.JAPAN]: JapanBImage,
  [Routes.THAILAND]: ThailandBImage,
};

export function generateStaticParams() {
  return [
    { country: Routes.SRI_LANKA },
    { country: Routes.THAILAND },
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
  if (!countries.includes(country)) {
    notFound();
  }

  const { title } = CountriesJSON[country];

  return {
    title: `מידע על ${title}`,
    authors: {
      name: 'FlySan',
      url: `${WEBSITE_URL}/${country}/blog`,
    },
    openGraph: {
      title: `מידע על ${title}`,
    },
    twitter: {
      title: `מידע על ${title}`,
    },
  };
}

const CountryBlogsPage = async ({
  params,
}: CountryBlogsPageProps): Promise<JSX.Element> => {
  const { country } = await params;
  if (!countries.includes(country) && !images[country]) {
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
