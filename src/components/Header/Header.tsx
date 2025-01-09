'use client';

import React, { JSX, useState } from 'react';
import Link from 'next/link';
import { Routes } from '@/routes';
import { BurgerButton } from '../BurgerButton';
import { NavigationTabs } from '../NavigationTabs';
import { navigationLinksConfig } from './Header.config';
import { SideNavigation } from '../SideNavigation';
import { Contact } from '../Contact';
import { Logo } from '../Logo';

export const Header = (): JSX.Element => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  return (
    <>
      <header className="bg-primary-950 tb:bg-white tb:bg-opacity-[0.8] sticky top-0 z-20 flex w-full flex-col items-center drop-shadow-md backdrop-blur-xl">
        <div className="bg-primary-950 max-tb:hidden flex w-full justify-center px-2 text-white">
          <div
            className="max-md:w-full-4 flex w-[1400px] flex-row items-center justify-between py-1 text-lg font-semibold max-lg:w-[1000px]"
            aria-label="Contact Information"
          >
            <Contact />
            <Link href={Routes.ROOT}>
              <Logo />
            </Link>
          </div>
        </div>
        <nav
          className="flex w-[1400px] flex-row items-center justify-between px-2 py-2 max-lg:w-[1000px] max-md:w-full"
          aria-label="Main Navigation"
        >
          <NavigationTabs navLinks={navigationLinksConfig} />
          <span className="tb:hidden">
            <BurgerButton onClick={() => setShowDrawer(true)} />
          </span>
          <Link href={Routes.ROOT} className="tb:hidden">
            <Logo />
          </Link>
        </nav>
      </header>
      <SideNavigation
        onClick={() => setShowDrawer(false)}
        isOpen={showDrawer}
        navLinks={navigationLinksConfig}
      />
    </>
  );
};
