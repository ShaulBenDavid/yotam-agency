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
import { MdPlace } from 'react-icons/md';
import { ARIA_HOTEL_INFO_MODAL } from '@/components/HotelCard';
import { Modal } from '@/components/Modal';
import { ModalCloseButton } from '@/components/ModalCloseButton';
import { Hotel } from '@/sanity/types';
import { forUrl } from '@/sanity/sanity.utils';
import { Rating } from '@/components/Rating';
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
        <div className="relative flex w-full flex-col tb:w-[min(90vw,640px)]">
          <div className="w-full bg-tint [--swiper-navigation-size:22px] [--swiper-pagination-bullet-inactive-color:#ffffff] [--swiper-pagination-bullet-inactive-opacity:0.6] [--swiper-theme-color:#ffffff]">
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
                  unoptimized
                  width={0}
                  height={0}
                  className="aspect-video max-h-72 w-full object-cover object-top"
                />
              </SwiperSlide>
              {gallery?.map(({ alt, asset }) => (
                <SwiperSlide key={forUrl(asset).url()}>
                  <Image
                    src={mainImage && forUrl(asset).url()}
                    alt={`hotel - ${alt}`}
                    loading="lazy"
                    unoptimized
                    width={0}
                    height={0}
                    className="aspect-video max-h-72 w-full object-cover object-center tb:object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <ModalCloseButton onClose={onClose} />
          <div className="flex h-full flex-col gap-3 p-5 tb:p-7">
            <h3
              className="w-full text-left text-lg font-extrabold capitalize leading-snug tb:text-xl"
              style={{ direction: 'ltr' }}
            >
              {title}
            </h3>
            <div
              className="flex flex-row items-center gap-2"
              style={{ direction: 'ltr' }}
            >
              <span
                aria-label={`Hotel rate - ${reviewScore}`}
                className="min-w-9 rounded-card bg-primary-950 px-2 py-0.5 text-center text-sm font-bold text-white"
              >
                {reviewScore}
              </span>
              <Rating rate={starRating as number} />
            </div>
            <p className="ds-body text-[15px]">{description}</p>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-primary-950"
            >
              <address
                className="first-capitalize flex flex-row gap-1.5 text-sm not-italic leading-relaxed"
                style={{ direction: 'ltr' }}
              >
                <MdPlace size={16} aria-hidden className="mt-0.5 shrink-0" />
                {address}
              </address>
            </a>
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
