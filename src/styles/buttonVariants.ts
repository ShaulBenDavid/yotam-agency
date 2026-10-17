export const pillBaseClassName =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-bold transition duration-150';

export const pillVariantClassNames = {
  primary: 'bg-primary-950 text-white hover:bg-primary-900',
  secondary:
    'border-[1.5px] border-primary-950 bg-transparent text-primary-950 hover:bg-primary-950 hover:text-white',
  link: 'min-h-0 px-0 bg-transparent text-primary-950 underline-offset-4 hover:text-accent-strong hover:underline',
  onDark: 'bg-white text-primary-950 hover:bg-tint',
  onDarkOutline:
    'border-[1.5px] border-white bg-transparent text-white hover:bg-white hover:text-primary-950',
} as const;
