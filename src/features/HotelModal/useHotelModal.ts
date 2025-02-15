'use client';

import { Hotel } from '@/sanity/types';
import { useCallback, useRef, useState } from 'react';

export const useHotelModal = () => {
  const hotelModalRef = useRef<HTMLDialogElement>(null);
  const [hotelModalData, setHotelModalData] = useState<undefined | Hotel>();

  const onClose = useCallback(() => {
    hotelModalRef.current?.close();
  }, [hotelModalRef]);

  const onShow = useCallback(
    (data: Hotel) => {
      setHotelModalData(data);
      hotelModalRef.current?.showModal();
    },
    [hotelModalRef, setHotelModalData]
  );

  return {
    hotelModalRef,
    hotelModalData: hotelModalData,
    onClose,
    onShow,
  };
};
