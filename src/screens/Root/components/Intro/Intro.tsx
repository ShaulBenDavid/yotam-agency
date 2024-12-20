import React from 'react';
// import Image from 'next/image';
import JapanImage from '@/assets/images/jpLandImg.jpg';

export const Intro = (): JSX.Element => (
  <section className="h-[27vw] max-h-[500px] min-h-96">
    <div className="bg-red relative h-full w-full overflow-y-clip" aria-hidden>
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
  </section>
);
