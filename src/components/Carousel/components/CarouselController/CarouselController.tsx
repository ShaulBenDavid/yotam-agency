import React from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

interface CarouselControllerProps {
  handleScroll: (pixels: number) => void;
  isShowLeft: boolean;
  isShowRight: boolean;
}

const controlClassName =
  'absolute top-[calc(50%-24px)] z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-primary-950 shadow-lift transition hover:bg-primary-950 hover:text-white max-tb:hidden';

export const CarouselController = ({
  handleScroll,
  isShowLeft,
  isShowRight,
}: CarouselControllerProps): JSX.Element => (
  <>
    {isShowLeft && (
      <button
        type="button"
        aria-label="previous sections"
        tabIndex={-1}
        className={`${controlClassName} -left-5`}
        onClick={() => handleScroll(-1)}
      >
        <SlArrowLeft size={16} aria-hidden />
      </button>
    )}
    {isShowRight && (
      <button
        type="button"
        aria-label="next sections"
        tabIndex={-1}
        className={`${controlClassName} -right-5`}
        onClick={() => handleScroll(1)}
      >
        <SlArrowRight size={16} aria-hidden />
      </button>
    )}
  </>
);
