import React from 'react';
import { MdAccessTime } from 'react-icons/md';
import { Contact } from '@/components/Contact';
import { Section } from '@/components/Section';

interface ContactUsProps {
  title?: string;
}

export const ContactUs = ({
  title = 'לפרטים נוספים צרו קשר',
}: ContactUsProps): JSX.Element => (
  <Section tone="navy" width="prose" innerClassName="text-center">
    <h2 className="ds-h2 mb-3">{title}</h2>
    <p className="text-base text-white/85 tb:text-lg">
      התייעצות, שאלה או סגירת חופשה? אל תהססו להתקשר
    </p>
    <div className="mt-4 flex flex-row items-start justify-center gap-2 text-sm text-white/70 tb:text-[15px]">
      <MdAccessTime size={20} aria-hidden className="mt-0.5 shrink-0" />
      <div className="flex flex-col gap-0.5 tb:flex-row tb:gap-2">
        <span>בימים א’-ה’ בין השעות 09:00-18:00</span>
        <span aria-hidden className="max-tb:hidden">
          ·
        </span>
        <span>ביום ו׳ בין השעות 09:00-13:00</span>
      </div>
    </div>
    <Contact className="mt-8" />
  </Section>
);
