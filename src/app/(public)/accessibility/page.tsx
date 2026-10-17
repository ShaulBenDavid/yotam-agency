import { contactData } from '@/constants';
import React from 'react';
import type { Metadata } from 'next';
import { accessibilityMetadata } from '@/metadata';

export const metadata: Metadata = accessibilityMetadata;

const page = () => (
  <div className="flex flex-1 justify-center px-4 py-12 tb:py-20">
    <div className="ds-card h-fit w-full max-w-3xl p-6 tb:p-12">
      <h1 className="ds-h1 mb-6">הצהרת נגישות</h1>
      <p className="mb-4 leading-[1.85] text-ink-soft">
        אנו מחויבים להנגשת האתר שלנו לכלל הגולשים, כולל אנשים עם מוגבלויות, על
        מנת לספק חוויית גלישה נוחה, זמינה ושוויונית לכולם.
      </p>
      <p className="mb-4 leading-[1.85] text-ink-soft">
        אנו ממשיכים לעבוד ולשפר את הנגישות באתר. אם נתקלתם בקושי או יש לכם הצעות
        לשיפור, נשמח לקבל מכם משוב:
      </p>
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
