import { Routes } from '@/routes';
import type { Base, Image, Slug } from './common.types';
import type { City } from './city.types';

export interface Hotel extends Base {
  title: string;
  slug: Slug;
  mainImage: Image;
  address: string;
  mapLink: string;
  starRating: number;
  reviewScore: number;
  price?: number;
  country: Routes.SRI_LANKA | Routes.THAILAND | Routes.JAPAN;
  city: City;
}
