'use client';

import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share';
import { shareContent } from './Share.config';

interface ShareProps {
  url?: string;
  subject?: string;
  title?: string;
}

export const Share = ({
  url = '',
  subject,
  title,
}: ShareProps): JSX.Element => (
  <div className="flex flex-wrap gap-2 pl-2 drop-shadow-xl">
    <span className="h-10 border-2 border-transparent duration-200 focus-within:border-blue-700 hover:scale-110">
      <EmailShareButton
        url={`${shareContent.url}${url}`}
        subject={subject ?? shareContent.subject}
        body={title ?? shareContent.title}
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </span>
    <span className="h-10 border-2 border-transparent duration-200 focus-within:border-blue-700 hover:scale-110">
      <FacebookShareButton
        url={`${shareContent.url}${url}`}
        quote={title ?? shareContent.title}
        hashtag="#dwizard"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>{' '}
    </span>
    <span className="h-10 border-2 border-transparent duration-200 focus-within:border-blue-700 hover:scale-110">
      <LinkedinShareButton url={`${shareContent.url}${url}`}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>{' '}
    </span>
    <span className="h-10 border-2 border-transparent duration-200 focus-within:border-blue-700 hover:scale-110">
      <WhatsappShareButton
        url={`${shareContent.url}${url}`}
        title={title ?? shareContent.title}
        separator=":: "
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>{' '}
    </span>
    <span className="h-10 border-2 border-transparent duration-200 focus-within:border-blue-700 hover:scale-110">
      <TwitterShareButton
        url={`${shareContent.url}${url}`}
        title={title ?? shareContent.title}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>{' '}
    </span>
  </div>
);
