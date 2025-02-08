import { contactData } from '@/constants';
import React from 'react';

const page = () => (
  <div className="flex h-full flex-1 items-center justify-center bg-gray-100 p-6">
    <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-lg">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">הצהרת נגישות</h1>
      <p className="mb-4 text-gray-700">
        אנו מחויבים להנגשת האתר שלנו לכלל הגולשים, כולל אנשים עם מוגבלויות, על
        מנת לספק חוויית גלישה נוחה, זמינה ושוויונית לכולם.
      </p>
      <p className="mb-4 text-gray-700">
        אנו ממשיכים לעבוד ולשפר את הנגישות באתר. אם נתקלתם בקושי או יש לכם הצעות
        לשיפור, נשמח לקבל מכם משוב:
      </p>
      <p className="font-semibold text-gray-700">אימייל ליצירת קשר: </p>
      <a
        href={`mailto:${contactData.email}`}
        className="text-blue-600 hover:underline"
      >
        {contactData.email}
      </a>
      <p className="mt-4 font-semibold text-gray-700">טלפון: </p>
      <a
        href={`tel:${contactData.phone.replace(/[+-]/g, '')}`}
        className="text-blue-600 hover:underline"
      >
        {contactData.phone}
      </a>
    </div>
  </div>
);

export default page;
