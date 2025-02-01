import { Share } from '@/components/Share';
import React from 'react';

interface ShareWithFriendsProps {
  url?: string;
}

export const ShareWithFriends = ({
  url,
}: ShareWithFriendsProps): JSX.Element => (
  <section className="w-full rounded-md border-t border-primary-950 py-4 tb:py-8">
    <h2 className="text-center text-lg font-bold tb:text-2xl">
      אם בא לכם לשתף 😊
    </h2>
    <div className="flex justify-center py-4">
      <Share url={url} />
    </div>
  </section>
);
