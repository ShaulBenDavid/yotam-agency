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
  <header className="flex w-full flex-col gap-5">
    <Image
      src={forUrl(postImage).url()}
      alt={title}
      unoptimized
      width={500}
      height={200}
      className="-mx-4 aspect-[1000/420] w-[calc(100%+32px)] max-w-none object-cover sm:mx-0 sm:w-full sm:rounded-card"
    />
    <div className="flex flex-col gap-4">
      <h1 className="text-[clamp(28px,5vw,44px)] font-extrabold leading-tight">
        {title}
      </h1>
      <div className="flex flex-col gap-2 border-b border-line pb-5 tb:flex-row tb:items-center tb:justify-between">
        <span
          aria-label="מקום"
          className="flex flex-row items-center gap-1 text-[15px] font-semibold text-ink"
        >
          <MdPlace size={18} aria-hidden className="shrink-0" />
          {place}
        </span>
        <TimeSection createdAt={createdAt} readingTime={readingTime} />
      </div>

      <div className="md:hidden">
        <Share
          url={`/${buildRoutePath(
            Routes.COUNTRY,
            countrySlug,
            Routes.BLOG,
            postSlug
          )}`}
        />
      </div>
    </div>
  </header>
);
