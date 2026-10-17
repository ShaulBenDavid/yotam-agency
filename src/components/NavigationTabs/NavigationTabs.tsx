'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import type { NavigationLinkConfigType } from '../Header/Header.config';
import { isNavLinkActive } from '../Header/Header.utils';
import { NavTab } from './NavTab';
import { ButtonLink } from '../ButtonLink';

interface NavigationTabsProps {
  navLinks: NavigationLinkConfigType[];
}

export const NavigationTabs = ({
  navLinks,
}: NavigationTabsProps): JSX.Element => {
  const pathname = usePathname();
  const filteredLinks = navLinks.filter(({ isSideNavOnly }) => !isSideNavOnly);

  return (
    <ul
      className="flex list-none flex-row flex-wrap items-center justify-center gap-x-7 gap-y-1"
      role="navigation"
      aria-label="Main"
      id="main-nav"
    >
      {filteredLinks.map(({ title, href, linkVariant, subLinks }) =>
        linkVariant ? (
          <li key={href}>
            <ButtonLink
              href={`/${href}`}
              variant={linkVariant}
              isAriaCurrent={isNavLinkActive(pathname, href)}
            >
              {title}
            </ButtonLink>
          </li>
        ) : (
          <NavTab
            key={href}
            href={`/${href}`}
            title={title}
            isActive={isNavLinkActive(pathname, href)}
            subLinks={subLinks}
          />
        )
      )}
    </ul>
  );
};
