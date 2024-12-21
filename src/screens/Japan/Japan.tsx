import React from 'react';
import { Intro } from '@/screens/Root/components/Intro';
import JapanBImage from '@/assets/images/japanB.jpg';

export const Japan = (): JSX.Element => (
  <div className="tb:gap-2 flex flex-col gap-2 pb-8">
    <Intro title="יפן" image={JapanBImage.src} maxHeight="400px" />
  </div>
);
