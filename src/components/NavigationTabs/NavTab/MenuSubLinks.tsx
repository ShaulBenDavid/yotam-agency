'use client';

import React from 'react';
import Link from 'next/link';
import { SubLinkConfigType } from '@/components/Header/Header.config';

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
  <div
    className={`absolute right-0 top-full z-10 pt-1 ${isDropdownOpen ? 'block' : 'hidden'}`}
  >
    <ul
      className="flex min-w-60 cursor-default flex-col rounded-card border border-line bg-white py-2 shadow-lift"
      aria-labelledby={buttonId}
      id={menuId}
    >
      {subLinks.map(({ href, title }) => (
        <li key={`sublinks-${href}`}>
          <Link
            href={`/${href}`}
            className="block px-4 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-tint hover:text-primary-950"
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
