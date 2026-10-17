import React from 'react';
import Link from 'next/link';
import { Routes } from '@/routes';
import { Logo } from '@/components/Logo';
import { NavigationColumn } from './NavigationColumn';
import { footerNavigationConfig } from './FooterNavigation.config';

export const FooterNavigation = (): JSX.Element => (
  <nav
    className="flex flex-col gap-10 tb:flex-row tb:justify-between"
    id="footer-nav"
    aria-label="Footer"
  >
    <Link href={Routes.ROOT} className="w-fit" aria-label="FlySan - דף הבית">
      <Logo width={140} />
    </Link>
    <ul className="grid grid-cols-2 gap-8 tb:gap-20">
      {footerNavigationConfig.map(({ name, links, isOutSourceLinks }) => (
        <li key={name}>
          <NavigationColumn
            name={name}
            links={links}
            isOutSourceLinks={isOutSourceLinks}
          />
        </li>
      ))}
    </ul>
  </nav>
);
