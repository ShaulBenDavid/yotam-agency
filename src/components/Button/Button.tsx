import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonVariants } from './Button.types';
import { buttonVariantsStyleConfig } from './Button.config';
import { pillBaseClassName } from '@/styles/buttonVariants';
import { Spinner, SpinnerSize, SpinnerVariants } from '../Spinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  width?: string;
  isLoading?: boolean;
}

export const Button = ({
  variant = ButtonVariants.PRIMARY,
  width,
  isLoading = false,
  children,
  type = 'submit',
  className,
  onClick,
  disabled,
}: ButtonProps): JSX.Element => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled || isLoading}
    className={twMerge(
      pillBaseClassName,
      'w-full',
      buttonVariantsStyleConfig[variant],
      disabled && 'cursor-not-allowed',
      isLoading && 'cursor-wait',
      'disabled:opacity-60',
      className
    )}
    style={{ width }}
  >
    {isLoading ? (
      <Spinner
        size={SpinnerSize.SMALL}
        variant={
          variant === ButtonVariants.PRIMARY ||
          variant === ButtonVariants.ON_DARK_OUTLINE
            ? SpinnerVariants.WHITE
            : SpinnerVariants.PRIMARY
        }
      />
    ) : (
      children
    )}
  </button>
);
