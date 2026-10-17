'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import { Routes } from '@/routes';
import type { NavigationLinkConfigType } from '../Header/Header.config';
import { isNavLinkActive } from '../Header/Header.utils';
import { Drawer } from '../Drawer';
import { SideNavTab } from './SideNavTab';
import { ButtonLink } from '../ButtonLink';
import { Contact } from '../Contact';
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
  const pathname = usePathname();

  return (
    <Drawer onClose={onClick} isOpen={isOpen}>
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-4">
        <Link href={Routes.ROOT} onClick={onClick} aria-label="FlySan - דף הבית">
          <Logo tone="dark" width={110} />
        </Link>
        <button
          type="button"
          onClick={onClick}
          aria-label="סגירת תפריט"
          className="-me-2 flex h-11 w-11 items-center justify-center rounded-full text-primary-950 transition-colors hover:bg-tint"
        >
          <IoClose size={26} aria-hidden />
        </button>
      </div>
      <ul
        className="flex flex-1 animate-[enterInSideTabs_0.4s_ease-out_forwards] flex-col gap-0.5 p-3 opacity-0"
        role="navigation"
        aria-label="Main"
        id="main-nav"
      >
        {navLinks.map(({ title, href, linkVariant, icon, subLinks }) =>
          linkVariant ? (
            <li key={href}>
              <ButtonLink
                href={`/${href}`}
                variant={linkVariant}
                ariaLabel={title}
                isAriaCurrent={isNavLinkActive(pathname, href)}
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
                isActive={isNavLinkActive(pathname, href)}
              />
              {subLinks && (
                <ul className="flex flex-col pb-1">
                  {subLinks.map((subLink) => (
                    <li key={subLink.href}>
                      <SideNavTab
                        href={`/${subLink.href}`}
                        onClick={onClick}
                        title={subLink.title}
                        isSubLink
                        isActive={isNavLinkActive(pathname, subLink.href)}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        )}
      </ul>
      <div className="shrink-0 border-t border-line bg-page p-4">
        <Contact
          tone="onLight"
          className="flex-col items-stretch gap-2 [&_a]:w-full"
        />
      </div>
    </Drawer>
  );
};
