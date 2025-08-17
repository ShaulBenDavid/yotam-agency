import React from 'react';
import Image from 'next/image';
import { isRtl } from '@/utils';
import { Button, ButtonVariants } from '../Button';
import { ARIA_ATTRACTION_INFO_MODAL } from '@/features/AttractionModal/AttractionModal';

interface AttractionCardProps {
  image: string;
  name: string;
  description: string;
  price?: string;
  onClick: () => void;
}

export const AttractionCard = ({
  image,
  name,
  description,
  price,
  onClick,
}: AttractionCardProps): JSX.Element => (
  <div
    className="flex w-full flex-col rounded-md shadow-card"
    onClick={onClick}
  >
    <div className="relative">
      <Image
        src={image}
        alt={`attraction - ${name}`}
        loading="lazy"
        unoptimized
        width={0}
        height={0}
        className="aspect-square max-h-[200px] w-full min-w-52 rounded-t-md object-cover object-top sm:aspect-video tb:max-h-60"
      />
      <div className="pointer-events-none absolute inset-0 after:absolute after:inset-0 after:bg-gradient-to-t after:from-[rgba(231,245,255,0.7)] after:via-transparent after:to-transparent"></div>
    </div>
    <div className="z-[1] -mt-3 flex flex-col rounded-2xl bg-primary-950 p-2 text-left text-white">
      <h3
        className="w-full pb-1 text-base font-bold tb:text-lg"
        style={{
          direction: isRtl(name) ? 'rtl' : 'ltr',
          textAlign: isRtl(name) ? 'right' : 'left',
        }}
      >
        {name}
      </h3>
      <p className="line-clamp-3 text-right text-base font-medium">
        {description}
      </p>
      <div className="flex flex-col justify-between gap-2 py-2 tb:flex-row tb:items-end">
        {price && (
          <span aria-label="price">
            <strong>החל מ-</strong> {price}
          </span>
        )}
        <Button
          width="fit-content"
          className="px-4"
          aria-controls={ARIA_ATTRACTION_INFO_MODAL}
          onClick={onClick}
          variant={ButtonVariants.SECONDARY}
        >
          למידע נוסף
        </Button>
      </div>
    </div>
  </div>
);
