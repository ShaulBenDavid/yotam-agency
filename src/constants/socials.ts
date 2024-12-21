export enum SocialEnum {
  INSTAGRAM = 'instagram',
}

export type SocialLinkConfigType = {
  title: SocialEnum;
  link: string;
};

export const socialLinksConfig: SocialLinkConfigType[] = [
  {
    title: SocialEnum.INSTAGRAM,
    link: 'https://www.instagram.com/myproductivedesks/',
  },
];
