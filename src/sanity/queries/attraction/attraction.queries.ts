import { groq } from 'next-sanity';

export const getFiveAttractionsQuery = groq`
  *[_type == 'attraction' && city->slug.current == $slug][0...5] {
  ...
  }
`;

export const getAttractionsQuery = groq`
  *[_type == 'attraction' && city->slug.current == $slug] {
  ...
  }
`;
