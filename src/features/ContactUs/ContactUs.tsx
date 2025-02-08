import { Contact } from '@/components/Contact';
import React from 'react';
import { MdAccessTime } from 'react-icons/md';

interface ContactUsProps {
  title?: string;
}

export const ContactUs = ({
  title = 'לפרטים נוספים צרו קשר',
}: ContactUsProps): JSX.Element => (
  <section className="w-full rounded-md bg-primary-950 py-4 text-center text-base font-medium text-white tb:py-8 tb:text-xl">
    <h2 className="text-center text-lg font-bold tb:text-2xl">{title}</h2>
    <p className="">התייעצות, שאלה או סגירת חופשה? אל תהססו להתקשר</p>
    <div className="flex flex-row items-center justify-center gap-2 py-2">
      <MdAccessTime size={24} aria-hidden />
      <div className="flex flex-col">
        <span>בימים א’-ה’ בין השעות 09:00-18:00</span>
        <span>ביום ו׳ בין השעות 09:00-13:00</span>
      </div>
    </div>
    <div className="flex justify-center py-4">
      <Contact />
    </div>
  </section>
);
