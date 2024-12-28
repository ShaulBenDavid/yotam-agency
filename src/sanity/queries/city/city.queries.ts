import { groq } from 'next-sanity';

export const allCitiesQuery = groq`
*[_type=='city']{
    slug,
    country
} 
`;
