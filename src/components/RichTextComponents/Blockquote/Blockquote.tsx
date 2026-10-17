import React, { type ReactNode } from 'react';

interface BlockquoteProps {
  children: ReactNode;
}

export const Blockquote = ({ children }: BlockquoteProps): JSX.Element => (
  <blockquote
    className="my-2 w-full rounded-card border-s-4 border-accent bg-tint px-5 py-4"
    data-testid="blockquote-component-test-id"
  >
    <p className="max-w-[70ch] text-lg font-medium italic leading-relaxed text-ink sm:text-xl">
      &quot;{children}&quot;
    </p>
  </blockquote>
);
