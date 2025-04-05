import React from 'react';
import { ContactUs } from '@/features/ContactUs';
import { Countries } from '@/screens/Root/components/Countries';
import { AboutMe } from '@/components/AboutMe';
import YotamImg from '@/assets/images/yotamImg.jpeg';

const AboutUs = () => {
  return (
    <section className="flex flex-col gap-3 py-2 tb:py-4">
      <h1 className="text-center text-xl font-bold tb:text-2xl">עלינו</h1>
      <p className="text-center text-lg font-semibold">
        פלייסאן היא סוכנות נסיעות המתמחה בטיולים למזרח הרחוק, עם דגש על חוויות
        ייחודיות, שירות אישי ותכנון מדויק. בזכות הקשרים המקומיים שלנו והאהבה
        לאנשים ותרבויות, אנו מציעים חבילות טיול, מלונות, סיורים מודרכים וייעוץ
        מקצועי לכל יעד, כך שתוכלו ליהנות מחופשה בלתי נשכחת בראש שקט. 🌏✈️
      </p>
      <AboutMe
        imgUrl={YotamImg.src}
        altName="יותם"
        title="מי אני?"
        description={
          <>
            נעים להכיר! אני <strong>יותם בן דוד</strong>, ואחרי שנים של טיולים
            במזרח – מיפן ועד תאילנד, וייטנאם, הודו, סרי לנקה ועוד – ועזרה
            למטיילים בתכנון וסגירת טיולים,החלטתי להקים את{' '}
            <strong>FlySan</strong>. המטרה שלי היא לעזור לכם לטייל בצורה חכמה,
            נוחה ומהנה, עם מסלול שמתאים בדיוק לכם. דרך שיחות ייעוץ ובניית
            מסלולים אישיים, אני מספק לכם מידע אמין, טיפים חשובים, והמלצות
            למקומות מיוחדים – כולל לינה ואטרקציות במחירים שלא תמצאו לבד.
            <br />
            אם אתם מתכננים טיול ליפן או למזרח – אני כאן כדי להפוך את התכנון
            לפשוט, מדויק ונטול דאגות.
          </>
        }
      />
      <Countries />
      <ContactUs />
    </section>
  );
};

export default AboutUs;
