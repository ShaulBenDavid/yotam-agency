import React from 'react';
import { Intro } from '../../features/Intro';
import { Countries } from './components/Countries';
import { ContactUs } from '../../features/ContactUs';
import { ShareWithFriends } from '../../features/ShareWithFriends';
import { WhyUs } from './components/WhyUs';
import JapanImage from '@/assets/images/jpLandImg.jpg';

export const Root = (): JSX.Element => (
  <div className="tb:gap-2 flex flex-col gap-2 pb-8">
    <Intro title="חופשות במזרח סוגרים עם יותם טורס" image={JapanImage.src} />
    <Countries />
    <ContactUs />
    <WhyUs />
    <ShareWithFriends
      title="אהבת?! ספר לחברים"
      description="בין אם אתם אוהבים ערים, הרים, או חופים, בין אם אתם אוהבים טרקים, בטן גב או מטרופולין. המזרח בשבילכם!"
    />
  </div>
);
