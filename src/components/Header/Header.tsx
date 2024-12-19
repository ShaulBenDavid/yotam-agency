'use client';

import React, { JSX } from 'react';
import Link from 'next/link';
import { Routes } from '@/routes';
import { BurgerButton } from '../BurgerButton';

export const Header = (): JSX.Element => {
  return (
    <header className="fixed z-10 flex w-full flex-col items-center bg-white bg-opacity-[0.5] backdrop-blur-xl">
      <div
        className="max-md:w-full-4 flex w-[1400px] flex-row items-center py-1 text-lg font-semibold max-lg:w-[1000px]"
        aria-label="Contact Information"
      >
        <ul className="flex flex-row gap-4">
          <li>
            {' '}
            📞:
            <a href="tel:+123456789" aria-label="Call us at 123456789">
              +123456789
            </a>
          </li>
          <li>
            {' '}
            📧:
            <a
              href="mailto:info@example.com"
              aria-label="Email us at info@example.com"
            >
              info@example.com
            </a>
          </li>
        </ul>
      </div>
      <nav className="flex w-[1400px] flex-row items-center max-lg:w-[1000px] max-md:w-full">
        <Link href={Routes.ROOT} aria-label="Dev Wizard Home">
          יותם
        </Link>
        <BurgerButton />
      </nav>
    </header>
  );
};
