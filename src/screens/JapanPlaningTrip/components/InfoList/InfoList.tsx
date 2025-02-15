import React from 'react';
import { japanPoints } from './InfoList.config';

export const InfoList = (): JSX.Element => {
  return (
    <div className="max-w-2xl rounded-md bg-gray-100 p-2 shadow-lg tb:p-6">
      <h2 className="mb-4 border-b pb-2 text-lg font-bold text-primary-950 tb:text-2xl">
        למה כדאי להיעזר בייעוץ מקצועי לתכנון טיול ליפן?🇯🇵
      </h2>
      <ul className="space-y-3">
        {japanPoints.map(({ id, text }) => (
          <li
            key={id}
            className="rounded-md bg-white p-2 text-base font-medium shadow tb:p-3 tb:text-lg"
          >
            <span className="text-primary-900">{id}.</span> {text}
          </li>
        ))}
      </ul>
    </div>
  );
};
