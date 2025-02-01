import React from 'react';
import { ImageLink } from '@/components/ImageLink';
import { countriesConfig } from '@/constants/Countries.config';

export const Countries = (): JSX.Element => (
  <section className="py-4 tb:py-8">
    <h2 className="text-center text-xl font-bold tb:text-2xl">המדינות שלנו</h2>

    <div className="flex flex-col justify-between gap-2 pt-4 tb:flex-row tb:gap-8">
      {countriesConfig.map(({ title, href, image }) => (
        <ImageLink title={title} href={`/${href}`} image={image} key={href} />
      ))}
    </div>
  </section>
);
