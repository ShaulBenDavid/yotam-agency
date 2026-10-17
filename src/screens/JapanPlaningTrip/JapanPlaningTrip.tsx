import React from 'react';
import { GiJapan } from 'react-icons/gi';
import { Intro } from '@/features/Intro';
import { ContactForm } from '@/components/ContactForm';
import { ContactUs } from '@/features/ContactUs';
import { Routes } from '@/routes';
import { Section } from '@/components/Section';
import { ShareWithFriends } from '@/features/ShareWithFriends';
import { PlaningInfo } from './components/PlaningInfo';
import { InfoList } from './components/InfoList';
import JapanImage from './jpConsImg.png';

export const JapanPlaningTrip = (): JSX.Element => {
  return (
    <div className="flex flex-col" id="japan-planing-trip" tabIndex={-1}>
      <Intro
        title="תכנון טיול ליפן בהתאמה אישית"
        image={JapanImage.src}
        maxHeight="400px"
      />
      <Section width="prose" innerClassName="flex flex-col items-center">
        <GiJapan size={64} aria-hidden className="mb-6 text-primary-950" />
        <p className="ds-body text-center text-[17px]">
          תכנון טיול ליפן יכול להפוך במהירות למשימה מורכבת. אנחנו בונים עבורכם
          מסלול אישי ומפורט המותאם לסגנון הטיול, לקצב, להעדפות ולתקציב שלכם, תוך
          תכנון נכון של התחבורה, המלונות והאטרקציות. כך תוכלו ליהנות מהטיול בראש
          שקט, לחסוך שעות של חיפוש מידע והתלבטויות, ולהפיק את המקסימום מהזמן
          שלכם ביפן.
        </p>
      </Section>
      <InfoList />
      <PlaningInfo />
      <div className="ds-container py-10 empty:hidden tb:py-14">
        <div
          className="elfsight-app-0ccda39a-87b9-45d4-8ffc-ca63c7e79275"
          data-elfsight-app-lazy
        ></div>
      </div>
      <Section width="content" className="pt-0 tb:pt-0">
        <ContactForm />
      </Section>
      <ContactUs />
      <ShareWithFriends url={`/${Routes.JAPAN_PLANING_TRIP}`} />
    </div>
  );
};
