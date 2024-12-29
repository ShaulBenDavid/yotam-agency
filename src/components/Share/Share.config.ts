import { WEBSITE_URL } from '@/constants';

type ShareContent = {
  url: string;
  subject: string;
  title: string;
};

export const shareContent: ShareContent = {
  url: WEBSITE_URL,
  subject: 'טסט',
  title: 'שדגש דגש דגש דגשד ג',
};
