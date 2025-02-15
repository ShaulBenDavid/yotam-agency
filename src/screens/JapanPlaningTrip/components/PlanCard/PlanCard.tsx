import React from 'react';
import { Contact } from '@/components/Contact';
import { MdAccessTime } from 'react-icons/md';

interface PlanCardProps {
  title?: string;
  isDark: boolean;
}

export const PlanCard = ({
  title = 'לפרטים נוספים צרו קשר',
  isDark,
}: PlanCardProps): JSX.Element => (
  <div
    className={`w-full rounded-md ${isDark ? 'bg-primary-950 text-white' : 'bg-white text-primary-950'} px-2 py-4 text-center text-base font-medium shadow-2xl tb:py-8 tb:text-xl`}
  >
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
  </div>
);
