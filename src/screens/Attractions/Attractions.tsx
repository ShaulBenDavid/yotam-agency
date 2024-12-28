import React from 'react';
import { ImageLink } from '@/components/ImageLink';
import { countriesConfig } from '@/constants/Countries.config';
import { FcGlobe } from 'react-icons/fc';
import { FcSportsMode } from 'react-icons/fc';
import { FcLandscape } from 'react-icons/fc';
import { FaUmbrellaBeach } from 'react-icons/fa6';
import { ContactUs } from '../Root/components/ContactUs';

export const Attractions = (): JSX.Element => (
  <div className="tb:py-4 flex w-full flex-col items-center gap-2 py-2">
    <h1 className="tb:text-3xl bg-primary-950 w-full rounded-md py-1 text-center text-2xl font-bold text-white">
      אטרקציות
    </h1>
    <p className="tb:text-xl max-w-[800px] text-center text-base font-medium">
      אטרקציות הן מה שהופכות את החופשה שלכם לבלתי נשכחת. עם זה חוויות אקסטרים,
      טרקים, פארקים ועוד... הם מה שעוזר לכם להכיר את התרבות והמדינה אלייה אתם
      מגיעים.
    </p>
    <span aria-hidden className="flex flex-row gap-8 py-4">
      <FcGlobe size={40} />
      <FcSportsMode size={40} />
      <FcLandscape size={40} />
      <FaUmbrellaBeach size={40} />
    </span>
    <div className="w-full py-2">
      <h2 className="tb:text-xl text-center text-lg font-bold">
        אז בואו לשמוע מאיתנו על היעדים שלנו במזרח
      </h2>
      <div className="tb:flex-row tb:gap-8 flex w-full flex-col justify-between gap-2 pt-4">
        {countriesConfig.map(({ title, href, image }) => (
          <ImageLink title={title} href={href} image={image} key={href} />
        ))}
      </div>
    </div>
    <ContactUs />
  </div>
);
