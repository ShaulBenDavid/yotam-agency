import React from 'react';
import type { Routes } from '@/routes';
import Link from 'next/link';

export interface ImageLinkProps {
  title: string;
  href: Routes;
  image: string;
}

export const ImageLink = ({
  title,
  href,
  image,
}: ImageLinkProps): JSX.Element => (
  <Link
    href={href}
    className="min-w group grid h-40 w-full overflow-hidden rounded-md text-center"
  >
    <div
      className="relative h-full w-full"
      aria-hidden
      style={{ gridRow: 1, gridColumn: 1 }}
    >
      <div
        className="bg-primary-200 absolute left-1/2 h-full w-full -translate-x-1/2 duration-300 group-hover:scale-110"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
        }}
      >
        <div className="to-primary-950/70 group-hover:to-primary-950/90 absolute inset-0 bg-gradient-to-b from-transparent duration-150" />
      </div>
    </div>
    <span
      className="tb:text-4xl z-10 place-self-center text-2xl font-bold text-white"
      style={{
        gridRow: 1,
        gridColumn: 1,
        textShadow: '5px 1px 12px rgba(7, 25, 82, 0.8)',
      }}
    >
      {title}
    </span>
  </Link>
);
