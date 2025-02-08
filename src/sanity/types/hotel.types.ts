import { Routes } from '@/routes';
import type { Base, Image, Slug } from './common.types';
import type { City } from './city.types';

export type HotelGalleryItem = Image & { alt: string };

export interface Hotel extends Base {
  title: string;
  slug: Slug;
  description: string;
  mainImage: Image;
  gallery?: HotelGalleryItem[];
  address: string;
  mapLink: string;
  starRating: number;
  reviewScore: number;
  price?: string;
  country: Routes.SRI_LANKA | Routes.THAILAND | Routes.JAPAN;
  city: City;
}
