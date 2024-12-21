import React from 'react';
import { Intro } from './components/Intro';
import { Countries } from './components/Countries';

export const Root = (): JSX.Element => (
  <div className="">
    <Intro />
    <Countries />
  </div>
);
