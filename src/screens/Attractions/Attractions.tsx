import React from 'react';
import { FcGlobe } from 'react-icons/fc';
import { FcSportsMode } from 'react-icons/fc';
import { FcLandscape } from 'react-icons/fc';
import { FaUmbrellaBeach } from 'react-icons/fa6';
import { ImageLink } from '@/components/ImageLink';
import { countriesConfig } from '@/constants/Countries.config';
import { buildRoutePath } from '@/utils';
import { Routes } from '@/routes';
import { ShareWithFriends } from '@/features/ShareWithFriends';
import { ContactUs } from '../../features/ContactUs';

export const Attractions = (): JSX.Element => (
  <div className="flex w-full flex-col items-center gap-2 py-2 tb:py-4">
    <h1 className="w-full rounded-md bg-primary-950 py-1 text-center text-2xl font-bold text-white tb:text-3xl">
      אטרקציות
    </h1>
    <p className="max-w-[800px] text-center text-base font-medium tb:text-xl">
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
      <h2 className="text-center text-lg font-bold tb:text-xl">
        אז בואו לשמוע על האטרקציות במזרח!
      </h2>
      <div className="flex w-full flex-col justify-between gap-2 pt-4 tb:flex-row tb:gap-8">
        {countriesConfig.map(({ title, href, image }) => (
          <ImageLink
            title={title}
            href={buildRoutePath(href, Routes.ATTRACTIONS)}
            image={image}
            key={href}
          />
        ))}
      </div>
    </div>
    <ContactUs />
    <ShareWithFriends />
  </div>
);
