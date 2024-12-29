import React from 'react';
import { whyUsListConfig } from './WhyUs.config';

export const WhyUs = (): JSX.Element => (
  <section className="tb:py-8 py-4">
    <h2 className="tb:text-2xl text-center text-lg font-bold">
      אז למה לסגור איתנו?
    </h2>
    <p className="tb:text-xl text-center text-base font-medium">
      אז למה לכם לסגור את החופשה הבאה דווקא איתנו
    </p>

    <div className="tb:gap-8 tb:justify-between flex flex-row flex-wrap justify-center gap-4 pt-4">
      {whyUsListConfig.map(({ icon, text }) => (
        <div
          key={text}
          className="border-primary-950 flex h-40 min-w-40 max-w-full flex-1 flex-col items-center justify-center gap-2 rounded-md border bg-white text-center drop-shadow-md"
        >
          {icon}
          <h3 className="tb:text-xl text-lg font-semibold">{text}</h3>
        </div>
      ))}
    </div>
  </section>
);
