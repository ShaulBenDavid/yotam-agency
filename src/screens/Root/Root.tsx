import React from 'react';
import { Intro } from './components/Intro';
import { Countries } from './components/Countries';
import { ContactUs } from './components/ContactUs';

export const Root = (): JSX.Element => (
  <div className="">
    <Intro />
    <Countries />
    <ContactUs />
  </div>
);
