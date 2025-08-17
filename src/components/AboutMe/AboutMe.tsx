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
  <section className="י flex flex-col gap-2 rounded-md bg-primary-950 p-2 text-white shadow-xl tb:flex-row">
    <Image
      src={imgUrl}
      alt={`תמונה של ${altName}`}
      loading="lazy"
      unoptimized
      width={0}
      height={0}
      className={twMerge(
        'max-h-96 w-full rounded-md rounded-t-md object-cover object-top tb:min-w-80',
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
