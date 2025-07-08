import React from 'react';
import { socialLinksConfig } from '@/constants/socials';

export const SocialButtons = (): JSX.Element => (
  <section className="flex flex-col gap-2 pb-4">
    <h2 className="text-center text-lg font-bold tb:text-2xl">
      תעקבו אחרינו ב-
    </h2>
    <div className="flex justify-center gap-2">
      {socialLinksConfig.map(({ title, link }) => (
        <a
          key={title}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 uppercase text-white transition-all hover:from-blue-700 hover:to-purple-700"
        >
          {title}
        </a>
      ))}
    </div>
  </section>
);
