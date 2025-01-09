import React from 'react';
import AppLogo from '@/assets/images/Logo.png';
import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
}

export const Logo = ({ height = 0, width = 150 }: LogoProps): JSX.Element => (
  <Image
    src={AppLogo}
    alt="Flysun logo"
    sizes="15vw"
    width={width}
    height={height}
  />
);
