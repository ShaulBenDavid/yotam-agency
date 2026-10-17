import React from 'react';
import { Section } from '@/components/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { whyUsListConfig } from './WhyUs.config';

export const WhyUs = (): JSX.Element => (
  <Section tone="tint" width="content">
    <SectionHeader
      title="אז למה לסגור איתנו?"
      subtitle="אז למה לכם לסגור את החופשה הבאה דווקא איתנו"
    />
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 tb:grid-cols-5 tb:gap-6">
      {whyUsListConfig.map(({ icon, text }, index) => (
        <li
          key={text}
          className="flex flex-col items-center gap-3 text-center last:max-sm:col-span-2"
        >
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-line bg-white shadow-sm">
            {icon}
            <span
              aria-hidden
              className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary-950 text-[11px] font-bold text-white"
            >
              {index + 1}
            </span>
          </span>
          <h3 className="text-base font-bold tb:text-[17px]">{text}</h3>
        </li>
      ))}
    </ul>
  </Section>
);
