'use client';

import React, { RefObject } from 'react';
import Image from 'next/image';

import { CgCloseO } from 'react-icons/cg';
import { Modal } from '@/components/Modal';
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
        <div className="relative flex w-[90vw] max-w-[700px] flex-col rounded-md shadow-card">
          <Image
            src={mainImage && forUrl(mainImage).url()}
            alt={`hotel - ${title}`}
            loading="lazy"
            sizes="60wv"
            width={0}
            height={0}
            className="aspect-video max-h-72 min-h-56 w-full rounded-t-md object-contain object-top"
          />

          <button
            aria-label="close modal"
            onClick={onClose}
            className="absolute right-2 top-2 z-10 rounded-full bg-primary-950 p-1"
          >
            <CgCloseO aria-hidden size={32} color="white" />
          </button>
          <div className="flex flex-col p-2">
            <h3 className="w-full pb-1 text-base font-bold capitalize tb:text-xl">
              {title}
            </h3>
            <p>{description}</p>

            <div className="flex flex-row items-end justify-between gap-2 py-2">
              {price && (
                <span aria-label="price">
                  <strong>החל מ-</strong> {price}
                </span>
              )}
            </div>
            <Contact />
          </div>
        </div>
      ) : null}
    </Modal>
  );
};
