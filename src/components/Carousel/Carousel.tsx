'use client';

import React, { useCallback, useRef } from 'react';
import { useIsScroll } from '@/hooks';
import { useShowsButtons } from './useShowsButtons';
import { CarouselController } from './components/CarouselController';
import Test from '@/assets/images/japanB.jpg';
import Test2 from '@/assets/images/jpLandImg.jpg';
import Image from 'next/image';
import { Rating } from '../Rating';

const data = [
  {
    image: Test,
    name: 'Hilton - bangkok',
    stars: 4,
    rate: 8.4,
    fromPrice: 300,
  },
  {
    image: Test2,
    name: 'Hilton - bangkok',
    stars: 4,
    rate: 8.4,
    fromPrice: 300,
  },
  {
    image: Test,
    name: 'Hilton - bangkok',
    stars: 4,
    rate: 8.4,
    fromPrice: 300,
  },
  {
    image: Test,
    name: 'Hilton - bangkok',
    stars: 4,
    rate: 8.4,
    fromPrice: 300,
  },
  {
    image: Test,
    name: 'Hilton - bangkok',
    stars: 4,
    rate: 8.4,
    fromPrice: 300,
  },
  {
    image: Test,
    name: 'Hilton - bangkok',
    stars: 4,
    rate: 8.4,
    fromPrice: 300,
  },
];

export const Carousel = (): JSX.Element => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScroll = useIsScroll(scrollRef);
  const showsButtons = useShowsButtons(scrollRef);

  const handleScroll = useCallback((scrollTo: number) => {
    if (scrollRef?.current) {
      const left =
        scrollRef.current.children[0].getBoundingClientRect().width ?? 0;
      scrollRef.current.scrollBy({ left: scrollTo * left, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="relative flex h-fit w-full flex-col gap-2">
      <div
        className="scrollbar-none flex h-full w-full snap-x snap-mandatory scroll-px-[-20x] overflow-x-scroll py-2"
        ref={scrollRef}
      >
        {data.map(({ name, image, stars, rate, fromPrice }) => (
          <div
            className="tb:w-1/3 shadow-card mr-4 flex aspect-video w-[70%] min-w-52 shrink-0 snap-start snap-always flex-col rounded-md"
            key={name}
          >
            <Image
              src={image}
              alt={`hotel - ${name}`}
              loading="lazy"
              sizes="15wv"
              width={0}
              height={0}
              className="tb:max-h-60 aspect-square max-h-[200px] min-w-52 rounded-t-md object-cover object-top sm:aspect-video"
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
                  aria-label={`hotel rate - ${rate}`}
                  className="bg-primary-950 w-fit rounded-md p-1 text-base font-semibold text-white"
                >
                  {rate}
                </span>
                <div>
                  <Rating rate={stars} />
                </div>
              </div>
              <span>
                <strong>החל מ</strong> {fromPrice}
              </span>
            </div>
          </div>
        ))}
      </div>
      {isScroll && (
        <CarouselController
          handleScroll={handleScroll}
          isShowLeft={showsButtons.left}
          isShowRight={showsButtons.right}
        />
      )}
    </div>
  );
};
