'use client';

import React, { useCallback, useRef } from 'react';
import { useIsScroll } from '@/hooks';
import { useShowsButtons } from './useShowsButtons';
import { CarouselController } from './components/CarouselController';
import { MoreHotel } from '../HotelCard/MoreHotel';

interface DataProps {
  _id: string;
}

interface CarouselProps<T extends DataProps> {
  data: T[];
  cardRender: (item: T) => JSX.Element;
  showContact?: boolean;
}

export const Carousel = <T extends DataProps>({
  data,
  cardRender,
  showContact,
}: CarouselProps<T>): JSX.Element => {
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
        className="flex h-full w-full snap-x snap-mandatory scroll-px-[-20x] overflow-x-scroll py-2 scrollbar-none"
        ref={scrollRef}
        aria-label="Hotels"
      >
        {data.map((item) => (
          <li
            className="mr-4 w-[70%] min-w-52 shrink-0 snap-start snap-always tb:w-1/3"
            key={item._id}
          >
            {cardRender(item)}
          </li>
        ))}
        {showContact && (
          <li className="mr-4 w-[70%] min-w-52 shrink-0 snap-start snap-always tb:w-1/3">
            <MoreHotel />
          </li>
        )}
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
