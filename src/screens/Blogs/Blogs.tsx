import React from 'react';
import { PostPreview } from '@/components/PostPreview';
import { ContactUs } from '@/features/ContactUs';
import { Intro } from '@/features/Intro';
import { ShareWithFriends } from '@/features/ShareWithFriends';
import { Routes } from '@/routes';
import { forUrl } from '@/sanity/sanity.utils';
import { buildRoutePath } from '@/utils';
import { PostPageResponse } from '@/sanity/queries/post';

interface BlogsProps {
  activitySlug: string;
  activityName: string;
  countryName: string;
  countrySlug: string;
  image: string;
  data: PostPageResponse[];
}

export const Blogs = ({
  activitySlug,
  activityName,
  countryName,
  image,
  countrySlug,
  data,
}: BlogsProps): JSX.Element => (
  <div className="flex flex-col" id={activitySlug} tabIndex={-1}>
    <Intro
      title={`${activityName} ב-${countryName}`}
      image={image}
      maxHeight="320px"
    />
    <section className="ds-container-content ds-section flex flex-col gap-4">
      {data?.map(
        ({
          _id,
          title,
          mainImage,
          description,
          slug,
          _createdAt,
          estimatedReadingTime,
          city,
        }) => (
          <PostPreview
            key={_id}
            title={title}
            content={description}
            imgUrl={forUrl(mainImage).url()}
            href={`/${buildRoutePath(
              Routes.COUNTRY,
              countrySlug,
              Routes.BLOG,
              slug.current
            )}`}
            readTime={estimatedReadingTime}
            date={new Date(_createdAt)}
            isBookmarked={false}
            place={`${countryName},${city.title}.`}
          />
        )
      )}
    </section>

    <ContactUs />
    <ShareWithFriends
      url={`/${Routes.COUNTRY}/${countrySlug}/${activitySlug}`}
    />
  </div>
);
