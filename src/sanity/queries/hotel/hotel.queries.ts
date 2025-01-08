import { groq } from 'next-sanity';

export const getFiveHotelsQuery = groq`
  *[_type == 'hotel' && city->slug.current == $slug][0...5] {
  ...
  }
`;
export const getHotelsQuery = groq`
  *[_type == 'hotel' && city->slug.current == $slug] {
  ...
  }
`;

export const getHotelsByCountryQuery = groq`
 *[_type == 'hotel' && country == $slug] {
  ...,
  city-> {
    ...
  }
  }`;
