import React from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import theme from '@/styles/tailwind.theme';
import S from './CarouselController.module.css';

interface CarouselControllerProps {
  handleScroll: (pixels: number) => void;
  isShowLeft: boolean;
  isShowRight: boolean;
}

export const CarouselController = ({
  handleScroll,
  isShowLeft,
  isShowRight,
}: CarouselControllerProps): JSX.Element => (
  <>
    {isShowLeft && (
      <div className={S.leftBackground}>
        <button
          aria-label="previous sections"
          tabIndex={0}
          className="tb:p-4 group duration-75"
          onClick={() => handleScroll(-1)}
        >
          <SlArrowLeft
            color={theme.white}
            size={32}
            className="group-hover:scale-110"
          />
        </button>
      </div>
    )}
    {isShowRight && (
      <div className={S.rightBackground}>
        <button
          aria-label="next sections"
          tabIndex={0}
          className="tb:p-4 group duration-75"
          onClick={() => handleScroll(1)}
        >
          <SlArrowRight
            color={theme.white}
            size={32}
            className="group-hover:scale-110"
          />
        </button>
      </div>
    )}
  </>
);
