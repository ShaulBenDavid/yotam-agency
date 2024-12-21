import React from 'react';
import { Intro } from './components/Intro';
import { Countries } from './components/Countries';
import { ContactUs } from './components/ContactUs';
import { ShareWithFriends } from './components/ShareWithFriends';
import { WhyUs } from './components/WhyUs';

export const Root = (): JSX.Element => (
  <div className="tb:gap-2 flex flex-col gap-2 pb-8">
    <Intro />
    <Countries />
    <ContactUs />
    <WhyUs />
    <ShareWithFriends />
  </div>
);
