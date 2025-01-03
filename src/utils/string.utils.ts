export const isRtl = (text: string): boolean => {
  const rtlCharRegex = /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
  return rtlCharRegex.test(text);
};
