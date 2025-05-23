'use client';

import React, { useCallback, useRef, useState } from 'react';
import { CgCloseO } from 'react-icons/cg';
import { Modal } from '@/components/Modal';
import { ButtonLink } from '@/components/ButtonLink';
import { Routes } from '@/routes';
import { PlanCard } from '../PlanCard';
import { PlanCardConfig, planCardConfig } from './PlaningInfo.config';

export const ARIA_JAPAN_PLANING_INFO_MODAL = 'japan-planing-info-modal';

export const PlaningInfo = (): JSX.Element => {
  const japanModalRef = useRef<HTMLDialogElement>(null);
  const [japanModalData, setJapanModalData] = useState<
    undefined | PlanCardConfig
  >();

  const onCloseJapan = useCallback(() => {
    japanModalRef.current?.close();
  }, [japanModalRef]);

  const onShowJapan = useCallback(
    (data: PlanCardConfig) => {
      japanModalRef.current?.showModal();
      setJapanModalData(data);
    },
    [japanModalRef, setJapanModalData]
  );

  return (
    <section className="flex w-full flex-col gap-4 tb:flex-row">
      {planCardConfig.map((planCard) => (
        <PlanCard
          key={planCard.title}
          title={planCard.title}
          icon={planCard.icon}
          isDark={planCard.isDark}
          onClick={() => onShowJapan(planCard)}
        />
      ))}
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
            <div className="flex flex-col items-center gap-3 p-2">
              {japanModalData.icon}
              <h2 className="w-full pb-1 text-center text-base font-bold capitalize tb:text-xl">
                {japanModalData.title}
              </h2>
              <ul className="flex flex-col gap-1">
                {japanModalData.description.map((item, index) => (
                  <li key={index} className="text-base font-medium tb:text-lg">
                    {item}
                  </li>
                ))}
              </ul>

              <strong>{japanModalData.price}</strong>
            </div>
            <ButtonLink href={Routes.CONTACT_US}>ליצירת קשר</ButtonLink>
          </div>
        ) : null}
      </Modal>
    </section>
  );
};
