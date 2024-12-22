'use client';

import React, { Suspense } from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export const AppProviders = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <>
    {children}
    <Suspense fallback={null}>
      <ProgressBar
        height="4px"
        color="#071952"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </Suspense>
  </>
);
