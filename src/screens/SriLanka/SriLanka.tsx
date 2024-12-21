import React from 'react';
import { Intro } from '@/screens/Root/components/Intro';
import SriLankaBImage from '@/assets/images/sriLankaB.jpg';

export const SriLanka = (): JSX.Element => (
  <div className="tb:gap-2 flex flex-col gap-2 pb-8">
    <Intro title="סרי לנקה" image={SriLankaBImage.src} maxHeight="400px" />
  </div>
);
