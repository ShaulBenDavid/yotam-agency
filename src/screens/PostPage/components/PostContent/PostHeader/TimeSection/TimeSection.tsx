import React from 'react';

const MIN_READ_TIME = 1;

interface TimeSectionProps {
  createdAt: string;
  readingTime: number;
}

export const TimeSection = ({
  createdAt,
  readingTime,
}: TimeSectionProps): JSX.Element => (
  <div className="text-s text-primary-gray tb:self-end flex flex-row gap-1 font-medium">
    <time>
      {new Date(createdAt).toLocaleDateString('he-IL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })}
    </time>
    <span aria-hidden>·</span>
    <span>{readingTime || MIN_READ_TIME} דקות קריאה </span>
  </div>
);
