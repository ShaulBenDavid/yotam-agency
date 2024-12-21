import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import theme from '@/styles/tailwind.theme';
import { SocialEnum } from '@/constants/socials';

export const socialIconsConfig: Record<SocialEnum, JSX.Element> = {
  [SocialEnum.INSTAGRAM]: (
    <AiFillInstagram aria-hidden fill={theme.secondary[950]} size={32} />
  ),
};
