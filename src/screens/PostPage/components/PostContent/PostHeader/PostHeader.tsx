import React from 'react';
import Image from 'next/image';
import type { Image as ImageType } from '@/sanity/types';
import { forUrl } from '@/sanity/sanity.utils';
import { Routes } from '@/routes';
import { Share } from '@/components/Share';
import { buildRoutePath } from '@/utils';
import { TimeSection } from './TimeSection';
import { MdPlace } from 'react-icons/md';

interface PostHeaderProps {
  title: string;
  createdAt: string;
  countrySlug: string;
  readingTime: number;
  postImage: ImageType;
  postSlug: string;
  place: string;
}

export const PostHeader = ({
  title,
  createdAt,
  countrySlug,
  readingTime,
  postImage,
  postSlug,
  place,
}: PostHeaderProps): JSX.Element => (
  <header className="flex w-full flex-col sm:overflow-hidden">
    <Image
      src={forUrl(postImage).url()}
      alt={title}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
      width={500}
      height={200}
      className="ms-[-16px] aspect-[1000/420] min-w-[calc(100%+32px)] object-cover sm:m-0 sm:w-auto"
    />
    <div className="tb:p-4 flex flex-col gap-4 pt-2 sm:p-2">
      <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
      <div className="tb:flex-row tb:justify-between flex flex-col gap-4">
        <span
          aria-label="מקום"
          className="mt-auto flex flex-row gap-1 text-base font-semibold"
        >
          <MdPlace size={20} aria-hidden className="shrink-0" />
          {place}
        </span>
        <TimeSection createdAt={createdAt} readingTime={readingTime} />
      </div>

      <div className="md:hidden">
        <Share
          url={buildRoutePath(
            Routes.COUNTRY,
            countrySlug,
            Routes.BLOG,
            postSlug
          )}
        />
      </div>
    </div>
  </header>
);
