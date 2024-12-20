import React from 'react';
import { GiJapan, GiPalmTree, GiSriLanka } from 'react-icons/gi';
import { MdAttractions } from 'react-icons/md';

import { Routes } from '@/routes';
import { ButtonLinkVariants } from '../ButtonLink';

export type NavigationLinkConfigType = {
  href: Routes;
  title: string;
  linkVariant?: ButtonLinkVariants;
  icon?: JSX.Element;
  isSideNavOnly: boolean;
};

export const navigationLinksConfig: NavigationLinkConfigType[] = [
  {
    href: Routes.JAPAN,
    title: 'יפן',
    icon: <GiJapan size={24} aria-hidden />,
    isSideNavOnly: false,
  },
  {
    href: Routes.SRI_LANKA,
    title: 'סרי לנקה',
    icon: <GiSriLanka size={24} aria-hidden />,
    isSideNavOnly: false,
  },
  {
    href: Routes.THAILAND,
    title: 'תאילנד',
    icon: <GiPalmTree size={24} aria-hidden />,
    isSideNavOnly: false,
  },
  {
    href: Routes.ATTRACTIONS,
    title: 'אטרקציות',
    icon: <MdAttractions size={24} aria-hidden />,
    isSideNavOnly: false,
  },
];
