import { client } from '@/sanity/sanity.client';
import { Attraction } from '@/sanity/types';
import {
  getFiveAttractionsQuery,
  getAttractionsQuery,
  getAttractionsByCountryQuery,
} from './attraction.queries';

export const getFiveAttractions = async (
  cityName: string
): Promise<Attraction[]> => {
  return await client.fetch(getFiveAttractionsQuery, {
    slug: cityName,
  });
};

export const getAttractions = async (
  cityName: string
): Promise<Attraction[]> => {
  return await client.fetch(getAttractionsQuery, {
    slug: cityName,
  });
};

export const getAttractionsByCountry = async (
  countrySlug: string
): Promise<Attraction[]> =>
  await client.fetch(getAttractionsByCountryQuery, {
    slug: countrySlug,
  });
