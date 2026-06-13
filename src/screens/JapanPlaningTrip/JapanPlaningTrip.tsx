import React from 'react';
import { GiJapan } from 'react-icons/gi';
import { Intro } from '@/features/Intro';
import { ContactForm } from '@/components/ContactForm';
import { ContactUs } from '@/features/ContactUs';
import { Routes } from '@/routes';
import { ShareWithFriends } from '@/features/ShareWithFriends';
import { PlaningInfo } from './components/PlaningInfo';
import { InfoList } from './components/InfoList';
import JapanImage from './jpConsImg.png';

export const JapanPlaningTrip = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center gap-2 pb-8 tb:gap-4"
      id="japan-planing-trip"
      tabIndex={-1}
    >
      <Intro
        title="תכנון טיול ליפן בהתאמה אישית"
        image={JapanImage.src}
        maxHeight="320px"
      />
      <GiJapan size={80} aria-hidden />
      <div className="max-w-[900px] py-2 tb:py-4">
        <p className="app-p">
          תכנון טיול ליפן יכול להפוך במהירות למשימה מורכבת. אנחנו בונים עבורכם
          מסלול אישי ומפורט המותאם לסגנון הטיול, לקצב, להעדפות ולתקציב שלכם, תוך
          תכנון נכון של התחבורה, המלונות והאטרקציות. כך תוכלו ליהנות מהטיול בראש
          שקט, לחסוך שעות של חיפוש מידע והתלבטויות, ולהפיק את המקסימום מהזמן
          שלכם ביפן.
        </p>
      </div>
      <InfoList />
      <PlaningInfo />
      <div className="mt-2 flex w-full flex-col-reverse gap-4 tb:flex-row">
        <ContactForm />
        <ContactUs />
      </div>
      <ShareWithFriends url={Routes.JAPAN_PLANING_TRIP} />
    </div>
  );
};
