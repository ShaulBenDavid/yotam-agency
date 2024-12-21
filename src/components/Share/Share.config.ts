import { WEBSITE_URL } from '@/constants/details';

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
