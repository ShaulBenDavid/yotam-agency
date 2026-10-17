'use client';

import React, { useCallback, useRef, useState } from 'react';
import { Modal } from '@/components/Modal';
import { ModalCloseButton } from '@/components/ModalCloseButton';
import { Section } from '@/components/Section';
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
    <Section
      tone="tint"
      width="content"
      innerClassName="grid grid-cols-1 gap-5 tb:grid-cols-2 tb:gap-6"
    >
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
          <div className="relative flex w-full flex-col gap-5 p-6 pt-8 tb:w-[min(90vw,560px)] tb:p-9">
            <ModalCloseButton onClose={onCloseJapan} />
            <div className="flex flex-col items-center gap-3">
              {japanModalData.icon}
              <h2 className="w-full text-center text-xl font-extrabold capitalize tb:text-2xl">
                {japanModalData.title}
              </h2>
            </div>
            <ul className="flex flex-col gap-2.5">
              {japanModalData.description.map((item, index) => (
                <li
                  key={index}
                  className="text-[15px] leading-relaxed text-ink-soft tb:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
            <strong className="rounded-card bg-tint px-4 py-3 text-center text-lg font-extrabold text-primary-950">
              {japanModalData.price}
            </strong>
            <ButtonLink href={`/${Routes.CONTACT_US}`} className="w-full">
              ליצירת קשר
            </ButtonLink>
          </div>
        ) : null}
      </Modal>
    </Section>
  );
};
