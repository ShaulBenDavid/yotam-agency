import { contactData, WEBSITE_URL } from '@/constants';
import { formatDateToCustomFormat } from '@/utils';
import React from 'react';

const page = () => (
  <div className="flex h-full flex-1 items-center justify-center bg-gray-100 p-6">
    <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-lg">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">מדיניות פרטיות</h1>
      <p className="mb-6 text-sm text-gray-500">
        עודכן לאחרונה: {formatDateToCustomFormat(new Date())}
      </p>

      <h2 className="mb-2 text-lg font-semibold text-gray-800">
        1. מבוא
      </h2>
      <p className="mb-4 text-gray-700">
        אתר {WEBSITE_URL} ({`"האתר"`}) מכבד את פרטיותכם. מדיניות זו מסבירה אילו
        מידע אנו אוספים, כיצד אנו משתמשים בו, ואילו זכויות עומדות לרשותכם.
      </p>

      <h2 className="mb-2 text-lg font-semibold text-gray-800">
        2. מידע שאנו אוספים
      </h2>
      <p className="mb-4 text-gray-700">
        בעת גלישה באתר או יצירת קשר דרך טופס יצירת הקשר, אנו עשויים לאסוף פרטי
        זיהוי כגון שם, כתובת אימייל ומספר טלפון, לצורך מענה לפנייתכם וייעוץ
        בתכנון הטיול.
      </p>

      <h2 className="mb-2 text-lg font-semibold text-gray-800">
        3. עוגיות (Cookies) וטכנולוגיות מעקב
      </h2>
      <p className="mb-2 text-gray-700">
        האתר משתמש בעוגיות ובכלי מדידה ופרסום של צדדים שלישיים, לרבות{' '}
        <strong>Google Ads</strong>, על מנת למדוד את ביצועי הקמפיינים
        הפרסומיים ולשפר את חוויית המשתמש. עוגיות אלו נטענות רק לאחר קבלת
        הסכמתכם באמצעות באנר העוגיות המוצג באתר.
      </p>
      <p className="mb-4 text-gray-700">
        ניתן לבטל בכל עת את הסכמתכם למעקב פרסומי דרך{' '}
        <a
          href="https://adssettings.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          הגדרות הפרסום של Google
        </a>
        .
      </p>

      <h2 className="mb-2 text-lg font-semibold text-gray-800">
        4. שימוש במידע
      </h2>
      <p className="mb-4 text-gray-700">
        המידע שנאסף משמש אותנו לצורך מתן מענה לפניות, שיפור האתר והשירות,
        ומדידת יעילות הקמפיינים השיווקיים שלנו.
      </p>

      <h2 className="mb-2 text-lg font-semibold text-gray-800">
        5. שיתוף מידע עם צדדים שלישיים
      </h2>
      <p className="mb-4 text-gray-700">
        אנו לא מוכרים את המידע האישי שלכם. מידע אנונימי ומצטבר עשוי להיות
        משותף עם ספקי שירות כגון Google (לצורך פרסום ומדידה) ו-Sanity (לניהול
        תוכן האתר), בהתאם למדיניות הפרטיות שלהם.
      </p>

      <h2 className="mb-2 text-lg font-semibold text-gray-800">
        6. זכויותיכם
      </h2>
      <p className="mb-4 text-gray-700">
        באפשרותכם לבקש בכל עת עיון, תיקון או מחיקה של המידע האישי שנשמר אודותיכם,
        וכן לסרב לשימוש בעוגיות שאינן חיוניות לפעילות האתר.
      </p>

      <h2 className="mb-2 text-lg font-semibold text-gray-800">
        7. שינויים במדיניות
      </h2>
      <p className="mb-4 text-gray-700">
        אנו עשויים לעדכן מדיניות זו מעת לעת. שינויים מהותיים יפורסמו בעמוד זה.
      </p>

      <h2 className="mb-2 text-lg font-semibold text-gray-800">
        8. יצירת קשר
      </h2>
      <p className="font-semibold text-gray-700">אימייל ליצירת קשר: </p>
      <a
        href={`mailto:${contactData.email}`}
        className="text-blue-600 hover:underline"
      >
        {contactData.email}
      </a>
      <p className="mt-4 font-semibold text-gray-700">טלפון: </p>
      <a
        href={`tel:+${contactData.phone.replace(/[+-]/g, '')}`}
        className="text-blue-600 hover:underline"
      >
        {contactData.phone}
      </a>
    </div>
  </div>
);

export default page;
