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
    className={`flex w-full flex-col items-center gap-2 rounded-md ${isDark ? 'bg-primary-950 text-white' : 'bg-white text-primary-950'} px-2 py-4 text-center text-base font-medium shadow-2xl`}
    onClick={onClick}
  >
    {icon}
    <h2 className="text-center text-lg font-bold tb:text-2xl">{title}</h2>
    <Button
      width="fit-content"
      className="mx-auto px-4"
      aria-controls={ARIA_JAPAN_PLANING_INFO_MODAL}
      onClick={onClick}
      variant={isDark ? ButtonVariants.SECONDARY : ButtonVariants.PRIMARY}
    >
      לפרטים נוספים
    </Button>
  </div>
);
