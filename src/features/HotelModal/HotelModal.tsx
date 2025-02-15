'use client';

import React, { RefObject } from 'react';
import Image from 'next/image';
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CgCloseO } from 'react-icons/cg';
import { MdPlace } from 'react-icons/md';
import { ARIA_HOTEL_INFO_MODAL } from '@/components/HotelCard';
import { Modal } from '@/components/Modal';
import { Hotel } from '@/sanity/types';
import { forUrl } from '@/sanity/sanity.utils';
import { Rating } from '@/components/Rating';
import S from './style.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Contact } from '@/components/Contact';

interface HotelModalProps {
  ref: RefObject<HTMLDialogElement | null>;
  onClose: () => void;
  data?: Hotel;
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
    gallery,
  } = data || {};

  return (
    <Modal ref={ref} closeModal={onClose} id={ARIA_HOTEL_INFO_MODAL}>
      {data && mainImage ? (
        <div className="relative flex w-[90vw] max-w-[700px] flex-col rounded-md shadow-card">
          <div className={S.customPagination}>
            <Swiper
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
              className="mySwiper"
              keyboard
              centeredSlides
              navigation
              pagination={{
                clickable: true,
              }}
              rewind
            >
              <SwiperSlide>
                <Image
                  src={mainImage && forUrl(mainImage).url()}
                  alt={`hotel - ${title}`}
                  loading="lazy"
                  sizes="60wv"
                  width={0}
                  height={0}
                  className="aspect-video max-h-72 w-full rounded-t-md object-cover object-top"
                />
              </SwiperSlide>
              {gallery?.map(({ alt, asset }) => (
                <SwiperSlide key={forUrl(asset).url()}>
                  <Image
                    src={mainImage && forUrl(asset).url()}
                    alt={`hotel - ${alt}`}
                    loading="lazy"
                    sizes="60wv"
                    width={0}
                    height={0}
                    className="aspect-video max-h-72 w-full rounded-t-md object-cover object-center tb:object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button
            aria-label="close modal"
            onClick={onClose}
            className="absolute right-2 top-2 z-10 rounded-full bg-primary-950 p-1"
          >
            <CgCloseO aria-hidden size={32} color="white" />
          </button>
          <div className="flex h-full flex-col p-2">
            <h3
              className="w-full pb-1 text-left text-base font-bold capitalize tb:text-xl"
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
                className="w-fit min-w-8 rounded-md bg-primary-950 p-1 text-center text-base font-semibold text-white"
              >
                {reviewScore}
              </span>
              <div>
                <Rating rate={starRating as number} />
              </div>
            </div>
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
