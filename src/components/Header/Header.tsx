'use client';

import React, { JSX, useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { Routes } from '@/routes';
import { contactLinks, displayPhone } from '@/constants';
import {
  pillBaseClassName,
  pillVariantClassNames,
} from '@/styles/buttonVariants';
import { BurgerButton } from '../BurgerButton';
import { NavigationTabs } from '../NavigationTabs';
import { navigationLinksConfig } from './Header.config';
import { SideNavigation } from '../SideNavigation';
import { Logo } from '../Logo';

const whatsappPillClassName = twMerge(
  pillBaseClassName,
  pillVariantClassNames.primary,
  'min-h-10 px-4 text-[13px] tb:px-5'
);

export const Header = (): JSX.Element => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-line bg-white/95 backdrop-blur-md">
        <div className="ds-container flex h-16 items-center justify-between gap-3 tb:h-auto tb:flex-col tb:items-stretch tb:gap-0 tb:pt-3">
          <div className="flex flex-1 items-center justify-between gap-3 tb:pb-3">
            <Link href={Routes.ROOT} aria-label="FlySan - דף הבית">
              <Logo tone="dark" width={118} className="tb:w-[136px]" />
            </Link>
            <div
              className="flex items-center gap-2 tb:gap-4"
              aria-label="Contact Information"
            >
              <a
                href={contactLinks.tel}
                className="text-[13px] font-semibold text-ink-soft transition-colors hover:text-accent-strong max-tb:hidden"
                dir="ltr"
              >
                {displayPhone}
              </a>
              <a
                href={contactLinks.whatsapp}
                className={whatsappPillClassName}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={16} aria-hidden />
                <span>WhatsApp</span>
              </a>
              <BurgerButton onClick={() => setShowDrawer(true)} />
            </div>
          </div>
          <nav
            className="border-t border-line-soft max-tb:hidden"
            aria-label="Main Navigation"
          >
            <NavigationTabs navLinks={navigationLinksConfig} />
          </nav>
        </div>
      </header>
      <SideNavigation
        onClick={() => setShowDrawer(false)}
        isOpen={showDrawer}
        navLinks={navigationLinksConfig}
      />
    </>
  );
};
