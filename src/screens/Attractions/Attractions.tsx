import React from 'react';
import { FcGlobe } from 'react-icons/fc';
import { FcSportsMode } from 'react-icons/fc';
import { FcLandscape } from 'react-icons/fc';
import { FaUmbrellaBeach } from 'react-icons/fa6';
import { ImageLink } from '@/components/ImageLink';
import { Section } from '@/components/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { countriesConfig } from '@/constants/Countries.config';
import { buildRoutePath } from '@/utils';
import { Routes } from '@/routes';
import { ShareWithFriends } from '@/features/ShareWithFriends';
import { ContactUs } from '../../features/ContactUs';
import { KlookWidget } from '@/components/Klook';

export const Attractions = (): JSX.Element => (
  <div className="flex w-full flex-col">
    <Section width="content" innerClassName="flex flex-col items-center">
      <SectionHeader
        as="h1"
        title="אטרקציות"
        subtitle="סיורים, כרטיסים ועוד חוויות בלתי נשכחות! 🎟️🌍"
        className="mb-6 tb:mb-8"
      />
      <span aria-hidden className="flex flex-row gap-6 tb:gap-8">
        <FcGlobe size={36} />
        <FcSportsMode size={36} />
        <FcLandscape size={36} />
        <FaUmbrellaBeach size={36} className="text-primary-950" />
      </span>
    </Section>
    <Section tone="tint" width="content">
      <h2 className="mb-6 text-center text-lg font-extrabold tb:mb-8 tb:text-xl">
        אז בואו לשמוע על האטרקציות ביפן!
      </h2>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-5">
        {countriesConfig.map(({ title, href, image }) => (
          <ImageLink
            title={title}
            href={buildRoutePath(href, Routes.ATTRACTIONS)}
            image={image}
            key={href}
          />
        ))}
      </div>
    </Section>
    <KlookWidget cid={28} />
    <ContactUs />
    <ShareWithFriends />
  </div>
);
