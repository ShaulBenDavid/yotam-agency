export enum Routes {
  // MAIN
  ROOT = '/',
  // Countries
  THAILAND = 'thailand',
  JAPAN = 'japan',
  SRI_LANKA = 'sri-lanka',

  ATTRACTIONS = 'attractions',
  JAPAN_PLANING_TRIP = 'japan-planing-trip',
  HOTELS = 'hotels',
  COUNTRY = 'country',
  BLOG = 'blog',

  // settings
  PRIVACY_POLICY = 'privacy-policy',
  ACCESSIBILITY = 'accessibility',
  CONTACT_US = 'contact-us',
  ABOUT_US = 'about-us',
}

export const countries = [Routes.JAPAN, Routes.THAILAND];
export const allCountries = [Routes.JAPAN, Routes.THAILAND, Routes.SRI_LANKA];
