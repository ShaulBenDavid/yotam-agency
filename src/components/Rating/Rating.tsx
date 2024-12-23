import theme from '@/styles/tailwind.theme';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const MAX_STARS = 5;

interface RatingProps {
  rate: number;
}

export const Rating = ({ rate }: RatingProps): JSX.Element => (
  <div className="flex items-center" style={{ direction: 'ltr' }}>
    {Array.from({ length: MAX_STARS }).map((_, index) => (
      <FaStar
        size={16}
        key={index}
        color={rate >= index + 1 ? theme.yellow[500] : theme.gray[500]}
        className="drop-shadow-md"
        aria-hidden
      />
    ))}
    <span className="sr-only">4 out of 5 stars</span>
  </div>
);
