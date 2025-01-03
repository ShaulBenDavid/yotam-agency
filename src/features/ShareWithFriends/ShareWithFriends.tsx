import { Share } from '@/components/Share';
import React from 'react';

interface ShareWithFriendsProps {
  title: string;
  description: string;
  url?: string;
}

export const ShareWithFriends = ({
  title,
  description,
  url,
}: ShareWithFriendsProps): JSX.Element => (
  <section className="tb:py-8 border-primary-950 w-full rounded-md border-t py-4">
    <h2 className="tb:text-2xl text-center text-lg font-bold">{title}</h2>
    <p className="tb:text-xl text-center text-base font-medium">
      {description}
    </p>
    <div className="flex justify-center py-4">
      <Share url={url} />
    </div>
  </section>
);
