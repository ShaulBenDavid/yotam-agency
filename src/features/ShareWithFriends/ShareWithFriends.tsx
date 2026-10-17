import React from 'react';
import { Share } from '@/components/Share';

interface ShareWithFriendsProps {
  url?: string;
}

export const ShareWithFriends = ({
  url,
}: ShareWithFriendsProps): JSX.Element => (
  <section className="ds-container py-10 tb:py-14">
    <div className="flex flex-col items-center gap-4 border-t border-line pt-10 tb:pt-14">
      <h2 className="text-center text-lg font-extrabold tb:text-xl">
        אם בא לכם לשתף 😊
      </h2>
      <Share url={url} />
    </div>
  </section>
);
