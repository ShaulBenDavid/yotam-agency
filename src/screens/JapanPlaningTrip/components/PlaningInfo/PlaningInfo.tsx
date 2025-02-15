import React from 'react';
import { PlanCard } from '../PlanCard';

export const PlaningInfo = (): JSX.Element => (
  <section className="flex w-full flex-col gap-4 tb:flex-row">
    <PlanCard isDark />
    <PlanCard isDark={false} />
  </section>
);
