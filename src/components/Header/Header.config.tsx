import React from 'react';
import { GiJapan, GiPalmTree, GiSriLanka } from 'react-icons/gi';
import { GrInfo, GrPlan } from 'react-icons/gr';
import { MdAttractions } from 'react-icons/md';
import { TbAccessibleFilled } from 'react-icons/tb';
import { FaPhone } from 'react-icons/fa';
import { Routes } from '@/routes';
import { buildRoutePath } from '@/utils';
import { ButtonLinkVariants } from '../ButtonLink';

export type SubLinkConfigType = Omit<NavigationLinkConfigType, 'subLinks'>;

export type NavigationLinkConfigType = {
  href: string;
  title: string;
  linkVariant?: ButtonLinkVariants;
  icon?: JSX.Element;
  isSideNavOnly: boolean;
  subLinks?: SubLinkConfigType[];
};

export const navigationLinksConfig: NavigationLinkConfigType[] = [
  {
    href: buildRoutePath(Routes.COUNTRY, Routes.JAPAN),
    title: 'יפן',
    icon: <GiJapan size={24} aria-hidden />,
    isSideNavOnly: false,
    subLinks: [
      {
        href: buildRoutePath(Routes.COUNTRY, Routes.JAPAN, Routes.HOTELS),
        title: 'מלונות',
        isSideNavOnly: false,
      },
      {
        href: buildRoutePath(Routes.COUNTRY, Routes.JAPAN, Routes.ATTRACTIONS),
        title: 'אטרקציות',
        isSideNavOnly: false,
      },
      {
        href: Routes.JAPAN_PLANING_TRIP,
        title: 'תכנון מסלול ליפן',
        isSideNavOnly: false,
      },
      {
        href: buildRoutePath(Routes.COUNTRY, Routes.JAPAN, Routes.BLOG),
        title: 'בלוג',
        isSideNavOnly: false,
      },
    ],
  },
  {
    href: buildRoutePath(Routes.COUNTRY, Routes.THAILAND),
    title: 'תאילנד',
    icon: <GiPalmTree size={24} aria-hidden />,
    isSideNavOnly: false,
    subLinks: [
      {
        href: buildRoutePath(Routes.COUNTRY, Routes.THAILAND, Routes.HOTELS),
        title: 'מלונות',
        isSideNavOnly: false,
      },
      {
        href: buildRoutePath(
          Routes.COUNTRY,
          Routes.THAILAND,
          Routes.ATTRACTIONS
        ),
        title: 'אטרקציות',
        isSideNavOnly: false,
      },
      {
        href: buildRoutePath(Routes.COUNTRY, Routes.THAILAND, Routes.BLOG),
        title: 'בלוג',
        isSideNavOnly: false,
      },
    ],
  },
  {
    href: buildRoutePath(Routes.COUNTRY, Routes.SRI_LANKA),
    title: 'סרי לנקה',
    icon: <GiSriLanka size={24} aria-hidden />,
    isSideNavOnly: false,
    subLinks: [
      {
        href: buildRoutePath(Routes.COUNTRY, Routes.SRI_LANKA, Routes.HOTELS),
        title: 'מלונות',
        isSideNavOnly: false,
      },
      {
        href: buildRoutePath(
          Routes.COUNTRY,
          Routes.SRI_LANKA,
          Routes.ATTRACTIONS
        ),
        title: 'אטרקציות',
        isSideNavOnly: false,
      },
      {
        href: buildRoutePath(Routes.COUNTRY, Routes.SRI_LANKA, Routes.BLOG),
        title: 'בלוג',
        isSideNavOnly: false,
      },
    ],
  },
  {
    href: Routes.JAPAN_PLANING_TRIP,
    title: 'תכנון מסלול ליפן',
    icon: <GrPlan size={24} aria-hidden />,
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
