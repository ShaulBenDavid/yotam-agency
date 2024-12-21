import React from 'react';
// import Image from 'next/image';
import JapanImage from '@/assets/images/jpLandImg.jpg';

export const Intro = (): JSX.Element => (
  <section className="grid h-[27vw] max-h-[500px] min-h-80">
    <div
      className="bg-red relative h-full w-full overflow-y-clip"
      aria-hidden
      style={{ gridRow: 1, gridColumn: 1 }}
    >
      <div
        className="bg-primary-200 animate-fade-in-scale absolute left-1/2 h-full w-screen -translate-x-1/2"
        style={{
          backgroundImage: `url(${JapanImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="to-light-gray/70 absolute inset-0 bg-gradient-to-b from-transparent" />
      </div>
    </div>
    <h1
      style={{
        gridRow: 1,
        gridColumn: 1,
        fontSize: 'clamp(1.5rem, 3vw, 4rem)',
        textShadow: '5px 1px 12px rgba(7, 25, 82, 0.8)',
      }}
      className="z-10 animate-[enterInSideTabs_1s_ease-in_forwards] place-self-center text-center font-bold text-white"
    >
      חופשות במזרח סוגרים עם יותם טורס
    </h1>
  </section>
);
