import React from 'react';
import Link from 'next/link';
import { Routes } from '@/routes';
import { socialLinksConfig } from '@/constants/socials';
import { SocialIconsLinks } from './SocialIconsLinks';
import { FooterNavigation } from './Navigation';

export const Footer = () => (
  <footer className="w-full bg-white">
    <div className="mx-auto w-[1400px] py-6 max-lg:w-[1000px] max-md:w-full max-md:px-2">
      <FooterNavigation />
      <hr className="border-primary-950 my-6 lg:my-8" aria-hidden />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-base font-medium sm:text-center">
          © {new Date().getFullYear()}{' '}
          <Link
            href={Routes.ROOT}
            aria-label="Home"
            className="hover:underline"
          >
            Dwizard.io™
          </Link>{' '}
          כל הזכויות שמורות.
        </span>
        <SocialIconsLinks links={socialLinksConfig} />
      </div>
    </div>
  </footer>
);
