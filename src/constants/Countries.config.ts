import { Routes } from '@/routes';
import { ImageLinkProps } from '@/components/ImageLink/ImageLink';
import ThailandIMG from './images/thailand.jpg';
import JapanIMG from './images/japan.jpg';
import SriLankaIMG from './images/sriLanka.jpg';

export const countriesConfig: ImageLinkProps[] = [
  {
    title: 'תאילנד',
    href: Routes.THAILAND,
    image: ThailandIMG.src,
  },
  {
    title: 'יפן',
    href: Routes.JAPAN,
    image: JapanIMG.src,
  },
  {
    title: 'סרי לנקה',
    href: Routes.SRI_LANKA,
    image: SriLankaIMG.src,
  },
];
