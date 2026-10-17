import React from 'react';
import { Share } from '@/components/Share';
import { buildRoutePath } from '@/utils';
import { Routes } from '@/routes';

interface AsideProps {
  countrySlug: string;
  postSlug: string;
}

export const Aside = ({ countrySlug, postSlug }: AsideProps): JSX.Element => (
  <aside className="sticky top-[calc(var(--header-height)+24px)] flex h-fit w-72 flex-col items-start gap-4 rounded-card border border-line bg-white p-6 max-md:hidden lg:w-80">
    <h2 className="text-base font-extrabold">שתף עם חבריך!</h2>
    <Share
      url={`/${buildRoutePath(Routes.COUNTRY, countrySlug, Routes.BLOG, postSlug)}`}
    />
  </aside>
);
