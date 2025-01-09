import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SriLankaBImage from '@/assets/images/sriLankaB.jpg';
import ThailandBImage from '@/assets/images/thailandB.jpg';
import JapanBImage from '@/assets/images/japanB.jpg';
import CountriesJSON from '@/constants/content/countries.json';
import { getAllPostsSlug, getPost } from '@/sanity/queries/post/post.client';
import { Post } from '@/sanity/types';
import { WEBSITE_URL } from '@/constants';
import { Routes } from '@/routes';
import { PostPageResponse } from '@/sanity/queries/post';
import { countries } from '@/routes/routes.types';
import { PostPage } from '@/screens/PostPage';

const images = {
  [Routes.SRI_LANKA]: SriLankaBImage,
  [Routes.JAPAN]: JapanBImage,
  [Routes.THAILAND]: ThailandBImage,
};

type BlogPageProps = {
  params: Promise<{
    country: Routes.SRI_LANKA | Routes.THAILAND | Routes.JAPAN;
    slug: string;
  }>;
};

export const revalidate = 86400;

export async function generateStaticParams() {
  const slugs: Post[] = await getAllPostsSlug();
  const slugRoutes = slugs.map((post) => ({
    slug: post.slug.current,
    country: post.country,
  }));

  return slugRoutes;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { country, slug } = await params;
  const { title, description }: PostPageResponse = await getPost(slug);

  return {
    title,
    description,
    authors: {
      name: 'Flysan',
      url: `${WEBSITE_URL}/${country}/blog/${slug}`,
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

const BlogPage = async ({ params }: BlogPageProps): Promise<JSX.Element> => {
  const { country, slug } = await params;
  if (!countries.includes(country) && !images[country]) {
    notFound();
  }
  const { title } = CountriesJSON[country];
  const post: PostPageResponse = await getPost(slug);

  if (!post) {
    notFound();
  }

  return <PostPage postData={post} countryName={title} countrySlug={country} />;
};

export default BlogPage;
