import { client } from '@/sanity/sanity.client';
import { Attraction } from '@/sanity/types';
import { getAttractionsQuery } from './attraction.queries';

export const getAttractions = async (
  cityName: string
): Promise<Attraction[]> => {
  return await client.fetch(getAttractionsQuery, {
    slug: cityName,
  });
};
