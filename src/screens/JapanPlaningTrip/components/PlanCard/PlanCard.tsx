import React, { ReactNode } from 'react';
import { Button, ButtonVariants } from '@/components/Button';
import { ARIA_JAPAN_PLANING_INFO_MODAL } from '../PlaningInfo/PlaningInfo';

interface PlanCardProps {
  title: string;
  icon: ReactNode;
  isDark: boolean;
  onClick: () => void;
}

export const PlanCard = ({
  title,
  icon,
  isDark,
  onClick,
}: PlanCardProps): JSX.Element => (
  <div
    className={`flex w-full cursor-pointer flex-col items-center gap-4 rounded-card px-6 py-8 text-center transition hover:-translate-y-0.5 hover:shadow-lift tb:px-8 tb:py-10 ${
      isDark
        ? 'bg-primary-950 text-white'
        : 'border border-line bg-white text-ink'
    }`}
    onClick={onClick}
  >
    <span
      className={`flex h-20 w-20 items-center justify-center rounded-full ${isDark ? 'bg-white/10' : 'bg-tint'}`}
    >
      {icon}
    </span>
    <h2 className="text-xl font-extrabold tb:text-2xl">{title}</h2>
    <Button
      width="fit-content"
      className="mx-auto"
      aria-controls={ARIA_JAPAN_PLANING_INFO_MODAL}
      onClick={onClick}
      variant={isDark ? ButtonVariants.ON_DARK : ButtonVariants.PRIMARY}
    >
      לפרטים נוספים
    </Button>
  </div>
);
