'use client';

import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

type BurgerButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BurgerButton = ({ onClick }: BurgerButton) => (
  <button
    onClick={onClick}
    type="button"
    id="open-nav"
    aria-label="menu"
    aria-controls="navigation-drawer"
    className="-me-2 flex h-11 w-11 items-center justify-center rounded-full text-primary-950 transition-colors hover:bg-tint tb:hidden"
  >
    <RxHamburgerMenu size={26} className="scale-x-[-1]" aria-hidden />
  </button>
);
