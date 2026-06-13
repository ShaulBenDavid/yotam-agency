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
  <section className="flex flex-col items-center gap-2 rounded-md bg-primary-950 p-2 text-white shadow-xl tb:flex-row">
    <Image
      src={imgUrl}
      alt={`תמונה של ${altName}`}
      loading="lazy"
      unoptimized
      width={0}
      height={0}
      className={twMerge(
        'max-h-24 w-full max-w-24 rounded-md rounded-t-md object-cover object-top',
        classNameImg
      )}
    />
    <div className="flex flex-col">
      <h2 className="mb-2 border-b px-2 pb-2 text-lg font-bold tb:px-3 tb:text-2xl">
        {title}
      </h2>
      <p className="rounded-md p-2 text-base font-medium tb:p-3 tb:text-lg">
        {description}
      </p>
    </div>
  </section>
);
