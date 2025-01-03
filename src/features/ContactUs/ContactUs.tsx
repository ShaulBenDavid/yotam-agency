import { Contact } from '@/components/Contact';
import React from 'react';
import { MdAccessTime } from 'react-icons/md';

export const ContactUs = (): JSX.Element => (
  <section className="tb:py-8 bg-primary-950 tb:text-xl w-full rounded-md py-4 text-center text-base font-medium text-white">
    <h2 className="tb:text-2xl text-center text-lg font-bold">
      לפרטים נוספים צרו קשר
    </h2>
    <p className="">התייעצות, שאלה או סגירת חופשה? אל תהססו להתקשר</p>
    <span className="flex flex-row items-center justify-center gap-2 py-2">
      <MdAccessTime size={24} aria-hidden />
      בימים א’-ה’ בין השעות 09:00-18:00
    </span>
    <div className="flex justify-center py-4">
      <Contact />
    </div>
  </section>
);
