import React from 'react';
import type { Metadata } from 'next';
import { ContactUs } from '@/features/ContactUs';
import { Section } from '@/components/Section';
// import { Countries } from '@/screens/Root/components/Countries';
import { AboutMe } from '@/components/AboutMe';
import YotamImg from '@/assets/images/yotamImg.jpeg';
import { aboutUsMetadata } from '@/metadata';

export const metadata: Metadata = aboutUsMetadata;

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <Section width="prose" innerClassName="text-center">
        <span
          aria-hidden
          className="mx-auto mb-4 block h-[3px] w-8 rounded-full bg-accent"
        />
        <h1 className="ds-h1 mb-6">עלינו🇯🇵</h1>
        <p className="whitespace-pre-line text-[17px] font-medium leading-[1.9] text-ink-soft tb:text-lg">
          {`FlySan היא סוכנות נסיעות המתמחה בטיולים ליפן 🇯🇵
המטרה שלנו – לעזור לכם לחוות את יפן לעומק, בצורה חכמה, נוחה ומרגשת.
עם ידע מקומי, קשרים בשטח וניסיון של שנים בתכנון טיולים, אנחנו בונים עבורכם מסלולים אישיים ומדויקים – כולל לינה, תחבורה, אטרקציות, אוכל, וטיפים קטנים שהופכים את כל החוויה לבלתי נשכחת.
בין אם זו הפעם הראשונה שלכם ביפן או שאתם חוזרים להתאהב בה מחדש – אנחנו כאן כדי לדאוג להכול.
🌸✨ FlySan – מתכננים חכם, מטיילים רגוע.`}
        </p>
      </Section>
      <Section tone="tint" width="content">
        <AboutMe
          imgUrl={YotamImg.src}
          altName="יותם"
          title="מי אנחנו?"
          classNameImg="object-center"
          description={
            <>
              <p>
                FlySan הוקמה על ידי יותם בן דוד מתוך אהבה אמיתית ליפן ומתוך
                הרצון להפוך את תהליך תכנון הטיול לפשוט, מסודר ומהנה יותר.
              </p>

              <p>
                בשנים האחרונות ליווינו עשרות מטיילים ישראלים בתכנון טיולים ליפן
                – החל מזוגות ומשפחות ועד קבוצות חברים.
              </p>

              <p>
                ביחד עם יותם עובד נתנאל בן דוד, שחי ביפן כבר 7 שנים ומהווה חלק
                בלתי נפרד מ־FlySan. הניסיון המקומי וההיכרות היומיומית שלנו עם
                יפן מאפשרים לנו להעניק למטיילים מידע עדכני, המלצות מהשטח וזווית
                מקומית אמיתית.
              </p>

              <p>
                אנו בונים לכל לקוח מסלול אישי המותאם בדיוק לסגנון הטיול, לתקציב
                ולחלומות שלו, תוך דגש על ניצול נכון של הזמן, תחבורה נוחה, מלונות
                מתאימים ואטרקציות שבאמת שוות את הזמן והכסף.
              </p>

              <p>
                מעבר לבניית המסלול, אנו מלווים את המטיילים שלנו גם בהזמנת
                מלונות, אטרקציות, סיורים והעברות – כדי לאפשר חוויית תכנון נוחה
                ומסודרת במקום אחד.
              </p>

              <p>
                המטרה שלנו היא לא רק לבנות לכם מסלול, אלא לתת לכם שקט נפשי
                וביטחון לאורך כל הדרך – מהרגע הראשון ועד החזרה לארץ.
              </p>
            </>
          }
        />
      </Section>
      {/* <Countries /> */}
      <ContactUs />
    </div>
  );
};

export default AboutUs;
