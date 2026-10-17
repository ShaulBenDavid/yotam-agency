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
    className="ds-card-interactive flex h-full w-full cursor-pointer flex-col"
    onClick={onClick}
  >
    <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-tint">
      <Image
        src={image}
        alt={`אטרקציה ${name}`}
        loading="lazy"
        unoptimized
        fill
        className="object-cover object-top"
      />
    </div>
    <div className="flex flex-1 flex-col gap-2 p-4">
      <h3
        className="w-full text-[15px] font-bold leading-snug text-ink tb:text-base"
        style={{
          direction: isRtl(name) ? 'rtl' : 'ltr',
          textAlign: isRtl(name) ? 'right' : 'left',
        }}
      >
        {name}
      </h3>
      <p className="line-clamp-3 text-right text-[13px] leading-relaxed text-ink-muted">
        {description}
      </p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line-soft pt-3">
        {price && (
          <span aria-label="price" className="text-sm text-ink-soft">
            <strong className="text-ink">החל מ-</strong> {price}
          </span>
        )}
        <Button
          width="fit-content"
          className="min-h-9 px-4 text-[13px]"
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
