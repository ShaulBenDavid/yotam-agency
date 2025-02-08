'use client';

import { useEffect } from 'react';

interface KlookWidgetProps {
  cid: number;
}

export const KlookWidget = ({ cid }: KlookWidgetProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://affiliate.klook.com/widget/fetch-iframe-init.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-fit w-full flex-shrink-0">
      <ins
        className="klk-aff-widget"
        data-adid="995372"
        data-lang=""
        data-currency=""
        data-cardH="126"
        data-padding="92"
        data-lgH="470"
        data-edgeValue="655"
        data-cid={cid}
        data-tid="21"
        data-amount="6"
        data-prod="dynamic_widget"
      >
        {/* <a href="//www.klook.com/">Klook.com</a> */}
      </ins>
    </div>
  );
};
