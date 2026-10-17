import React from 'react';
import Link from 'next/link';
import { Routes } from '@/routes';
import { socialLinksConfig } from '@/constants/socials';
import { SocialIconsLinks } from './SocialIconsLinks';
import { FooterNavigation } from './Navigation';

export const Footer = () => (
  <footer className="w-full bg-night text-night-muted">
    <div className="ds-container pb-8 pt-12 tb:pt-16">
      <FooterNavigation />
      <div className="mt-10 flex flex-col-reverse items-center gap-4 border-t border-night-line pt-6 tb:flex-row tb:justify-between">
        <span className="text-center text-[13px]">
          © {new Date().getFullYear()}{' '}
          <Link
            href={Routes.ROOT}
            aria-label="Home"
            className="transition-colors hover:text-white"
          >
            FlySan.co.il™
          </Link>{' '}
          כל הזכויות שמורות.
        </span>
        <SocialIconsLinks links={socialLinksConfig} />
      </div>
    </div>
  </footer>
);
