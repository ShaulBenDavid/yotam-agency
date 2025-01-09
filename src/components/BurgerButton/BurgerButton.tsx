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
    className="mr-2 scale-x-[-1] p-2"
  >
    <RxHamburgerMenu size={32} color="white" />
  </button>
);
