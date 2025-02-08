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
      className="shadow-dropdown fixed right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 animate-[fadeIn_0.3s_ease-in_forwards] overflow-hidden rounded-xl bg-white focus:outline-none"
    >
      <div ref={contentRef} className="max-h-[90vh] overflow-y-auto">
        {children}
      </div>
    </dialog>
  );
};
