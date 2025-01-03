import React from 'react';
import { GiJapan, GiPalmTree, GiSriLanka } from 'react-icons/gi';
import { GrInfo } from 'react-icons/gr';
import { MdAttractions } from 'react-icons/md';
import { TbAccessibleFilled } from 'react-icons/tb';
import { FaPhone } from 'react-icons/fa';
import { Routes } from '@/routes';
import { buildRoutePath } from '@/utils';
import { ButtonLinkVariants } from '../ButtonLink';

export type NavigationLinkConfigType = {
  href: string;
  title: string;
  linkVariant?: ButtonLinkVariants;
  icon?: JSX.Element;
  isSideNavOnly: boolean;
};

export const navigationLinksConfig: NavigationLinkConfigType[] = [
  {
    href: buildRoutePath(Routes.COUNTRY, Routes.JAPAN),
    title: 'יפן',
    icon: <GiJapan size={24} aria-hidden />,
    isSideNavOnly: false,
  },
  {
    href: buildRoutePath(Routes.COUNTRY, Routes.THAILAND),
    title: 'תאילנד',
    icon: <GiPalmTree size={24} aria-hidden />,
    isSideNavOnly: false,
  },
  {
    href: buildRoutePath(Routes.COUNTRY, Routes.SRI_LANKA),
    title: 'סרי לנקה',
    icon: <GiSriLanka size={24} aria-hidden />,
    isSideNavOnly: false,
  },
  {
    href: Routes.ATTRACTIONS,
    title: 'אטרקציות',
    icon: <MdAttractions size={24} aria-hidden />,
    isSideNavOnly: false,
  },
  {
    href: Routes.CONTACT_US,
    title: 'צור קשר',
    icon: <FaPhone size={24} aria-hidden />,
    isSideNavOnly: false,
  },
  {
    href: Routes.ABOUT_US,
    title: 'עלינו',
    icon: <GrInfo size={24} aria-hidden />,
    isSideNavOnly: false,
  },
  {
    href: Routes.ACCESSIBILITY,
    title: 'הצהרת נגישות',
    icon: <TbAccessibleFilled size={24} aria-hidden />,
    isSideNavOnly: true,
  },
];
