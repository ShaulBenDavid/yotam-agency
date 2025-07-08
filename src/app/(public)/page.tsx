import React from 'react';
import { Root } from '@/screens/Root/';
import { getCitiesLinkByCountry } from '@/sanity/queries/city';

const Home = async (): Promise<JSX.Element> => {
  const cities = await getCitiesLinkByCountry('japan');

  return <Root cities={cities} />;
};

export default Home;
