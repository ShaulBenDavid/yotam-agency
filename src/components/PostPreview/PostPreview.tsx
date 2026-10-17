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
    className="ds-card-interactive group flex w-full flex-row"
    data-testid="post-preview-component-test-id"
  >
    <Link
      href={href}
      aria-hidden
      className="relative w-28 shrink-0 overflow-hidden bg-tint mb:w-32 sm:w-56"
      tabIndex={-1}
    >
      <Image
        src={imgUrl}
        alt={title}
        loading="lazy"
        unoptimized
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </Link>
    <div className="flex min-h-32 w-full min-w-0 flex-col gap-1 p-3 sm:min-h-40 sm:p-5">
      <Link href={href} className="hover:text-accent-strong">
        <h4 className="line-clamp-2 text-[15px] font-bold leading-snug sm:text-lg">
          {title}
        </h4>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-ink-muted max-xs:hidden sm:text-[15px]">
          {content}
        </p>
      </Link>
      <span
        aria-label="מקום"
        className="mt-auto flex flex-row items-center gap-1 pt-2 text-[13px] font-semibold text-ink-soft"
      >
        <MdPlace size={15} aria-hidden className="shrink-0" />
        {place}
      </span>
      <div className="flex flex-row items-center gap-1 text-xs text-ink-muted sm:text-[13px]">
        <time dateTime={new Date(date).toISOString()}>
          {formatDateToCustomFormat(date)}
        </time>
        <span aria-hidden>·</span>
        <small className="text-xs sm:text-[13px]">
          {readTime || MIN_READ_TIME} דקות קריאה
        </small>
      </div>
    </div>
  </article>
);
