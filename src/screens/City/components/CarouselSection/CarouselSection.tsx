'use client';

import React from 'react';
import { Carousel } from '@/components/Carousel';
import { ButtonLink } from '@/components/ButtonLink';
import { FaArrowLeft } from 'react-icons/fa';

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
}

export const CarouselSection = <T extends DataProps>({
  title,
  data,
  linkText,
  linkHref,
  icon,
  cardRender,
}: CarouselSectionProps<T>): JSX.Element => (
  <section className="tb:py-4 flex w-full flex-col items-center gap-2 py-2">
    {icon}
    <h2 className="app-h2">{title}</h2>
    <Carousel data={data} cardRender={cardRender} />
    <ButtonLink href={linkHref} width="250px">
      {linkText}
      <FaArrowLeft />
    </ButtonLink>
  </section>
);
