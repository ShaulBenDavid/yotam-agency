import React, { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionTone = 'plain' | 'tint' | 'navy';
type SectionWidth = 'page' | 'content' | 'prose';

interface SectionProps {
  children: ReactNode;
  tone?: SectionTone;
  width?: SectionWidth;
  className?: string;
  innerClassName?: string;
  id?: string;
  ariaLabel?: string;
}

const toneClassNames: Record<SectionTone, string> = {
  plain: '',
  tint: 'bg-tint',
  navy: 'bg-primary-950 text-white',
};

const widthClassNames: Record<SectionWidth, string> = {
  page: 'ds-container',
  content: 'ds-container-content',
  prose: 'ds-container-prose',
};

export const Section = ({
  children,
  tone = 'plain',
  width = 'page',
  className,
  innerClassName,
  id,
  ariaLabel,
}: SectionProps): JSX.Element => (
  <section
    id={id}
    aria-label={ariaLabel}
    className={twMerge('ds-section w-full', toneClassNames[tone], className)}
  >
    <div className={twMerge(widthClassNames[width], innerClassName)}>
      {children}
    </div>
  </section>
);
