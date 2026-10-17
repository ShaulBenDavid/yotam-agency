import React, { ReactNode } from 'react';

interface IntroProps {
  title: ReactNode;
  image: string;
  maxHeight?: string;
  minHeight?: string;
  children?: ReactNode;
}

export const Intro = ({
  title,
  image,
  maxHeight = '360px',
  minHeight = '220px',
  children,
}: IntroProps): JSX.Element => (
  <section
    className="relative isolate flex w-full overflow-hidden bg-primary-950"
    style={{ height: `clamp(${minHeight}, 42vw, ${maxHeight})` }}
  >
    <div
      aria-hidden
      className="absolute inset-0 -z-10 animate-[heroIn_1.2s_ease-out_forwards] bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div
      aria-hidden
      className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-950/25 via-primary-950/45 to-primary-950/85"
    />
    <div className="ds-container flex flex-col items-center justify-center gap-4 text-center">
      <h1
        className="max-w-[800px] animate-[enterInSideTabs_0.8s_ease-out_forwards] text-[clamp(1.75rem,4.6vw,3.25rem)] font-extrabold leading-tight text-white opacity-0 [text-shadow:0_2px_24px_rgba(7,25,82,0.45)]"
      >
        {title}
      </h1>
      {children}
    </div>
  </section>
);
