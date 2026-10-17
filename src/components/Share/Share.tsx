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
  <div className="flex flex-wrap justify-center gap-3">
    <span className="flex h-10 w-10 items-center justify-center rounded-full ring-primary-950 ring-offset-2 transition duration-200 focus-within:ring-2 hover:-translate-y-0.5">
      <EmailShareButton
        url={`${shareContent.url}${url}`}
        subject={subject ?? shareContent.subject}
        body={title ?? shareContent.title}
      >
        <EmailIcon size={36} round />
      </EmailShareButton>
    </span>
    <span className="flex h-10 w-10 items-center justify-center rounded-full ring-primary-950 ring-offset-2 transition duration-200 focus-within:ring-2 hover:-translate-y-0.5">
      <FacebookShareButton
        url={`${shareContent.url}${url}`}
        quote={title ?? shareContent.title}
        hashtag="#flysan"
      >
        <FacebookIcon size={36} round />
      </FacebookShareButton>
    </span>
    <span className="flex h-10 w-10 items-center justify-center rounded-full ring-primary-950 ring-offset-2 transition duration-200 focus-within:ring-2 hover:-translate-y-0.5">
      <LinkedinShareButton url={`${shareContent.url}${url}`}>
        <LinkedinIcon size={36} round />
      </LinkedinShareButton>
    </span>
    <span className="flex h-10 w-10 items-center justify-center rounded-full ring-primary-950 ring-offset-2 transition duration-200 focus-within:ring-2 hover:-translate-y-0.5">
      <WhatsappShareButton
        url={`${shareContent.url}${url}`}
        title={title ?? shareContent.title}
        separator=":: "
      >
        <WhatsappIcon size={36} round />
      </WhatsappShareButton>
    </span>
    <span className="flex h-10 w-10 items-center justify-center rounded-full ring-primary-950 ring-offset-2 transition duration-200 focus-within:ring-2 hover:-translate-y-0.5">
      <TwitterShareButton
        url={`${shareContent.url}${url}`}
        title={title ?? shareContent.title}
      >
        <TwitterIcon size={36} round />
      </TwitterShareButton>
    </span>
  </div>
);
