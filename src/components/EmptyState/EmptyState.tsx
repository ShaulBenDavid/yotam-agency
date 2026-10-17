import React from 'react';
import Image from 'next/image';

interface EmptyStateProps {
  svgUrl?: string;
  header: string;
  description?: string;
  footer?: JSX.Element;
}

export const EmptyState = ({
  svgUrl,
  header,
  description,
  footer,
}: EmptyStateProps): JSX.Element => (
  <div
    className="flex max-w-[500px] flex-col items-center gap-4 px-4"
    data-testid="empty-state-component-test-id"
  >
    {svgUrl && (
      <Image
        alt="Empty state"
        role="presentation"
        src={svgUrl}
        priority
        className="w-[220px] tb:w-[260px]"
        unoptimized
      />
    )}
    <h2 className="text-center text-xl font-extrabold tb:text-2xl">{header}</h2>
    {description && <p className="ds-body text-center">{description}</p>}
    {footer && footer}
  </div>
);
