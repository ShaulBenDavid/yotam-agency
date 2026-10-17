'use client';

import React, { useCallback, useRef } from 'react';
import { useIsScroll } from '@/hooks';
import { useShowsButtons } from './useShowsButtons';
import { CarouselController } from './components/CarouselController';
import { ContactCard } from '../ContactCard';

const SLIDE_GAP_PX = 20;

const slideClassName =
  'w-[78%] shrink-0 snap-start snap-always sm:w-[calc((100%-16px)/2)] tb:w-[calc((100%-40px)/3)] md:w-[calc((100%-60px)/4)]';

interface DataProps {
  _id: string;
}

interface CarouselProps<T extends DataProps> {
  data: T[];
  cardRender: (item: T) => JSX.Element;
  subject: string;
}

export const Carousel = <T extends DataProps>({
  data,
  cardRender,
  subject,
}: CarouselProps<T>): JSX.Element => {
  const scrollRef = useRef<HTMLUListElement>(null);
  const isScroll = useIsScroll(scrollRef);
  const showsButtons = useShowsButtons(scrollRef);

  const handleScroll = useCallback((scrollTo: number) => {
    if (scrollRef?.current) {
      const slideWidth =
        scrollRef.current.children[0].getBoundingClientRect().width ?? 0;
      scrollRef.current.scrollBy({
        left: scrollTo * (slideWidth + SLIDE_GAP_PX),
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div className="relative flex h-fit w-full flex-col">
      <ul
        className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 pt-1 scrollbar-none tb:mx-0 tb:scroll-px-0 tb:gap-5 tb:px-0"
        ref={scrollRef}
        aria-label="Hotels"
      >
        {data.map((item) => (
          <li className={slideClassName} key={item._id}>
            {cardRender(item)}
          </li>
        ))}
        <li className={slideClassName}>
          <ContactCard subject={subject} />
        </li>
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
