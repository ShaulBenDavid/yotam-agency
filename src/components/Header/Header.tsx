'use client';

import React, { JSX, useState } from 'react';
import Link from 'next/link';
import { FaPhone } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { Routes } from '@/routes';
import { BurgerButton } from '../BurgerButton';
import { NavigationTabs } from '../NavigationTabs';
import { navigationLinksConfig } from './Header.config';
import { SideNavigation } from '../SideNavigation';

export const Header = (): JSX.Element => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  return (
    <>
      <header className="fixed z-10 flex w-full flex-col items-center bg-white bg-opacity-[0.5] backdrop-blur-xl">
        <div className="bg-primary-950 max-tb:hidden flex w-full justify-center text-white">
          <div
            className="max-md:w-full-4 flex w-[1400px] flex-row items-center py-1 text-lg font-semibold max-lg:w-[1000px]"
            aria-label="Contact Information"
          >
            <ul className="flex flex-row gap-4">
              <li className="flex flex-row items-center gap-2">
                <FaPhone size={24} />
                <a
                  className="hover:underline"
                  href="tel:+123456789"
                  aria-label="Call us at 123456789"
                >
                  +123456789
                </a>
              </li>
              <li className="flex flex-row items-center gap-2">
                <IoIosMail size={24} />
                <a
                  className="hover:underline"
                  href="mailto:info@example.com"
                  aria-label="Email us at info@example.com"
                >
                  info@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="flex w-[1400px] flex-row items-center py-2 max-lg:w-[1000px] max-md:w-full">
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
