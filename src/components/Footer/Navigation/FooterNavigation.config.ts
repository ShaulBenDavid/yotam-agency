import { Routes } from '@/routes';
import { socialLinksConfig } from '@/constants/socials';
import type { NavigationColumnLinksType } from './NavigationColumn/NavigationColumn';

const legalNavigationConfig: NavigationColumnLinksType = [
  {
    title: 'מידניות משתמש',
    link: Routes.PRIVACY_POLICY,
  },
  {
    title: 'הצהרת נגישות',
    link: Routes.ACCESSIBILITY,
  },
  {
    title: 'צור קשר',
    link: Routes.CONTACT_US,
  },
];

export const footerNavigationConfig = [
  {
    name: 'תעקוב אחרינו',
    links: socialLinksConfig,
    isOutSourceLinks: true,
  },
  {
    name: 'תנאי שימוש',
    links: legalNavigationConfig,
    isOutSourceLinks: false,
  },
];
