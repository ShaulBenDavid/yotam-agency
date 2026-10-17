import React from 'react';
import { Section } from '@/components/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { japanPoints } from './InfoList.config';

export const InfoList = (): JSX.Element => (
  <Section width="content" className="pt-0 tb:pt-0">
    <SectionHeader title="למה לבחור בנו" />
    <ol className="mx-auto flex max-w-3xl flex-col gap-5 tb:gap-6">
      {japanPoints.map(({ id, title, text }) => (
        <li key={id} className="flex items-start gap-4 tb:gap-5">
          <span
            aria-hidden
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tint text-[15px] font-extrabold text-primary-950"
          >
            {id}
          </span>
          <div className="pt-1">
            {title ? (
              <h3 className="mb-1 text-base font-bold text-ink tb:text-[17px]">
                {title}
              </h3>
            ) : null}
            <p className="text-[15px] leading-[1.75] text-ink-muted">{text}</p>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);
