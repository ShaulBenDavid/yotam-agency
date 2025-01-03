'use client';

import React from 'react';
import Link from 'next/link';
import { NavLinkAnimation } from './NavTab.config';

interface NavTabProps {
  href: string;
  title: string;
  isActive: boolean;
}

export const NavTab = ({ href, title, isActive }: NavTabProps): JSX.Element => (
  <li
    className={`text-primary-950 relative cursor-pointer text-xl font-bold capitalize ${NavLinkAnimation} ${
      isActive && 'before:w-full before:hover:w-full'
    }`}
  >
    <Link href={href} aria-current={isActive ? 'page' : undefined}>
      {title}
    </Link>
  </li>
);
