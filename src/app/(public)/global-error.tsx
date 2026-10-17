'use client';

import React from 'react';
import { EmptyState } from '@/components/EmptyState';
import ErrorSVG from '@/assets/images/ErrorSVG.svg';
import { Routes } from '@/routes';
import { ButtonLink, ButtonLinkVariants } from '@/components/ButtonLink';

const Error = (): JSX.Element => (
  <div className="flex flex-grow flex-col items-center justify-center gap-4 px-4 py-16 tb:py-24">
    <h1 className="text-[clamp(56px,10vw,96px)] font-extrabold leading-none text-primary-950">
      500
    </h1>
    <EmptyState
      svgUrl={ErrorSVG}
      header="אופסס, משהו קרתה שגיאה. מצטערים על אי הנוחות."
      footer={
        <ButtonLink href={Routes.ROOT} variant={ButtonLinkVariants.PRIMARY}>
          חזרה לעמוד הראשי
        </ButtonLink>
      }
    />
  </div>
);

export default Error;
