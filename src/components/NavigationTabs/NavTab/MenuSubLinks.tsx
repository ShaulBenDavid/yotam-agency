'use client';

import React from 'react';
import { SubLinkConfigType } from '@/components/Header/Header.config';
import Link from 'next/link';

interface MenuSubLinksProps {
  isDropdownOpen: boolean;
  buttonId: string;
  menuId: string;
  subLinks: SubLinkConfigType[];
}

export const MenuSubLinks = ({
  isDropdownOpen,
  buttonId,
  menuId,
  subLinks,
}: MenuSubLinksProps) => (
  <ul
    className={`absolute ${isDropdownOpen ? 'flex' : 'hidden'} right-0 top-[100%] flex flex-col gap-2 rounded-md bg-white px-4 py-2 text-base drop-shadow-lg`}
    aria-labelledby={buttonId}
    id={menuId}
  >
    {subLinks.map(({ href, title }) => (
      <li key={`sublinks-${href}`}>
        <Link href={`/${href}`}>{title}</Link>
      </li>
    ))}
  </ul>
);
