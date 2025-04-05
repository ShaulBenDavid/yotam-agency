import React from 'react';
import { GiJapan } from 'react-icons/gi';
import { Intro } from '@/features/Intro';
import { ContactForm } from '@/components/ContactForm';
import { ContactUs } from '@/features/ContactUs';
import { Routes } from '@/routes';
import { ShareWithFriends } from '@/features/ShareWithFriends';
import { PlaningInfo } from './components/PlaningInfo';
import { InfoList } from './components/InfoList';
import { AboutMe } from '../../components/AboutMe';
import JapanImage from './jpConsImg.png';
import NatiImg from './natiImg.jpeg';

export const JapanPlaningTrip = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center gap-2 pb-8 tb:gap-4"
      id="japan-planing-trip"
      tabIndex={-1}
    >
      <Intro
        title="ייעוץ ותכנון מסלול ליפן - 2025"
        image={JapanImage.src}
        maxHeight="320px"
      />
      <GiJapan size={80} aria-hidden />
      <div className="max-w-[900px] py-2 tb:py-4">
        <p className="app-p">
          יפן היא מדינה מדהימה, אבל מורכבת לטיול עצמאי. התרבות, השפה, התחבורה
          וההרגלים המקומיים שונים ממה שרוב המטיילים מכירים. תכנון נכון יכול
          להפוך את החוויה שלך מחופשה מסובכת למסע בלתי נשכח.
        </p>
      </div>
      <AboutMe
        imgUrl={NatiImg.src}
        altName="נתנאל"
        title="מי אני?"
        description={
          <>
            שמי <strong>נתנאל</strong> (נתי) בן דוד ובשש השנים האחרונות אני
            מתגורר בעיירה קטנה וציורית בשם קארויזאווה (Karuizawa), אשר נמצאת
            במחוז נגאנו באלפים היפניים. הקשר שלי עם יפן נרקם ממש ממש מזמן -
            בתקופת בית הספר היסודי - בחוג הג׳ודו שבמתנ״ס בשכונת ארמון הנציב
            בירושלים. עם השנים, האהבה ליפן התחזקה ובהמשך הדרך הצטרפתי למחלקה
            ללימודי מזרח אסיה באוניברסיטה העברית, שם התמחיתי בתרבות ובשפה
            היפנית. ביקרתי ביפן מספר פעמים לפני שעברתי להתגורר בה ולכן אני מבין
            את הצד של המטיילים ומעודכן במקומות המתוירים וגם הפחות מתוירים. אשמח
            לעזור לכם לקבל פרספקטיבה על הטיול העתידי שלכם ליפן! בואו נצא לדרך
          </>
        }
      />
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
