import React, { ReactNode } from 'react';
import { Button, ButtonVariants } from '@/components/Button';
import { ARIA_JAPAN_PLANING_INFO_MODAL } from '../PlaningInfo/PlaningInfo';

export interface PlanCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  isDark: boolean;
  price: ReactNode;
  onClick: (data: Omit<PlanCardProps, 'onClick' | 'isDark'>) => void;
}

export const PlanCard = ({
  title,
  description,
  icon,
  isDark,
  price,
  onClick,
}: PlanCardProps): JSX.Element => (
  <div
    className={`flex w-full flex-col items-center gap-2 rounded-md ${isDark ? 'bg-primary-950 text-white' : 'bg-white text-primary-950'} px-2 py-4 text-center text-base font-medium shadow-2xl`}
    onClick={() => onClick({ title, description, icon, price })}
  >
    {icon}
    <h2 className="text-center text-lg font-bold tb:text-2xl">{title}</h2>
    <Button
      width="fit-content"
      className="mx-auto px-4"
      aria-controls={ARIA_JAPAN_PLANING_INFO_MODAL}
      onClick={() => onClick({ title, description, icon, price })}
      variant={isDark ? ButtonVariants.SECONDARY : ButtonVariants.PRIMARY}
    >
      לפרטים נוספים
    </Button>
  </div>
);
