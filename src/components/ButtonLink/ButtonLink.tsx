import React, { type ReactNode } from 'react';
import Link, { type LinkProps } from 'next/link';
import { ButtonLinkVariants } from './ButtonLink.types';
import { twMerge } from 'tailwind-merge';
import { pillBaseClassName } from '@/styles/buttonVariants';
import { linkStyleConfig } from './ButtonLink.config';

interface ButtonLinkProps extends LinkProps {
  variant?: ButtonLinkVariants;
  width?: string;
  ariaLabel?: string;
  isAriaCurrent?: boolean;
  className?: string;
  children: ReactNode;
}

export const ButtonLink = ({
  variant = ButtonLinkVariants.PRIMARY,
  width,
  children,
  ariaLabel,
  isAriaCurrent = false,
  className,
  ...props
}: ButtonLinkProps): JSX.Element => (
  <Link
    {...props}
    className={twMerge(
      pillBaseClassName,
      'text-center',
      linkStyleConfig[variant],
      className
    )}
    style={{ width }}
    aria-label={ariaLabel}
    aria-current={isAriaCurrent ? 'page' : undefined}
  >
    {children}
  </Link>
);
