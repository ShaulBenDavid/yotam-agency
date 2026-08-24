export const reportConversion = (sendTo: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: sendTo,
      value: 1.0,
      currency: 'ILS',
    });
  }
};
