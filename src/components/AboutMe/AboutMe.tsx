import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface AboutMeProps {
  imgUrl: string;
  altName: string;
  title: string;
  description: JSX.Element;
  classNameImg?: string;
}

export const AboutMe = ({
  title,
  altName,
  description,
  imgUrl,
  classNameImg,
}: AboutMeProps): JSX.Element => (
  <section className="grid grid-cols-1 items-start gap-8 tb:grid-cols-[minmax(220px,320px)_1fr] tb:gap-14">
    <Image
      src={imgUrl}
      alt={`תמונה של ${altName}`}
      loading="lazy"
      unoptimized
      width={0}
      height={0}
      className={twMerge(
        'mx-auto aspect-[4/5] w-full max-w-[320px] rounded-card object-cover object-top tb:sticky tb:top-[calc(var(--header-height)+24px)]',
        classNameImg
      )}
    />
    <div className="flex flex-col">
      <h2 className="ds-h2 mb-5">{title}</h2>
      <div className="ds-body flex flex-col gap-4 text-[17px]">
        {description}
      </div>
    </div>
  </section>
);
