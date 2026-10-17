import React from 'react';
import Link from 'next/link';

export type NavigationColumnLinksType = {
  title: string;
  link: string;
}[];
interface NavigationColumnProps {
  name: string;
  links: NavigationColumnLinksType;
  isOutSourceLinks?: boolean;
}

const linkClassName =
  'inline-flex min-h-8 items-center text-sm capitalize transition-colors hover:text-white';

export const NavigationColumn = ({
  name,
  links,
  isOutSourceLinks = false,
}: NavigationColumnProps) => (
  <div>
    <h3 className="mb-4 text-sm font-bold text-white">{name}</h3>
    <ul className="flex flex-col gap-1.5" role="navigation" aria-label={name}>
      {links.map(({ title, link }) =>
        isOutSourceLinks ? (
          <li key={title}>
            <a
              href={link}
              className={linkClassName}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </li>
        ) : (
          <li key={title}>
            <Link href={`/${link}`} className={linkClassName}>
              {title}
            </Link>
          </li>
        )
      )}
    </ul>
  </div>
);
