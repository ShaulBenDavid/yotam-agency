import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDateToCustomFormat } from '@/utils';
import { MdPlace } from 'react-icons/md';

const MIN_READ_TIME = 1;

export interface PostPreviewProps {
  title: string;
  content: string;
  href: string;
  imgUrl: string;
  place: string;
  date: Date;
  readTime: number;
  isBookmarked: boolean;
}

export const PostPreview = ({
  title,
  content,
  href,
  imgUrl,
  date,
  readTime,
  place,
}: PostPreviewProps): JSX.Element => (
  <article
    className="flex h-28 w-full flex-row gap-1 sm:h-[130px]"
    data-testid="post-preview-component-test-id"
  >
    <Link href={href} aria-hidden className="flex-shrink-0" tabIndex={-1}>
      <figure className="dw-skeleton group relative">
        <Image
          src={imgUrl}
          alt={title}
          loading="lazy"
          sizes="15wv"
          width={0}
          height={0}
          className="mb:w-40 aspect-square h-28 w-auto object-cover sm:aspect-video sm:h-[130px] sm:w-auto"
        />
      </figure>
    </Link>
    <div className="flex h-full w-full flex-col">
      <Link href={href} className="hover:underline">
        <h4 className="xs:line-clamp-1 line-clamp-2 text-base font-bold sm:text-lg">
          {title}
        </h4>
        <p className="text-primary-gray max-xs:hidden line-clamp-1 text-sm sm:line-clamp-2 sm:text-base">
          {content}
        </p>
      </Link>
      <span
        aria-label="מקום"
        className="mt-auto flex flex-row gap-1 text-sm font-medium"
      >
        <MdPlace size={16} aria-hidden className="shrink-0" />
        {place}
      </span>
      <div className="text-primary-gray flex flex-row items-center gap-1 text-xs sm:text-sm">
        <time dateTime={new Date(date).toISOString()}>
          {formatDateToCustomFormat(date)}
        </time>
        -
        <small className="text-xs sm:text-sm">
          {readTime || MIN_READ_TIME} דקות קריאה
        </small>
      </div>
    </div>
  </article>
);
