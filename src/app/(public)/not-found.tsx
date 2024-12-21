import React from 'react';
import { EmptyState } from '@/components/EmptyState';
import NotFoundSVG from '@/assets/images/404SVG.svg';
import { Routes } from '@/routes';
import { ButtonLink, ButtonLinkVariants } from '@/components/ButtonLink';

const NotFound = () => (
  <div className="flex flex-grow flex-col items-center justify-center gap-4 py-10">
    <h1 className="text-4xl font-bold">404</h1>
    <EmptyState
      svgUrl={NotFoundSVG}
      header="אופססס!, מצטערים עמוד זה לא קיים."
      footer={
        <ButtonLink
          href={Routes.ROOT}
          variant={ButtonLinkVariants.PRIMARY}
          width="180px"
        >
          חזרה לעמוד הראשי
        </ButtonLink>
      }
    />
  </div>
);

export default NotFound;
