import React from 'react';
import Image from 'next/image';
import JapanImage from '@/assets/images/jpLandImg.jpg';
import { Intro } from '../../features/Intro';
import { Countries } from './components/Countries';
import { ContactUs } from '../../features/ContactUs';
import { ShareWithFriends } from '../../features/ShareWithFriends';
import { WhyUs } from './components/WhyUs';
import FlowerSVG from './flower.png';

export const Root = (): JSX.Element => (
  <div className="flex flex-col gap-2 pb-8 tb:gap-2">
    <Intro
      title={
        <span className="flex flex-row items-center gap-2">
          המזרח כבר לא רחוק
          <Image
            src={FlowerSVG}
            alt="Flysun logo"
            sizes="15vw"
            className="h-6 w-6 tb:h-10 tb:w-10"
            width={0}
            height={0}
          />
        </span>
      }
      image={JapanImage.src}
      minHeight="288px"
    />
    <Countries />
    <ContactUs />
    <WhyUs />
    <ShareWithFriends />
  </div>
);
