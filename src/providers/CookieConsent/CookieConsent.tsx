'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ConsentModal, {
  getCookieConsentValue,
  resetCookieConsentValue,
} from 'react-cookie-consent';
import { Button, ButtonVariants } from '@/components/Button';

const consentButtonClasses = {
  accept: 'bg-white text-primary-950 hover:enabled:bg-white/90',
  decline:
    'bg-transparent text-white underline underline-offset-2 hover:enabled:text-white/70',
};

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
      enableDeclineButton
      buttonText="מאשר/ה"
      declineButtonText="דוחה"
      style={{ borderRadius: '12px 12px 0 0' }}
      containerClasses="bg-primary-950 text-white"
      onAccept={() => {
        updateConsent('granted');
        router.refresh();
      }}
      onDecline={() => updateConsent('denied')}
      buttonWrapperClasses="flex flex-row gap-3 px-2 pb-2 max-w-[600px]"
      overlay
      ButtonComponent={(
        props: React.ButtonHTMLAttributes<HTMLButtonElement> & { id?: string }
      ) => {
        const isDecline = props.id === 'rcc-decline-button';
        return (
          <Button
            {...props}
            variant={ButtonVariants.LINK}
            className={
              isDecline
                ? consentButtonClasses.decline
                : consentButtonClasses.accept
            }
          />
        );
      }}
    >
      🍪 אתר זה משתמש בעוגיות (Cookies) כדי לשפר את חוויית הגלישה ולמדוד ביצועי
      פרסום. ניתן לקרוא עוד במדיניות הפרטיות שלנו.
    </ConsentModal>
  );
};
