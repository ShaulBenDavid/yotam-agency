import React from 'react';
import Image from 'next/image';
import { MdPlace } from 'react-icons/md';
import { Rating } from '../Rating';
import { Button } from '../Button';

export const ARIA_HOTEL_INFO_MODAL = 'hotel-info-modal';
interface HotelCardProps {
  image: string;
  name: string;
  address: string;
  mapLink: string;
  stars: number;
  rate: number;
  fromPrice?: number;
  onClick: () => void;
}

export const HotelCard = ({
  image,
  name,
  address,
  stars,
  rate,
  fromPrice,
  mapLink,
  onClick,
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
        className="tb:text-xl w-full pb-1 text-left text-base font-bold capitalize"
        style={{ direction: 'ltr' }}
      >
        {name}
      </h3>
      <a href={mapLink} target="_blank" rel="noopener noreferrer">
        <address
          className="first-capitalize flex flex-row gap-2 text-sm font-medium opacity-90"
          style={{ direction: 'ltr' }}
        >
          <MdPlace size={16} aria-hidden className="shrink-0" />
          {address}
        </address>
      </a>
      <div
        className="flex flex-row items-center gap-2 py-1"
        style={{ direction: 'ltr' }}
      >
        <span
          aria-label={`Hotel rate - ${rate}`}
          className="bg-primary-950 w-fit min-w-8 rounded-md p-1 text-center text-base font-semibold text-white"
        >
          {rate}
        </span>
        <div>
          <Rating rate={stars} />
        </div>
      </div>
      <div className="tb:flex-row tb:items-end flex flex-col justify-between gap-2 py-2">
        {fromPrice && (
          <span aria-label="price">
            <strong>החל מ-</strong> {fromPrice}
          </span>
        )}
        <Button
          width="fit-content"
          className="px-4"
          aria-controls={ARIA_HOTEL_INFO_MODAL}
          onClick={onClick}
        >
          למידע נוסף
        </Button>
      </div>
    </div>
  </div>
);
