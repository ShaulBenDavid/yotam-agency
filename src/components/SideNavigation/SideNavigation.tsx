'use client';

import React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import { Routes } from '@/routes';
import type { NavigationLinkConfigType } from '../Header/Header.config';
import { Drawer } from '../Drawer';
import { SideNavTab } from './SideNavTab';
import { ButtonLink } from '../ButtonLink';
import { Logo } from '../Logo';

interface SideNavigationProps {
  isOpen: boolean;
  onClick: () => void;
  navLinks: NavigationLinkConfigType[];
}

export const SideNavigation = ({
  isOpen,
  onClick,
  navLinks,
}: SideNavigationProps) => {
  const activeSegment = useSelectedLayoutSegment() ?? '/';

  return (
    <Drawer onClose={onClick} isOpen={isOpen}>
      <div className="bg-primary-950 w-full rounded-b-md p-2">
        <Link href={Routes.ROOT} onClick={onClick}>
          <Logo />
        </Link>
      </div>
      <ul
        className="flex animate-[enterInSideTabs_0.6s_ease-in_forwards] flex-col gap-1 p-2 opacity-0"
        role="navigation"
        aria-label="Main"
        id="main-nav"
      >
        {navLinks.map(({ title, href, linkVariant, icon }) =>
          linkVariant ? (
            <li key={href}>
              <ButtonLink
                href={`/${href}`}
                variant={linkVariant}
                ariaLabel={title}
                isAriaCurrent={
                  activeSegment === href.substring(1) || activeSegment === href
                }
              >
                {title}
              </ButtonLink>
            </li>
          ) : (
            <li key={href}>
              <SideNavTab
                href={`/${href}`}
                onClick={onClick}
                title={title}
                icon={icon}
                isActive={
                  activeSegment === href.substring(1) || activeSegment === href
                }
              />
            </li>
          )
        )}
      </ul>
    </Drawer>
  );
};
