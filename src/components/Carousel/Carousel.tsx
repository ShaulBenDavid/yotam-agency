'use client';

import React, { useCallback, useRef } from 'react';
import { useIsScroll } from '@/hooks';
import { useShowsButtons } from './useShowsButtons';
import { CarouselController } from './components/CarouselController';
import Test from '@/assets/images/japanB.jpg';
import Test2 from '@/assets/images/jpLandImg.jpg';
import { HotelCard } from '../HotelCard';

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
  const scrollRef = useRef<HTMLUListElement>(null);
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
      <ul
        className="scrollbar-none flex h-full w-full snap-x snap-mandatory scroll-px-[-20x] overflow-x-scroll py-2"
        ref={scrollRef}
        aria-label="Hotels"
      >
        {data.map(({ name, image, stars, rate, fromPrice }) => (
          <li
            className="tb:w-1/3 mr-4 w-[70%] min-w-52 shrink-0 snap-start snap-always"
            key={name}
          >
            <HotelCard
              name={name}
              image={image.src}
              address="asdas dasdasd asdas, asd"
              stars={stars}
              rate={rate}
              fromPrice={fromPrice}
            />
          </li>
        ))}
      </ul>
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
