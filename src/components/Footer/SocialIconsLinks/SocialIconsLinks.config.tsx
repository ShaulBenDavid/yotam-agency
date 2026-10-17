import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { SocialEnum } from '@/constants/socials';

export const socialIconsConfig: Record<SocialEnum, JSX.Element> = {
  [SocialEnum.INSTAGRAM]: <AiFillInstagram aria-hidden size={22} />,
  [SocialEnum.FACEBOOK]: <FaFacebookSquare aria-hidden size={20} />,
};
