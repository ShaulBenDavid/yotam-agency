import React from 'react';
import { IoClose } from 'react-icons/io5';

interface ModalCloseButtonProps {
  onClose: () => void;
}

export const ModalCloseButton = ({
  onClose,
}: ModalCloseButtonProps): JSX.Element => (
  <button
    type="button"
    aria-label="close modal"
    onClick={onClose}
    className="absolute left-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-ink shadow-lift transition-colors hover:bg-white hover:text-primary-950"
  >
    <IoClose aria-hidden size={22} />
  </button>
);
