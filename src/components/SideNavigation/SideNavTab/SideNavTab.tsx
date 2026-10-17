import React from 'react';
import Link from 'next/link';

interface SideNavTabProps {
  href: string;
  title: string;
  isActive: boolean;
  icon?: JSX.Element;
  isSubLink?: boolean;
  onClick: () => void;
}

export const SideNavTab = ({
  href,
  title,
  isActive,
  icon,
  isSubLink = false,
  onClick,
}: SideNavTabProps): JSX.Element => (
  <Link
    href={href}
    onClick={onClick}
    aria-current={isActive ? 'page' : undefined}
    className={`flex min-h-12 w-full flex-row items-center gap-3 rounded-card px-3 transition-colors hover:bg-tint ${
      isSubLink
        ? 'min-h-11 ps-12 text-[15px] text-ink-soft'
        : 'text-base font-semibold text-ink'
    } ${isActive ? 'bg-tint font-bold text-primary-950' : ''}`}
  >
    {icon && (
      <span className="flex w-6 justify-center text-primary-950 [&_svg]:h-5 [&_svg]:w-5">
        {icon}
      </span>
    )}
    {title}
  </Link>
);
