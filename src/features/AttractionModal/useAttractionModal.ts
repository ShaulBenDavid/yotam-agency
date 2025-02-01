'use client';

import { useCallback, useRef, useState } from 'react';
import { Attraction } from '../../sanity/types/attraction.types';

export const useAttractionModal = () => {
  const attractionModalRef = useRef<HTMLDialogElement>(null);
  const [attractionModalData, setAttractionModalData] = useState<
    undefined | Attraction
  >();

  const onCloseAttraction = useCallback(() => {
    attractionModalRef.current?.close();
  }, [attractionModalRef]);

  const onShowAttraction = useCallback(
    (data: Attraction) => {
      attractionModalRef.current?.showModal();
      setAttractionModalData(data);
    },
    [attractionModalRef]
  );

  return {
    attractionModalRef,
    attractionModalData,
    onCloseAttraction,
    onShowAttraction,
  };
};
