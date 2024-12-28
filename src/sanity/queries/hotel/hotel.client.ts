import { client } from '@/sanity/sanity.client';
import { Hotel } from '@/sanity/types';
import { getHotelsQuery } from './hotel.queries';

export const getHotels = async (cityName: string): Promise<Hotel[]> => {
  const hotels = await client.fetch(getHotelsQuery, {
    slug: cityName,
  });
  return hotels;
};
