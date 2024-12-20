import React from 'react';
import { FcHome } from 'react-icons/fc';
import { GiJapan, GiPalmTree, GiSriLanka } from 'react-icons/gi';

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
];
