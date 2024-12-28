import { groq } from 'next-sanity';

export const getAttractionsQuery = groq`
  *[_type == 'attraction' && city->slug.current == $slug][0...5] {
  ...
  }
`;
