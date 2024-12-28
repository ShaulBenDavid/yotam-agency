import type { Base, Image, Slug } from './common.types';

export interface City extends Base {
  country: string;
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  forWho: string;
}
