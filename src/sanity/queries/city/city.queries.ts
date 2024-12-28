import { groq } from 'next-sanity';

export const allCitiesQuery = groq`
*[_type=='city']{
    slug,
    country
} 
`;

export const citiesByCountryQuery = groq`
  *[_type == 'city' && country == $slug] {
    slug,
    country
  }
`;

export const citiesLinksByCountryQuery = groq`
  *[_type == 'city' && country == $slug] {
    slug,
    country,
    mainImage,
    title
  }
`;

export const getCityQuery = groq`
  *[_type == 'city' && slug.current == $slug][0] {
  ...
  }
`;
