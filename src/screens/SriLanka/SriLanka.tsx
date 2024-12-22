import React from 'react';
import SriLankaBImage from '@/assets/images/sriLankaB.jpg';
import CountriesJSON from '@/constants/content/countries.json';
import { CountryPage } from '@/features/CountryPage';

export const SriLanka = (): JSX.Element => (
  <CountryPage
    name={CountriesJSON.sriLanka.title}
    image={SriLankaBImage.src}
    description={CountriesJSON.sriLanka.description}
    forWho={CountriesJSON.sriLanka.forWho}
  />
);
