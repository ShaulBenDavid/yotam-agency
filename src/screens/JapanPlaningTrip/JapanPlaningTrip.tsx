import React from 'react';
import JapanImage from '@/assets/images/jpLandImg.jpg';
import { Intro } from '@/features/Intro';
import { PlaningInfo } from './components/PlaningInfo';
import { InfoList } from './components/InfoList';

export const JapanPlaningTrip = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center gap-3 pb-8 tb:gap-4"
      id="japan-planing-trip"
      tabIndex={-1}
    >
      <Intro
        title="תכנון וייעוץ למסלול ביפן"
        image={JapanImage.src}
        maxHeight="250px"
      />
      <div className="max-w-[900px] py-2 tb:py-4">
        <p className="app-p">
          יפן היא מדינה מדהימה, אבל מורכבת לטיול עצמאי. התרבות, השפה, התחבורה
          וההרגלים המקומיים שונים ממה שרוב המטיילים מכירים. תכנון נכון יכול
          להפוך את החוויה שלך מחופשה מסובכת למסע בלתי נשכח. למה כדאי להיעזר
          בייעוץ מקצועי לתכנון טיול ליפן?
        </p>
      </div>
      <InfoList />
      <PlaningInfo />
    </div>
  );
};
