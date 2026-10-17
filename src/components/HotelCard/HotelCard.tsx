import React from 'react';
import Image from 'next/image';
import { MdPlace } from 'react-icons/md';
import { Rating } from '../Rating';
import { Button, ButtonVariants } from '../Button';

export const ARIA_HOTEL_INFO_MODAL = 'hotel-info-modal';
interface HotelCardProps {
  image: string;
  name: string;
  address: string;
  mapLink: string;
  stars: number;
  rate: number;
  fromPrice?: string;
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
  <div
    className="ds-card-interactive flex h-full w-full cursor-pointer flex-col"
    onClick={onClick}
  >
    <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-tint">
      <Image
        src={image}
        alt={`מלון ${name}`}
        loading="lazy"
        unoptimized
        fill
        className="object-cover"
      />
    </div>
    <div className="flex flex-1 flex-col gap-2 p-4">
      <h3
        className="w-full text-left text-[15px] font-bold capitalize leading-snug text-ink tb:text-base"
        style={{ direction: 'ltr' }}
      >
        {name}
      </h3>
      <a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="text-ink-muted transition-colors hover:text-primary-950"
      >
        <address
          className="first-capitalize flex flex-row gap-1.5 text-left text-[13px] not-italic leading-relaxed"
          style={{ direction: 'ltr' }}
        >
          <MdPlace size={15} aria-hidden className="mt-0.5 shrink-0" />
          <span className="line-clamp-2">{address}</span>
        </address>
      </a>
      <div
        className="flex flex-row items-center gap-2"
        style={{ direction: 'ltr' }}
      >
        <span
          aria-label={`Hotel rate - ${rate}`}
          className="min-w-9 rounded-card bg-primary-950 px-2 py-0.5 text-center text-[13px] font-bold text-white"
        >
          {rate}
        </span>
        <Rating rate={stars} />
      </div>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line-soft pt-3">
        {fromPrice && (
          <span aria-label="price" className="text-sm text-ink-soft">
            <strong className="text-ink">החל מ-</strong> {fromPrice}
          </span>
        )}
        <Button
          width="fit-content"
          className="min-h-9 px-4 text-[13px]"
          variant={ButtonVariants.SECONDARY}
          aria-controls={ARIA_HOTEL_INFO_MODAL}
          onClick={onClick}
        >
          למידע נוסף
        </Button>
      </div>
    </div>
  </div>
);
