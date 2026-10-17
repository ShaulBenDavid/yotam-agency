import React, { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionHeaderAlign = 'center' | 'start';

interface SectionHeaderProps {
  title: ReactNode;
  eyebrow?: ReactNode;
  subtitle?: ReactNode;
  icon?: ReactNode;
  align?: SectionHeaderAlign;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

const alignClassNames: Record<SectionHeaderAlign, string> = {
  center: 'items-center text-center',
  start: 'items-start text-start',
};

export const SectionHeader = ({
  title,
  eyebrow,
  subtitle,
  icon,
  align = 'center',
  as: Heading = 'h2',
  className,
}: SectionHeaderProps): JSX.Element => (
  <header
    className={twMerge(
      'mb-8 flex flex-col tb:mb-10',
      alignClassNames[align],
      className
    )}
  >
    {icon && <span className="mb-3 text-primary-950">{icon}</span>}
    {eyebrow ? (
      <p className="ds-eyebrow">{eyebrow}</p>
    ) : (
      !icon && (
        <span aria-hidden className="mb-4 h-[3px] w-8 rounded-full bg-accent" />
      )
    )}
    <Heading className={Heading === 'h1' ? 'ds-h1' : 'ds-h2'}>{title}</Heading>
    {subtitle && (
      <p className="mt-3 max-w-[600px] text-base leading-relaxed text-ink-muted">
        {subtitle}
      </p>
    )}
  </header>
);
