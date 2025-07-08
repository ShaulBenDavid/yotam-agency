import { Routes } from '@/routes';
import { buildRoutePath } from '@/utils';
import { ImageLinkProps } from '@/components/ImageLink/ImageLink';
import JapanIMG from './images/japan.jpg';
// ! Archive countries for now

// import ThailandIMG from './images/thailand.jpg';
// import SriLankaIMG from './images/sriLanka.jpg';

export const countriesConfig: ImageLinkProps[] = [
  // ! Archive countries for now

  // {
  //   title: 'תאילנד',
  //   href: buildRoutePath(Routes.COUNTRY, Routes.THAILAND),
  //   image: ThailandIMG.src,
  // },
  {
    title: 'יפן',
    href: buildRoutePath(Routes.COUNTRY, Routes.JAPAN),
    image: JapanIMG.src,
  },
  // ! Archive countries for now

  // {
  //   title: 'סרי לנקה',
  //   href: buildRoutePath(Routes.COUNTRY, Routes.SRI_LANKA),
  //   image: SriLankaIMG.src,
  // },
];
