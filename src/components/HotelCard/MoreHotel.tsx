import React from 'react';
import { Contact } from '../Contact';

export const MoreHotel = () => (
  <div className="flex h-full min-h-[300px] w-full flex-1 flex-col items-center justify-center gap-4 rounded-2xl bg-primary-950 p-2 text-white">
    <h4 className="text-xl font-bold">למלונות נוספים צור קשר</h4>
    <Contact />
  </div>
);
