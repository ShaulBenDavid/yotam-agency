import React from 'react';
import type { Metadata } from 'next';
import { ContactUs } from '@/features/ContactUs';
import { FcAssistant } from 'react-icons/fc';
import { ContactForm } from '@/components/ContactForm';
import { Section } from '@/components/Section';
import { contactUsMetadata } from '@/metadata';

export const metadata: Metadata = contactUsMetadata;

const ContactUS = (): JSX.Element => (
  <div className="flex flex-grow flex-col">
    <Section width="content" innerClassName="flex flex-col items-center">
      <FcAssistant aria-hidden size={60} className="mb-3" />
      <h1 className="ds-h1 mb-8 text-center tb:mb-10">ליצירת קשר</h1>
      <ContactForm />
    </Section>
    <ContactUs />
  </div>
);

export default ContactUS;
