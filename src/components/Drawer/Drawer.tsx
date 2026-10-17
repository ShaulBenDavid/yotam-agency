'use client';

import React, { useEffect } from 'react';
import ReactFocusLock from 'react-focus-lock';
import { Backdrop } from '../Backdrop';

type DrawerProps = React.PropsWithChildren<{
  onClose: () => void;
  isOpen: boolean;
}>;

export const Drawer = ({ onClose, isOpen, children }: DrawerProps) => {
  useEffect((): any => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    // eslint-disable-next-line no-return-assign
    return () => (document.body.style.overflow = 'unset');
  }, [isOpen]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Escape' || e.key === 'ArrowDown') {
      onClose();
    }
  };

  return (
    <div
      data-testid="drawer"
      className={`fixed inset-0 z-50 h-[100dvh] w-screen ${
        isOpen ? 'flex' : 'hidden'
      }`}
      role="presentation"
      onKeyDown={handleKeyPress}
      aria-hidden={!isOpen}
      id="navigation-drawer"
    >
      <Backdrop onClick={onClose} />
      <ReactFocusLock>
        <nav
          className="absolute right-0 top-0 z-50 flex h-[100dvh] w-[min(86vw,340px)] animate-[enterIn_0.25s_ease-out_forwards] flex-col overflow-y-auto bg-white pb-[env(safe-area-inset-bottom)] shadow-2xl"
          tabIndex={-1}
        >
          {children}
        </nav>
      </ReactFocusLock>
    </div>
  );
};
