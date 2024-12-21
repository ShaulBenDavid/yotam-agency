import { ButtonLinkVariants } from './ButtonLink.types';

export const linkStyleConfig = {
  [ButtonLinkVariants.PRIMARY]:
    'bg-primary-900 text-white drop-shadow-md hover:bg-primary-950 transition-all ',
  [ButtonLinkVariants.SECONDARY]:
    'shadow-button border-primary-900 bg-white border-[1px] hover:bg-wizard-white text-primary-900 transition-all ',
  [ButtonLinkVariants.LINK]: `bg-transparent text-primary-900 hover:underline underline-offset-2`,
};
