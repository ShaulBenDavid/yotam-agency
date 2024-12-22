import React from 'react';
import JapanBImage from '@/assets/images/japanB.jpg';
import { CountryPage } from '@/features/CountryPage';
import CountriesJSON from '@/constants/content/countries.json';

export const Japan = (): JSX.Element => (
  <CountryPage
    name={CountriesJSON.japan.title}
    image={JapanBImage.src}
    description={CountriesJSON.japan.description}
    forWho={CountriesJSON.japan.forWho}
  />
);
