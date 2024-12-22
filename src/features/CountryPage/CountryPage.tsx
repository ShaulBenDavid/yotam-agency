import React from 'react';
import { FcCloseUpMode } from 'react-icons/fc';
import { Intro } from '@/screens/Root/components/Intro';
import { countriesConfig } from '@/constants/Countries.config';
import { CitiesSection } from './CitiesSection';

interface CountryPageProps {
  name: string;
  description: string;
  image: string;
  forWho: string;
}

export const CountryPage = ({
  name,
  description,
  image,
  forWho,
}: CountryPageProps): JSX.Element => (
  <div className="tb:gap-2 flex flex-col items-center gap-2 px-2 pb-8">
    <Intro title={name} image={image} maxHeight="400px" />
    <div className="tb:py-4 max-w-[900px] py-2">
      <p className="app-p">{description}</p>
    </div>
    <section className="tb:py-4 flex max-w-[900px] flex-col items-center gap-2 py-2">
      <FcCloseUpMode size={50} />
      <h2 className="app-h2">אז למי {name} מתאימה!</h2>
      <p className="app-p">{forWho}</p>
    </section>
    <CitiesSection countryName={name} cities={countriesConfig} />
  </div>
);