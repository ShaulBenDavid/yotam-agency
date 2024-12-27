'use client';

import { useLayoutEffect, useState, type RefObject } from 'react';

const GAP_TO_SHOW_BUTTON = 20;

export const useShowsButtons = (
  containerRef: RefObject<HTMLUListElement | null>
) => {
  const [showsButtons, setShowsButtons] = useState<
    Record<'left' | 'right', boolean>
  >({
    left: false,
    right: false,
  });

  useLayoutEffect(() => {
    if (!containerRef || !containerRef.current) {
      return;
    }
    const currentRef = containerRef.current;
    const onScroll = () => {
      const scrollLeft = currentRef.scrollLeft * -1;
      const isLeftShowing =
        scrollLeft + currentRef.clientWidth <
        currentRef.scrollWidth - GAP_TO_SHOW_BUTTON;
      const isRightShowing = scrollLeft > GAP_TO_SHOW_BUTTON;

      setShowsButtons({
        left: isLeftShowing,
        right: isRightShowing,
      });
    };

    onScroll();
    currentRef.addEventListener('scroll', onScroll);
    // eslint-disable-next-line consistent-return
    return () => {
      currentRef.removeEventListener('scroll', onScroll);
    };
  }, [containerRef]);

  return showsButtons;
};
