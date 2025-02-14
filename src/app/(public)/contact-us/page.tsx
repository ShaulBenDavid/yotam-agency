import React from 'react';
import { ContactUs } from '@/features/ContactUs';
import { FcAssistant } from 'react-icons/fc';
import { ContactForm } from '@/components/ContactForm';

const ContactUS = (): JSX.Element => (
  <div className="flex flex-grow flex-col items-center justify-center gap-4 py-10">
    <FcAssistant aria-hidden size={70} />
    <h1 className="text-center text-xl font-bold tb:text-2xl">ליצירת קשר</h1>
    <div className="flex flex-col-reverse gap-4 tb:flex-row">
      <ContactForm />
      <ContactUs />
    </div>
  </div>
);

export default ContactUS;
