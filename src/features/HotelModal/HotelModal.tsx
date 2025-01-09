'use client';

import React, { RefObject } from 'react';
import Image from 'next/image';
import { CgCloseO } from 'react-icons/cg';
import { ARIA_HOTEL_INFO_MODAL } from '@/components/HotelCard';
import { Modal } from '@/components/Modal';
import { Hotel } from '@/sanity/types';
import { forUrl } from '@/sanity/sanity.utils';
import { Rating } from '@/components/Rating';
import { MdPlace } from 'react-icons/md';

interface HotelModalProps {
  ref: RefObject<HTMLDialogElement | null>;
  onClose: () => void;
  data: Hotel;
}

export const HotelModal = ({
  ref,
  onClose,
  data,
}: HotelModalProps): JSX.Element => {
  const {
    mainImage,
    title,
    address,
    starRating,
    reviewScore,
    price,
    mapLink,
    description,
  } = data || {};

  return (
    <Modal ref={ref} closeModal={onClose} id={ARIA_HOTEL_INFO_MODAL}>
      <div className="shadow-card relative flex w-[80vw] max-w-[700px] flex-col rounded-md">
        <Image
          src={mainImage && forUrl(mainImage).url()}
          alt={`hotel - ${title}`}
          loading="lazy"
          sizes="60wv"
          width={0}
          height={0}
          className="aspect-video max-h-60 w-full min-w-96 rounded-t-md object-cover object-top"
        />
        <button
          aria-label="close modal"
          onClick={onClose}
          className="bg-primary-950 absolute right-2 top-2 rounded-full p-1"
        >
          <CgCloseO aria-hidden size={32} color="white" />
        </button>
        <div className="flex flex-col p-2">
          <h3
            className="tb:text-xl w-full pb-1 text-left text-base font-bold capitalize"
            style={{ direction: 'ltr' }}
          >
            {title}
          </h3>
          <p>{description}</p>
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
              aria-label={`Hotel rate - ${reviewScore}`}
              className="bg-primary-950 w-fit min-w-8 rounded-md p-1 text-center text-base font-semibold text-white"
            >
              {reviewScore}
            </span>
            <div>
              <Rating rate={starRating} />
            </div>
          </div>
          <div className="flex flex-row items-end justify-between gap-2 py-2">
            {price && (
              <span aria-label="price">
                <strong>החל מ-</strong> {price}
              </span>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
