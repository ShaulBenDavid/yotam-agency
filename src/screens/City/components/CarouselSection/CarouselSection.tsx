'use client';

import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Carousel } from '@/components/Carousel';
import { ButtonLink, ButtonLinkVariants } from '@/components/ButtonLink';
import { Section } from '@/components/Section';
import { SectionHeader } from '@/components/SectionHeader';

interface DataProps {
  _id: string;
}

interface CarouselSectionProps<T> {
  title: string;
  data: T[];
  linkText: string;
  linkHref: string;
  icon: JSX.Element;
  cardRender: (data: T) => JSX.Element;
  subject: string;
  tone?: 'plain' | 'tint';
}

export const CarouselSection = <T extends DataProps>({
  title,
  data,
  linkText,
  linkHref,
  icon,
  cardRender,
  subject,
  tone = 'plain',
}: CarouselSectionProps<T>): JSX.Element => (
  <Section tone={tone} innerClassName="flex flex-col items-center">
    <SectionHeader
      title={title}
      icon={<span className="[&_svg]:h-9 [&_svg]:w-9">{icon}</span>}
    />
    <Carousel data={data} cardRender={cardRender} subject={subject} />
    <ButtonLink
      href={linkHref}
      variant={ButtonLinkVariants.SECONDARY}
      className="mt-8"
    >
      {linkText}
      <FaArrowLeft size={12} aria-hidden />
    </ButtonLink>
  </Section>
);
