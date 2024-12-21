'use client';

import React, { JSX, useState } from 'react';
import Link from 'next/link';
import { Routes } from '@/routes';
import { BurgerButton } from '../BurgerButton';
import { NavigationTabs } from '../NavigationTabs';
import { navigationLinksConfig } from './Header.config';
import { SideNavigation } from '../SideNavigation';
import { Contact } from '../Contact';

export const Header = (): JSX.Element => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  return (
    <>
      <header className="sticky top-0 z-10 flex w-full flex-col items-center bg-white bg-opacity-[0.8] backdrop-blur-xl">
        <div className="bg-primary-950 max-tb:hidden flex w-full justify-center px-2 text-white">
          <div
            className="max-md:w-full-4 flex w-[1400px] flex-row items-center py-1 text-lg font-semibold max-lg:w-[1000px]"
            aria-label="Contact Information"
          >
            <Contact />
          </div>
        </div>
        <nav className="flex w-[1400px] flex-row items-center px-2 py-2 max-lg:w-[1000px] max-md:w-full">
          <NavigationTabs navLinks={navigationLinksConfig} />
          <span className="tb:hidden">
            <BurgerButton onClick={() => setShowDrawer(true)} />
          </span>
          <Link href={Routes.ROOT} aria-label="Dev Wizard Home">
            יותם
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
