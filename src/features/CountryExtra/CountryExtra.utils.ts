import { City } from '@/sanity/types';
import { CountryExtraDataProps } from './CountryExtra';

export const transformToCityHotelStructure = <T extends CountryExtraDataProps>(
  data: T[]
) =>
  data.reduce<Record<string, { city: City; data: T[] }>>((acc, cur) => {
    if (!acc[cur.city.slug.current]) {
      acc[cur.city.slug.current] = {
        city: cur.city,
        data: [],
      };
    }
    acc[cur.city.slug.current].data.push(cur);
    return acc;
  }, {});
