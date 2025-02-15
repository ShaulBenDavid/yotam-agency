'use client';

import React, { useCallback, useRef, useState } from 'react';
import { FcPlanner, FcSelfie } from 'react-icons/fc';
import { Modal } from '@/components/Modal';
import { PlanCard } from '../PlanCard';
import type { PlanCardProps } from '../PlanCard/PlanCard';
import { CgCloseO } from 'react-icons/cg';
import { ButtonLink } from '@/components/ButtonLink';
import { Routes } from '@/routes';

export const ARIA_JAPAN_PLANING_INFO_MODAL = 'japan-planing-info-modal';

export const PlaningInfo = (): JSX.Element => {
  const japanModalRef = useRef<HTMLDialogElement>(null);
  const [japanModalData, setJapanModalData] = useState<
    undefined | Omit<PlanCardProps, 'onClick' | 'isDark'>
  >();

  const onCloseJapan = useCallback(() => {
    japanModalRef.current?.close();
  }, [japanModalRef]);

  const onShowJapan = useCallback(
    (data: Omit<PlanCardProps, 'onClick' | 'isDark'>) => {
      japanModalRef.current?.showModal();
      setJapanModalData(data);
    },
    [japanModalRef, setJapanModalData]
  );

  return (
    <section className="flex w-full flex-col gap-4 tb:flex-row">
      <PlanCard
        title="פגישת ייעוץ"
        description="פגישת הייעוץ תתקיים בזום (60 דקות לפחות), ובמהלכה אענה לכם על כל השאלות החשובות לתכנון הטיול. נדבר על האזורים הגיאוגרפיים השונים, על התרבות המקומית, ואיך לבנות מסלול חכם שיחסוך לכם זמן וכסף. ניגע באטרקציות המרכזיות וגם בפנינות נסתרות, נדון על מקומות לינה, תחבורה והתנהלות יומיומית – כך שתצאו מהפגישה עם תוכנית ברורה והמון טיפים שיעשירו את החוויה שלכם."
        icon={<FcSelfie size={50} aria-hidden />}
        isDark
        onClick={onShowJapan}
        price={
          <span aria-label="price">
            <strong>מחיר -</strong> {300} ש״ח
          </span>
        }
      />
      <PlanCard
        title="תכנון מסלול אישי"
        description="תכנון מסלול בהתאמה אישית יהפוך את הטיול שלכם למדויק, נוח ומלא בחוויות בלתי נשכחות. אבנה עבורכם מסלול שמתאים בדיוק להעדפות שלכם – בין אם אתם מחפשים קולינריה משובחת, טבע עוצר נשימה, תרבות מקומית או חוויות מיוחדות. נתחשב בקצב שלכם, בתקציב, בתחבורה ובכל פרט קטן שיהפוך את הטיול לחלק ומהנה. בנוסף, תוכלו ליהנות מסגירה מראש של מלונות ואטרקציות במחירים בלעדיים מספקים מקומיים, לצד המלצות סודיות וטיפים פנימיים שלא תמצאו במדריכים הרגילים – כך שתוכלו לטייל בראש שקט וליהנות מכל רגע."
        icon={<FcPlanner size={50} aria-hidden />}
        isDark={false}
        onClick={onShowJapan}
        price={
          <span aria-label="price">
            <strong>החל -</strong> {800} ש״ח
          </span>
        }
      />
      <Modal
        ref={japanModalRef}
        closeModal={onCloseJapan}
        id={ARIA_JAPAN_PLANING_INFO_MODAL}
      >
        {japanModalData ? (
          <div className="relative flex w-[90vw] max-w-[700px] flex-col rounded-md p-2 shadow-card">
            <button
              aria-label="close modal"
              onClick={onCloseJapan}
              className="absolute right-2 top-2 z-10 rounded-full bg-primary-950 p-1"
            >
              <CgCloseO aria-hidden size={24} color="white" />
            </button>
            <div className="flex flex-col items-center gap-2 p-2">
              {japanModalData.icon}
              <h2 className="w-full pb-1 text-center text-base font-bold capitalize tb:text-xl">
                {japanModalData.title}
              </h2>
              <p className="text-base font-medium tb:text-lg">
                {japanModalData.description}
              </p>

              {japanModalData.price}
            </div>
            <ButtonLink href={Routes.CONTACT_US}>ליצירת קשר</ButtonLink>
          </div>
        ) : null}
      </Modal>
    </section>
  );
};
