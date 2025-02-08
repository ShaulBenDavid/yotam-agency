import { Routes } from '@/routes';
import type { Base, Image, Slug } from './common.types';
import type { City } from './city.types';

export interface Attraction extends Base {
  title: string;
  slug: Slug;
  mainImage: Image;
  description: string;
  price?: string;
  country: Routes.SRI_LANKA | Routes.THAILAND | Routes.JAPAN;
  city: City;
}
