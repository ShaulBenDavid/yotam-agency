import React from 'react';
import { absoluteUrl, ogImages, truncateDescription } from '@/metadata';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SriLankaBImage from '@/assets/images/sriLankaB.jpg';
import ThailandBImage from '@/assets/images/thailandB.jpg';
import JapanBImage from '@/assets/images/japanB.jpg';
import CountriesJSON from '@/constants/content/countries.json';
import { getAllPostsSlug, getPost } from '@/sanity/queries/post/post.client';
import { Post } from '@/sanity/types';
import { Routes } from '@/routes';
import { PostPageResponse } from '@/sanity/queries/post';
import { countries } from '@/routes/routes.types';
import { PostPage } from '@/screens/PostPage';
import { ArticleJsonLd } from '@/components/JsonLd';
import { forUrl } from '@/sanity/sanity.utils';

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
  const { title, description: rawDescription }: PostPageResponse =
    await getPost(slug);
  const description = truncateDescription(rawDescription);
  const url = absoluteUrl(`/country/${country}/blog/${slug}`);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    authors: {
      name: 'Flysan',
      url,
    },
    openGraph: {
      images: ogImages,
      title,
      description,
      url,
      siteName: 'FlySan',
      type: 'article',
      locale: 'he_IL',
    },
    twitter: {
      images: ogImages,
      title,
      description,
      card: 'summary_large_image',
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

  return (
    <>
      <ArticleJsonLd
        headline={post.title}
        description={truncateDescription(post.description)}
        imageUrl={post.mainImage ? forUrl(post.mainImage).url() : undefined}
        datePublished={post._createdAt}
        dateModified={post._updatedAt}
        url={absoluteUrl(`/country/${country}/blog/${slug}`)}
      />
      <PostPage postData={post} countryName={title} countrySlug={country} />
    </>
  );
};

export default BlogPage;
