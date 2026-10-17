import { pillVariantClassNames } from '@/styles/buttonVariants';
import { ButtonLinkVariants } from './ButtonLink.types';

export const linkStyleConfig: Record<ButtonLinkVariants, string> = {
  [ButtonLinkVariants.PRIMARY]: pillVariantClassNames.primary,
  [ButtonLinkVariants.SECONDARY]: pillVariantClassNames.secondary,
  [ButtonLinkVariants.LINK]: pillVariantClassNames.link,
  [ButtonLinkVariants.ON_DARK]: pillVariantClassNames.onDark,
  [ButtonLinkVariants.ON_DARK_OUTLINE]: pillVariantClassNames.onDarkOutline,
};
