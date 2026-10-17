import React from 'react';
import type { SocialLinkConfigType } from '@/constants/socials';
import { socialIconsConfig } from './SocialIconsLinks.config';

interface SocialIconsLinksProps {
  links: SocialLinkConfigType[];
}

export const SocialIconsLinks = ({
  links,
}: SocialIconsLinksProps): JSX.Element => (
  <div className="flex gap-2">
    {links.map(({ link, title }) => (
      <a
        key={link}
        href={link}
        aria-label={title}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-night-line text-night-muted transition-colors hover:border-white hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        {socialIconsConfig[title]}
        <span className="sr-only">{title}</span>
      </a>
    ))}
  </div>
);
