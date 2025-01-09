import React from 'react';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/RichTextComponents';
import type { PostPageResponse } from '@/sanity/queries/post';
import { PostHeader } from './PostHeader';

interface PostContentProps {
  data: PostPageResponse;
  countrySlug: string;
  place: string;
}

export const PostContent = ({
  data,
  countrySlug,
  place,
}: PostContentProps): JSX.Element => (
  <article className="border-dw-grey flex flex-1 flex-col gap-3 sm:overflow-hidden sm:rounded-xl sm:border-2">
    <PostHeader
      title={data.title}
      createdAt={data._createdAt}
      readingTime={data.estimatedReadingTime}
      postImage={data.mainImage}
      postSlug={data.slug.current}
      countrySlug={countrySlug}
      place={place}
    />
    <section className="tb:px-4 tb:text-xl flex flex-col gap-2 pb-8 text-lg sm:px-2">
      <PortableText value={data.body} components={RichTextComponents} />
    </section>
  </article>
);
