import React from 'react';
import { PostPageResponse } from '@/sanity/queries/post';
import { PostContent } from './components/PostContent';
import { Aside } from './components/Aside';

interface PostPageProps {
  countrySlug: string;
  countryName: string;
  postData: PostPageResponse;
}

export const PostPage = ({
  postData,
  countrySlug,
  countryName,
}: PostPageProps): JSX.Element => (
  <div id="page-content" className="flex flex-row justify-between gap-4">
    <PostContent
      data={postData}
      countrySlug={countrySlug}
      place={`${countryName},${postData.city.title}.`}
    />
    <Aside postSlug={postData.slug.current} countrySlug={countrySlug} />
  </div>
);
