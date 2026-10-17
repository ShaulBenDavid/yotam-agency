'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ConsentModal, {
  getCookieConsentValue,
  resetCookieConsentValue,
} from 'react-cookie-consent';
import { Button, ButtonVariants } from '@/components/Button';

const DECLINE_BUTTON_ID = 'rcc-decline-button';

const updateConsent = (state: 'granted' | 'denied'): void => {
  if (window.gtag) {
    window.gtag('consent', 'update', {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state,
    });
  }
};

type ConsentButtonProps = {
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const ConsentButton = ({
  id,
  onClick,
  children,
}: ConsentButtonProps): JSX.Element => {
  const isDecline = id === DECLINE_BUTTON_ID;

  return (
    <Button
      type="button"
      onClick={onClick}
      variant={isDecline ? ButtonVariants.SECONDARY : ButtonVariants.PRIMARY}
      className={
        isDecline
          ? 'text-sm font-medium sm:w-auto sm:min-w-[124px]'
          : 'sm:flex-1'
      }
    >
      {children}
    </Button>
  );
};

export const CookieConsent = (): JSX.Element | null => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (getCookieConsentValue() === 'false') {
      resetCookieConsentValue();
    } else if (getCookieConsentValue() === 'true') {
      updateConsent('granted');
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ConsentModal
      disableStyles
      enableDeclineButton
      overlay
      expires={180}
      buttonText="אישור הכול"
      declineButtonText="דחיית הכול"
      ariaAcceptLabel="אישור כל העוגיות"
      ariaDeclineLabel="דחיית עוגיות שאינן חיוניות"
      overlayClasses="fixed inset-0 z-[999] bg-primary-950/40 backdrop-blur-[2px]"
      containerClasses="fixed inset-x-0 bottom-0 z-[1000] mx-auto flex max-w-[520px] flex-col gap-1 rounded-t-xl border border-line bg-white p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] shadow-sheet motion-safe:animate-[enterInSideTabs_0.25s_ease-out] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:max-w-[400px] sm:rounded-card sm:pb-5 sm:shadow-lift"
      contentClasses="flex items-start gap-2.5 text-sm leading-6 text-ink-soft"
      buttonWrapperClasses="mt-4 flex flex-col gap-2.5 sm:flex-row sm:items-center"
      onAccept={() => {
        updateConsent('granted');
        router.refresh();
      }}
      onDecline={() => updateConsent('denied')}
      ButtonComponent={ConsentButton}
    >
      <span className="shrink-0 text-xl leading-6" aria-hidden>
        🍪
      </span>
      <p>
        האתר משתמש בעוגיות כדי לשפר את חוויית הגלישה ולמדוד ביצועי פרסום.{' '}
        <Link
          href="/privacy-policy"
          className="font-semibold text-primary-950 underline underline-offset-2 hover:text-accent-strong"
        >
          מדיניות הפרטיות
        </Link>
      </p>
    </ConsentModal>
  );
};
