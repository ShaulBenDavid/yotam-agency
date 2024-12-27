import React from 'react';
import Image from 'next/image';
import { Rating } from '../Rating';

interface HotelCardProps {
  image: string;
  name: string;
  stars: number;
  rate: number;
  fromPrice: number;
}

export const HotelCard = ({
  image,
  name,
  stars,
  rate,
  fromPrice,
}: HotelCardProps): JSX.Element => (
  <div className="shadow-card flex w-full flex-col rounded-md">
    <Image
      src={image}
      alt={`hotel - ${name}`}
      loading="lazy"
      sizes="15wv"
      width={0}
      height={0}
      className="tb:max-h-60 aspect-square max-h-[200px] w-full min-w-52 rounded-t-md object-cover object-top sm:aspect-video"
    />
    <div className="flex flex-col p-2">
      <h3
        className="w-full pb-1 text-left text-base font-bold"
        style={{ direction: 'ltr' }}
      >
        {name}
      </h3>
      <div
        className="flex flex-row items-center gap-2 py-1"
        style={{ direction: 'ltr' }}
      >
        <span
          aria-label={`Hotel rate - ${rate}`}
          className="bg-primary-950 w-fit rounded-md p-1 text-base font-semibold text-white"
        >
          {rate}
        </span>
        <div>
          <Rating rate={stars} />
        </div>
      </div>
      <span aria-label="price">
        <strong>החל מ-</strong> {fromPrice}
      </span>
    </div>
  </div>
);
