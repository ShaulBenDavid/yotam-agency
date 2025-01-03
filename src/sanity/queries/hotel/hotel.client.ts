import { client } from '@/sanity/sanity.client';
import { Hotel } from '@/sanity/types';
import { getHotelsQuery, getFiveHotelsQuery } from './hotel.queries';

export const getFiveHotels = async (cityName: string): Promise<Hotel[]> => {
  const hotels = await client.fetch(getFiveHotelsQuery, {
    slug: cityName,
  });
  return hotels;
};

export const getHotels = async (cityName: string): Promise<Hotel[]> => {
  const hotels = await client.fetch(getHotelsQuery, {
    slug: cityName,
  });
  return hotels;
};
