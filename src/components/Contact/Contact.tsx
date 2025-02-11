import { contactData } from '@/constants';
import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export const Contact = (): JSX.Element => (
  <ul className="flex flex-row flex-wrap items-center justify-center gap-4">
    <li className="flex flex-row gap-2">
      <FaPhone size={24} />
      <a
        className="hover:underline"
        href={`tel:+${contactData.phone.replace(/[+-]/g, '')}`}
        aria-label={`Call us at ${contactData.phone}`}
      >
        {contactData.phone}
      </a>
    </li>
    <li className="flex flex-row items-center gap-2">
      <IoIosMail size={24} />
      <a
        className="hover:underline"
        href={`mailto:${contactData.email}`}
        aria-label="Email us at info@example.com"
      >
        {contactData.email}
      </a>
    </li>
    <li>
      <a
        href={`https://wa.me/${contactData.phone.replace(/[+-]/g, '')}`}
        className="flex items-center gap-2 rounded bg-green-500 px-4 font-bold text-white hover:bg-green-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
        <span>WhatsApp</span>
      </a>
    </li>
  </ul>
);
