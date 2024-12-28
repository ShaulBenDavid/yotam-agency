import { client } from '@/sanity/sanity.client';
import {
  allCitiesQuery,
  citiesByCountryQuery,
  citiesLinksByCountryQuery,
} from './city.queries';
import type { CityLinkType, CitySlugType } from './city.types';

export const getAllCities = async (): Promise<CitySlugType[]> => {
  const cities = await client.fetch(allCitiesQuery);
  return cities;
};

export const getCitiesByCountry = async (
  countryName: string
): Promise<CitySlugType[]> => {
  const cities = await client.fetch(citiesByCountryQuery, {
    slug: countryName,
  });
  return cities;
};

export const getCitiesLinkByCountry = async (
  countryName: string
): Promise<CityLinkType[]> => {
  const cities = await client.fetch(citiesLinksByCountryQuery, {
    slug: countryName,
  });
  return cities;
};
