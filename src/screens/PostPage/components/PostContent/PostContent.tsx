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
  <article className="flex min-w-0 max-w-[820px] flex-1 flex-col gap-6">
    <PostHeader
      title={data.title}
      createdAt={data._createdAt}
      readingTime={data.estimatedReadingTime}
      postImage={data.mainImage}
      postSlug={data.slug.current}
      countrySlug={countrySlug}
      place={place}
    />
    <section className="flex flex-col gap-4 pb-8 text-[17px] leading-[1.85] text-ink-soft tb:text-lg">
      <PortableText value={data.body} components={RichTextComponents} />
    </section>
  </article>
);
