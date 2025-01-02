import { Routes } from '@/routes';
import { buildRoutePath } from '@/utils';
import { ImageLinkProps } from '@/components/ImageLink/ImageLink';
import ThailandIMG from './images/thailand.jpg';
import JapanIMG from './images/japan.jpg';
import SriLankaIMG from './images/sriLanka.jpg';

export const countriesConfig: ImageLinkProps[] = [
  {
    title: 'תאילנד',
    href: buildRoutePath(Routes.COUNTRY, Routes.THAILAND),
    image: ThailandIMG.src,
  },
  {
    title: 'יפן',
    href: buildRoutePath(Routes.COUNTRY, Routes.JAPAN),
    image: JapanIMG.src,
  },
  {
    title: 'סרי לנקה',
    href: buildRoutePath(Routes.COUNTRY, Routes.SRI_LANKA),
    image: SriLankaIMG.src,
  },
];
