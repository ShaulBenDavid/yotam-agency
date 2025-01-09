import { WEBSITE_URL } from '@/constants';

type ShareContent = {
  url: string;
  subject: string;
  title: string;
};

export const shareContent: ShareContent = {
  url: WEBSITE_URL,
  subject: 'FlySan - חופשה במזרח',
  title: 'כי כאן סוגרים חופשה במזרח',
};
