import React from 'react';
import Image from 'next/image';
import { MdPlace } from 'react-icons/md';
import { isRtl } from '@/utils';

interface AttractionCardProps {
  image: string;
  name: string;
  address: string;
}

export const AttractionCard = ({
  image,
  name,
  address,
}: AttractionCardProps): JSX.Element => (
  <div className="shadow-card flex w-full flex-col rounded-md">
    <div className="relative">
      <Image
        src={image}
        alt={`attraction - ${name}`}
        loading="lazy"
        sizes="15wv"
        width={0}
        height={0}
        className="tb:max-h-60 aspect-square max-h-[200px] w-full min-w-52 rounded-t-md object-cover object-top sm:aspect-video"
      />
      <div className="pointer-events-none absolute inset-0 after:absolute after:inset-0 after:bg-gradient-to-t after:from-[rgba(231,245,255,0.7)] after:via-transparent after:to-transparent"></div>
    </div>
    <div className="bg-primary-950 z-[1] -mt-3 flex flex-col rounded-2xl p-2 text-left text-white">
      <h3
        className="tb:text-lg w-full pb-1 text-base font-bold"
        style={{
          direction: isRtl(name) ? 'rtl' : 'ltr',
          textAlign: isRtl(name) ? 'right' : 'left',
        }}
      >
        {name}
      </h3>
      <address
        className="flex flex-row gap-2 text-base font-medium"
        style={{ direction: 'ltr' }}
      >
        <MdPlace size={24} aria-hidden className="shrink-0" />
        {address}
      </address>
    </div>
  </div>
);
