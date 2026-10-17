import React from 'react';
import { twMerge } from 'tailwind-merge';
import { socialLinksConfig } from '@/constants/socials';
import { socialIconsConfig } from '@/components/Footer/SocialIconsLinks/SocialIconsLinks.config';
import {
  pillBaseClassName,
  pillVariantClassNames,
} from '@/styles/buttonVariants';

export const SocialButtons = (): JSX.Element => (
  <section className="ds-container flex flex-col items-center gap-4 pb-12 tb:pb-20">
    <h2 className="text-center text-lg font-extrabold tb:text-xl">
      תעקבו אחרינו ב-
    </h2>
    <div className="flex flex-wrap justify-center gap-3">
      {socialLinksConfig.map(({ title, link }) => (
        <a
          key={title}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={twMerge(
            pillBaseClassName,
            pillVariantClassNames.secondary,
            'uppercase'
          )}
        >
          {socialIconsConfig[title]}
          {title}
        </a>
      ))}
    </div>
  </section>
);
