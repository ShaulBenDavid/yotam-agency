'use client';

import React, { RefObject } from 'react';
import Image from 'next/image';
import { Modal } from '@/components/Modal';
import { ModalCloseButton } from '@/components/ModalCloseButton';
import { Attraction } from '@/sanity/types';
import { forUrl } from '@/sanity/sanity.utils';
import { Contact } from '@/components/Contact';

export const ARIA_ATTRACTION_INFO_MODAL = 'attraction-info-modal';

interface AttractionModalProps {
  ref: RefObject<HTMLDialogElement | null>;
  onClose: () => void;
  data?: Attraction;
}

export const AttractionModal = ({
  ref,
  onClose,
  data,
}: AttractionModalProps): JSX.Element => {
  const { mainImage, title, description, price } = data || {};

  return (
    <Modal ref={ref} closeModal={onClose} id={ARIA_ATTRACTION_INFO_MODAL}>
      {data && mainImage ? (
        <div className="relative flex w-full flex-col tb:w-[min(90vw,640px)]">
          <div className="bg-tint">
            <Image
              src={mainImage && forUrl(mainImage).url()}
              alt={`hotel - ${title}`}
              loading="lazy"
              unoptimized
              width={0}
              height={0}
              className="aspect-video max-h-72 min-h-56 w-full object-contain object-top"
            />
          </div>
          <ModalCloseButton onClose={onClose} />
          <div className="flex flex-col gap-3 p-5 tb:p-7">
            <h3 className="w-full text-lg font-extrabold capitalize leading-snug tb:text-xl">
              {title}
            </h3>
            <p className="ds-body whitespace-pre-line text-[15px]">
              {description}
            </p>
            {price && (
              <span aria-label="price" className="text-[15px] text-ink-soft">
                <strong className="text-ink">החל מ-</strong> {price}
              </span>
            )}
            <Contact
              tone="onLight"
              className="mt-2 justify-start border-t border-line-soft pt-5 max-sm:flex-col max-sm:items-stretch max-sm:[&_a]:w-full"
            />
          </div>
        </div>
      ) : null}
    </Modal>
  );
};
