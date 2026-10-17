import React from 'react';
import { EmptyState } from '@/components/EmptyState';
import NotFoundSVG from '@/assets/images/404SVG.svg';
import { Routes } from '@/routes';
import { ButtonLink, ButtonLinkVariants } from '@/components/ButtonLink';

const NotFound = (): JSX.Element => (
  <div className="flex flex-grow flex-col items-center justify-center gap-4 px-4 py-16 tb:py-24">
    <h1 className="text-[clamp(56px,10vw,96px)] font-extrabold leading-none text-primary-950">
      404
    </h1>
    <EmptyState
      svgUrl={NotFoundSVG}
      header="אופססס!, מצטערים עמוד זה לא קיים."
      footer={
        <ButtonLink href={Routes.ROOT} variant={ButtonLinkVariants.PRIMARY}>
          חזרה לעמוד הראשי
        </ButtonLink>
      }
    />
  </div>
);

export default NotFound;
