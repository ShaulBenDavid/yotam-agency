import React from 'react';
import { twMerge } from 'tailwind-merge';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { contactData, contactLinks, displayPhone } from '@/constants';
import {
  pillBaseClassName,
  pillVariantClassNames,
} from '@/styles/buttonVariants';

export type ContactTone = 'onDark' | 'onLight';

interface ContactProps {
  tone?: ContactTone;
  className?: string;
}

const pillClassNamesByTone: Record<
  ContactTone,
  { main: string; secondary: string }
> = {
  onDark: {
    main: pillVariantClassNames.onDark,
    secondary: pillVariantClassNames.onDarkOutline,
  },
  onLight: {
    main: pillVariantClassNames.primary,
    secondary: pillVariantClassNames.secondary,
  },
};

export const Contact = ({
  tone = 'onDark',
  className,
}: ContactProps): JSX.Element => {
  const pillClassNames = pillClassNamesByTone[tone];

  return (
    <ul
      className={twMerge(
        'flex flex-row flex-wrap items-center justify-center gap-3',
        className
      )}
    >
      <li>
        <a
          className={twMerge(pillBaseClassName, pillClassNames.main)}
          href={contactLinks.tel}
          aria-label={`Call us at ${contactData.phone}`}
        >
          <FaPhone size={14} aria-hidden />
          <span dir="ltr">{displayPhone}</span>
        </a>
      </li>
      <li>
        <a
          href={contactLinks.whatsapp}
          className={twMerge(pillBaseClassName, pillClassNames.secondary)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={18} aria-hidden />
          <span>WhatsApp</span>
        </a>
      </li>
      <li>
        <a
          className={twMerge(pillBaseClassName, pillClassNames.secondary)}
          href={contactLinks.mail}
          aria-label={`Email us at ${contactData.email}`}
        >
          <IoIosMail size={18} aria-hidden />
          <span>{contactData.email}</span>
        </a>
      </li>
    </ul>
  );
};
