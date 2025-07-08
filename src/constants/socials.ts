export enum SocialEnum {
  INSTAGRAM = 'instagram',
  FACEBOOK = 'facebook',
}

export type SocialLinkConfigType = {
  title: SocialEnum;
  link: string;
};

export const socialLinksConfig: SocialLinkConfigType[] = [
  {
    title: SocialEnum.INSTAGRAM,
    link: 'https://www.instagram.com/flysan.co.il/',
  },
  {
    title: SocialEnum.FACEBOOK,
    link: 'https://www.facebook.com/profile.php?id=61572247406009',
  },
];
