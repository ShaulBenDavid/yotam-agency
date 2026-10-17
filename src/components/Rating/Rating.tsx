import React from 'react';
import { FaStar } from 'react-icons/fa';

const MAX_STARS = 5;

interface RatingProps {
  rate: number;
}

export const Rating = ({ rate }: RatingProps): JSX.Element => (
  <div className="flex items-center gap-0.5" style={{ direction: 'ltr' }}>
    {Array.from({ length: MAX_STARS }).map((_, index) => (
      <FaStar
        size={14}
        key={index}
        className={rate >= index + 1 ? 'text-amber-400' : 'text-line'}
        aria-hidden
      />
    ))}
    <span className="sr-only">{`${rate} out of ${MAX_STARS} stars`}</span>
  </div>
);
