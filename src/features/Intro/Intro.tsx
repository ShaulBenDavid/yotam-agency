import React, { ReactNode } from 'react';

interface IntroProps {
  title: ReactNode;
  image: string;
  maxHeight?: string;
  minHeight?: string;
}

export const Intro = ({
  title,
  image,
  maxHeight = '500px',
  minHeight = '120px',
}: IntroProps): JSX.Element => (
  <section className="grid h-[27vw]" style={{ maxHeight, minHeight }}>
    <div
      className="relative h-full w-full overflow-y-clip"
      aria-hidden
      style={{ gridRow: 1, gridColumn: 1 }}
    >
      <div
        className="absolute left-1/2 h-full w-screen -translate-x-1/2 animate-fade-in-scale"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-950/60" />
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
      {title}
    </h1>
  </section>
);
