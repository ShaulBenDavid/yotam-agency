import React from 'react';
import { ImageLink } from '@/components/ImageLink';
import { countriesConfig } from '@/constants/Countries.config';

export const Countries = (): JSX.Element => (
  <section className="tb:py-8 py-4">
    <h2 className="tb:text-2xl text-center text-xl font-bold">
      טיילו איתנו במדינות הכי ״חמות״ במזרח
    </h2>
    <p className="tb:text-xl text-center text-base font-medium">
      בין אם אתם אוהבים ערים, הרים, או חופים, בין אם אתם אוהבים טרקים, בטן גב או
      מטרופולין. המזרח בשבילכם!
    </p>
    <div className="tb:flex-row tb:gap-8 flex flex-col justify-between gap-2 pt-4">
      {countriesConfig.map(({ title, href, image }) => (
        <ImageLink title={title} href={`/${href}`} image={image} key={href} />
      ))}
    </div>
  </section>
);
