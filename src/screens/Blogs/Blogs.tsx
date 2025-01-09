import React, { Fragment } from 'react';
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
  <div
    className="tb:gap-2 flex flex-col items-center gap-2 pb-8"
    id={activitySlug}
    tabIndex={-1}
  >
    <Intro
      title={`${activityName} ב-${countryName}`}
      image={image}
      maxHeight="250px"
    />
    <section className="flex w-full flex-col gap-3 pb-2">
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
          <Fragment key={_id}>
            <PostPreview
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
            <hr className="border-dw-grey" />
          </Fragment>
        )
      )}
    </section>

    <ContactUs />
    <ShareWithFriends
      title="אהבת?! ספר לחברים"
      description="שלח לחברים ומצא פרטנרים לטיול עוד היום!"
      url={`/${Routes.COUNTRY}/${countrySlug}/${activitySlug}`}
    />
  </div>
);
