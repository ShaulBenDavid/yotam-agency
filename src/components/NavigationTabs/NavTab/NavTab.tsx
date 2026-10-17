'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NavLinkAnimation } from './NavTab.config';
import { SubLinkConfigType } from '@/components/Header/Header.config';
import { IoIosArrowDown } from 'react-icons/io';
import { MenuSubLinks } from './MenuSubLinks';

interface NavTabProps {
  href: string;
  title: string;
  isActive: boolean;
  subLinks?: SubLinkConfigType[];
}

export const NavTab = ({
  href,
  title,
  isActive,
  subLinks,
}: NavTabProps): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const id = `services-${href.replace('/', '-')}`;
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsDropdownOpen((prev) => !prev);
    }
    if (e.key === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

  return (
    <li
      className={`group relative flex h-12 cursor-pointer flex-row items-center gap-1 text-nowrap text-[15px] capitalize transition-colors ${NavLinkAnimation} ${
        isActive
          ? 'font-bold text-primary-950 before:w-full'
          : 'font-medium text-ink-soft hover:text-primary-950'
      }`}
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
      onKeyDown={handleKeyDown}
    >
      <Link href={href} aria-current={isActive ? 'page' : undefined}>
        {title}
      </Link>
      {subLinks && (
        <>
          <button
            type="button"
            className="flex h-8 w-6 items-center justify-center"
            aria-label={`${title} - תפריט`}
            aria-controls={menuId}
            aria-expanded={isDropdownOpen}
            id={buttonId}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <IoIosArrowDown
              aria-hidden
              className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>
          <MenuSubLinks
            isDropdownOpen={isDropdownOpen}
            buttonId={buttonId}
            menuId={menuId}
            subLinks={subLinks}
          />
        </>
      )}
    </li>
  );
};
