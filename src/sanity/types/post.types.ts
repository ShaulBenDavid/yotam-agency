import { Routes } from '@/routes';
import { City } from './city.types';
import type { Base, Block, Image, Slug } from './common.types';

export interface Post extends Base {
  country: Routes.SRI_LANKA | Routes.THAILAND | Routes.JAPAN;
  city: City;
  body: Block[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}
