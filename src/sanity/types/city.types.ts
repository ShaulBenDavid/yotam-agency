import { Routes } from '@/routes';
import type { Base, Image, Slug } from './common.types';

export interface City extends Base {
  country: Routes.SRI_LANKA | Routes.THAILAND | Routes.JAPAN;
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  forWho: string;
}
