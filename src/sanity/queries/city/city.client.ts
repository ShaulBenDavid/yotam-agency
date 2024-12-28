import { client } from '@/sanity/sanity.client';
import { allCitiesQuery } from './city.queries';
import type { City } from '../../types';

export const getAllCities = async (): Promise<City[]> => {
  const posts = await client.fetch(allCitiesQuery);
  return posts;
};
