import React from 'react';
import { Share } from '@/components/Share';
import { buildRoutePath } from '@/utils';
import { Routes } from '@/routes';

interface AsideProps {
  countrySlug: string;
  postSlug: string;
}

export const Aside = ({ countrySlug, postSlug }: AsideProps): JSX.Element => (
  <aside className="sticky top-20 flex h-fit w-96 flex-col gap-1 pt-2 max-lg:w-72 max-md:hidden">
    <h2 className="text-base font-bold">שתף עם חבריך!</h2>
    <Share
      url={buildRoutePath(Routes.COUNTRY, countrySlug, Routes.BLOG, postSlug)}
    />
  </aside>
);
