import React, { type ReactNode } from 'react';
import Link, { type LinkProps } from 'next/link';
import { ButtonLinkVariants } from './ButtonLink.types';
import { linkStyleConfig } from './ButtonLink.config';

interface ButtonLinkProps extends LinkProps {
  variant?: ButtonLinkVariants;
  width?: string;
  ariaLabel?: string;
  isAriaCurrent?: boolean;
  children: ReactNode;
}

export const ButtonLink = ({
  variant = ButtonLinkVariants.PRIMARY,
  width,
  children,
  ariaLabel,
  isAriaCurrent = false,
  ...props
}: ButtonLinkProps): JSX.Element => (
  <Link
    {...props}
    className={`flex h-10 w-full flex-row content-center items-center justify-center whitespace-nowrap rounded-md px-6 text-lg font-bold capitalize ${linkStyleConfig[variant]}`}
    style={{ width }}
    aria-label={ariaLabel}
    aria-current={isAriaCurrent ? 'page' : undefined}
  >
    {children}
  </Link>
);
