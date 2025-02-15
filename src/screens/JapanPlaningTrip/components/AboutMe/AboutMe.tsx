import React from 'react';
import NatiImg from './natiImg.jpeg';
import Image from 'next/image';

export const AboutMe = (): JSX.Element => (
  <section className="flex flex-col gap-2 rounded-md bg-primary-950 p-2 text-white shadow-xl tb:flex-row">
    <Image
      src={NatiImg.src}
      alt={`תמונה של נתנאל`}
      loading="lazy"
      sizes="15wv"
      width={0}
      height={0}
      className="max-h-96 w-full rounded-md rounded-t-md object-cover object-top tb:min-w-80"
    />
    <div className="flex flex-col">
      <h2 className="mb-2 border-b pb-2 text-lg font-bold tb:text-2xl">
        מי אני?
      </h2>
      <p className="rounded-md p-2 text-base font-medium tb:p-3 tb:text-lg">
        שמי <strong>נתנאל</strong> (נתי) בן דוד ובשש השנים האחרונות אני מתגורר
        בעיירה קטנה וציורית בשם קארויזאווה (Karuizawa), אשר נמצאת במחוז נגאנו
        באלפים היפניים. הקשר שלי עם יפן נרקם ממש ממש מזמן - בתקופת בית הספר
        היסודי - בחוג הג׳ודו שבמתנ״ס בשכונת ארמון הנציב בירושלים. עם השנים,
        האהבה ליפן התחזקה ובהמשך הדרך הצטרפתי למחלקה ללימודי מזרח אסיה
        באוניברסיטה העברית, שם התמחיתי בתרבות ובשפה היפנית. ביקרתי ביפן מספר
        פעמים לפני שעברתי להתגורר בה ולכן אני מבין את הצד של המטיילים ומעודכן
        במקומות המתוירים וגם הפחות מתוירים. אשמח לעזור לכם לקבל פרספקטיבה על
        הטיול העתידי שלכם ליפן! בואו נצא לדרך
      </p>
    </div>
  </section>
);
