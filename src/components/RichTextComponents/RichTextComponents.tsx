import React from 'react';
import Image from 'next/image';
import type { PortableTextReactComponents } from '@portabletext/react';
import { forUrl } from '@/sanity/sanity.utils';
import { Blockquote } from './Blockquote';

export const RichTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => (
      <Image
        src={forUrl(value.asset._ref).url()}
        alt=""
        role="presentation"
        loading="lazy"
        unoptimized
        width={500}
        height={200}
        className="my-4 aspect-[1000/420] w-full rounded-card object-contain"
      />
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="flex list-outside list-disc flex-col gap-1.5 py-2 ps-5 marker:text-accent">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="flex list-outside list-decimal flex-col gap-1.5 py-2 ps-5 marker:font-bold marker:text-primary-950">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-[1.8] text-ink-soft">{children}</li>,
    number: ({ children }) => <li className="leading-[1.8] text-ink-soft">{children}</li>,
  },
  block: {
    h3: ({ value }) => {
      const text = value.children[0].text as string;
      const modifiedString = text.replace(/\[(.*?)\]/, '');
      const match = text.match(/\[(.*?)\]/);

      return (
        <h3
          className="mt-4 scroll-mt-[calc(var(--header-height)+16px)] text-xl font-extrabold leading-snug text-ink tb:text-2xl"
          {...(match ? { id: match[1] } : {})}
        >
          {modifiedString}
        </h3>
      );
    },
    h2: ({ children }) => (
      <h2 className="mt-6 text-2xl font-extrabold leading-tight text-ink tb:text-3xl">{children}</h2>
    ),
    blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value.href}
        className="ds-link font-semibold underline"
        target={value.href.startsWith('#') ? '_self' : '_blank'}
        rel="noreferrer"
      >
        {children}
      </a>
    ),
  },
};
