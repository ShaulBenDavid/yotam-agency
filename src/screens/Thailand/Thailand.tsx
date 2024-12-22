import React from 'react';
import ThailandBImage from '@/assets/images/thailandB.jpg';
import { CountryPage } from '@/features/CountryPage';
import CountriesJSON from '@/constants/content/countries.json';

export const Thailand = (): JSX.Element => (
  <CountryPage
    name={CountriesJSON.thailand.title}
    image={ThailandBImage.src}
    description={CountriesJSON.thailand.description}
    forWho={CountriesJSON.thailand.forWho}
  />
);
