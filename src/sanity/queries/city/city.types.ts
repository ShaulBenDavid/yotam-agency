import { City } from '@/sanity/types';

export type CitySlugType = Pick<City, 'slug' | 'country'>;

export type CityLinkType = Pick<
  City,
  'slug' | 'country' | 'mainImage' | 'title'
>;
