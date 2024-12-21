import { Share } from '@/components/Share';
import React from 'react';

export const ShareWithFriends = (): JSX.Element => (
  <section className="tb:py-8 border-primary-950 rounded-md border-t px-2 py-4">
    <h2 className="tb:text-2xl text-center text-lg font-bold">
      אהבת?! ספר לחברים
    </h2>
    <p className="tb:text-xl text-center text-base font-medium">
      בין אם אתם אוהבים ערים, הרים, או חופים, בין אם אתם אוהבים טרקים, בטן גב או
      מטרופולין. המזרח בשבילכם!
    </p>

    <div className="flex justify-center py-4">
      <Share />
    </div>
  </section>
);
