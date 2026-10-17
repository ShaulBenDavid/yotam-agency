import React from 'react';
import { Contact } from '../Contact';

interface ContactCardProps {
  subject: string;
}

export const ContactCard = ({ subject }: ContactCardProps): JSX.Element => (
  <div className="flex h-full min-h-[300px] w-full flex-1 flex-col items-center justify-center gap-6 rounded-card bg-primary-950 p-6 text-center text-white">
    <h4 className="text-xl font-extrabold">ל{subject} נוספים צור קשר</h4>
    <Contact className="flex-col items-stretch [&_a]:w-full" />
  </div>
);
