import React from 'react';
import { Intro } from '@/screens/Root/components/Intro';
import ThailandBImage from '@/assets/images/thailandB.jpg';

export const Thailand = (): JSX.Element => (
  <div className="tb:gap-2 flex flex-col gap-2 pb-8">
    <Intro title="תאילנד" image={ThailandBImage.src} maxHeight="400px" />
  </div>
);
