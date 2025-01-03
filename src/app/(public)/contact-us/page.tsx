import React from 'react';
import { ContactUs } from '@/features/ContactUs';
import { FcAssistant } from 'react-icons/fc';

const ContactUS = (): JSX.Element => (
  <div className="flex flex-grow flex-col items-center justify-center gap-4 py-10">
    <FcAssistant aria-hidden size={70} />
    <h1 className="tb:text-2xl text-center text-xl font-bold">ליצירת קשר</h1>
    <ContactUs />
  </div>
);

export default ContactUS;
