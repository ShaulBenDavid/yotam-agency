'use client';

import React, { useRef, type ForwardedRef } from 'react';
import { useOnClickOutside } from '@/hooks';

interface ModalProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  closeModal: () => void;
  ref: ForwardedRef<HTMLDialogElement>;
}

export const Modal = ({
  closeModal,
  id,
  children,
  ref,
}: ModalProps): JSX.Element => {
  const contentRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(contentRef, closeModal);

  return (
    <dialog
      onCancel={closeModal}
      ref={ref}
      id={id}
      className="fixed inset-x-0 bottom-0 top-auto m-0 max-h-none w-full max-w-none animate-[fadeIn_0.25s_ease-out_forwards] overflow-hidden rounded-t-xl bg-white p-0 text-ink shadow-sheet focus:outline-none tb:inset-x-auto tb:bottom-auto tb:right-1/2 tb:top-1/2 tb:w-auto tb:-translate-y-1/2 tb:translate-x-1/2 tb:rounded-lg tb:shadow-lift"
    >
      <div
        ref={contentRef}
        className="max-h-[88dvh] overflow-y-auto overscroll-contain pb-[env(safe-area-inset-bottom)] tb:max-h-[90vh] tb:pb-0"
      >
        {children}
      </div>
    </dialog>
  );
};
