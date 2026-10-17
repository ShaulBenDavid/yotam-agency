import { pillVariantClassNames } from '@/styles/buttonVariants';
import { ButtonVariants } from './Button.types';

export const buttonVariantsStyleConfig: Record<ButtonVariants, string> = {
  [ButtonVariants.PRIMARY]: pillVariantClassNames.primary,
  [ButtonVariants.SECONDARY]: pillVariantClassNames.secondary,
  [ButtonVariants.LINK]: pillVariantClassNames.link,
  [ButtonVariants.ON_DARK]: pillVariantClassNames.onDark,
  [ButtonVariants.ON_DARK_OUTLINE]: pillVariantClassNames.onDarkOutline,
};
