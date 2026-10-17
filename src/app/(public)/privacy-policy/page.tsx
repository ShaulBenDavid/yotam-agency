import { contactData, WEBSITE_URL } from '@/constants';
import { formatDateToCustomFormat } from '@/utils';
import React from 'react';
import type { Metadata } from 'next';
import { privacyPolicyMetadata } from '@/metadata';

export const metadata: Metadata = privacyPolicyMetadata;

const page = () => (
  <div className="flex flex-1 justify-center px-4 py-12 tb:py-20">
    <div className="ds-card h-fit w-full max-w-3xl p-6 tb:p-12">
      <h1 className="ds-h1 mb-6">מדיניות פרטיות</h1>
      <p className="mb-6 text-sm text-ink-muted">
        עודכן לאחרונה: {formatDateToCustomFormat(new Date())}
      </p>

      <h2 className="mb-2 mt-8 text-lg font-extrabold text-ink tb:text-xl">
        1. מבוא
      </h2>
      <p className="mb-4 leading-[1.85] text-ink-soft">
        אתר {WEBSITE_URL} ({`"האתר"`}) מכבד את פרטיותכם. מדיניות זו מסבירה אילו
        מידע אנו אוספים, כיצד אנו משתמשים בו, ואילו זכויות עומדות לרשותכם.
      </p>

      <h2 className="mb-2 mt-8 text-lg font-extrabold text-ink tb:text-xl">
        2. מידע שאנו אוספים
      </h2>
      <p className="mb-4 leading-[1.85] text-ink-soft">
        בעת גלישה באתר או יצירת קשר דרך טופס יצירת הקשר, אנו עשויים לאסוף פרטי
        זיהוי כגון שם, כתובת אימייל ומספר טלפון, לצורך מענה לפנייתכם וייעוץ
        בתכנון הטיול.
      </p>

      <h2 className="mb-2 mt-8 text-lg font-extrabold text-ink tb:text-xl">
        3. עוגיות (Cookies) וטכנולוגיות מעקב
      </h2>
      <p className="mb-2 leading-[1.85] text-ink-soft">
        האתר משתמש בעוגיות ובכלי מדידה ופרסום של צדדים שלישיים, לרבות{' '}
        <strong>Google Ads</strong>, על מנת למדוד את ביצועי הקמפיינים הפרסומיים
        ולשפר את חוויית המשתמש. עוגיות אלו נטענות רק לאחר קבלת הסכמתכם באמצעות
        באנר העוגיות המוצג באתר.
      </p>
      <p className="mb-4 leading-[1.85] text-ink-soft">
        ניתן לבטל בכל עת את הסכמתכם למעקב פרסומי דרך{' '}
        <a
          href="https://adssettings.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="ds-link"
        >
          הגדרות הפרסום של Google
        </a>
        .
      </p>

      <h2 className="mb-2 mt-8 text-lg font-extrabold text-ink tb:text-xl">
        4. שימוש במידע
      </h2>
      <p className="mb-4 leading-[1.85] text-ink-soft">
        המידע שנאסף משמש אותנו לצורך מתן מענה לפניות, שיפור האתר והשירות, ומדידת
        יעילות הקמפיינים השיווקיים שלנו.
      </p>

      <h2 className="mb-2 mt-8 text-lg font-extrabold text-ink tb:text-xl">
        5. שיתוף מידע עם צדדים שלישיים
      </h2>
      <p className="mb-4 leading-[1.85] text-ink-soft">
        אנו לא מוכרים את המידע האישי שלכם. מידע אנונימי ומצטבר עשוי להיות משותף
        עם ספקי שירות כגון Google (לצורך פרסום ומדידה) ו-Sanity (לניהול תוכן
        האתר), בהתאם למדיניות הפרטיות שלהם.
      </p>

      <h2 className="mb-2 mt-8 text-lg font-extrabold text-ink tb:text-xl">
        6. זכויותיכם
      </h2>
      <p className="mb-4 leading-[1.85] text-ink-soft">
        באפשרותכם לבקש בכל עת עיון, תיקון או מחיקה של המידע האישי שנשמר
        אודותיכם, וכן לסרב לשימוש בעוגיות שאינן חיוניות לפעילות האתר.
      </p>

      <h2 className="mb-2 mt-8 text-lg font-extrabold text-ink tb:text-xl">
        7. שינויים במדיניות
      </h2>
      <p className="mb-4 leading-[1.85] text-ink-soft">
        אנו עשויים לעדכן מדיניות זו מעת לעת. שינויים מהותיים יפורסמו בעמוד זה.
      </p>

      <h2 className="mb-2 mt-8 text-lg font-extrabold text-ink tb:text-xl">
        8. יצירת קשר
      </h2>
      <p className="font-semibold leading-[1.85] text-ink-soft">
        אימייל ליצירת קשר:{' '}
      </p>
      <a href={`mailto:${contactData.email}`} className="ds-link">
        {contactData.email}
      </a>
      <p className="mt-4 font-semibold leading-[1.85] text-ink-soft">טלפון: </p>
      <a
        href={`tel:+${contactData.phone.replace(/[+-]/g, '')}`}
        className="ds-link"
      >
        {contactData.phone}
      </a>
    </div>
  </div>
);

export default page;
