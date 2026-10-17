import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

export interface ImageLinkProps {
  title: string;
  href: string;
  image: string;
}

export const ImageLink = ({
  title,
  href,
  image,
}: ImageLinkProps): JSX.Element => (
  <Link href={href} className="ds-card-interactive group flex flex-col">
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-tint">
      <Image
        src={image}
        alt=""
        fill
        unoptimized
        loading="lazy"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="flex items-center justify-between gap-2 px-3 py-3 tb:px-5 tb:py-4">
      <span className="text-[15px] font-bold capitalize text-ink tb:text-[17px]">
        {title}
      </span>
      <FaArrowLeft
        size={12}
        aria-hidden
        className="shrink-0 text-ink-muted transition-transform group-hover:-translate-x-1 group-hover:text-primary-950"
      />
    </div>
  </Link>
);
