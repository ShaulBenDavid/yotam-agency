import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Noto_Sans_Hebrew } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AppProviders } from '@/providers';
import { defaultMetadata } from '@/metadata';
import { OrganizationJsonLd } from '@/components/JsonLd';
import theme from '@/styles/tailwind.theme';
import '@/styles/global.css';

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: theme.primary[950],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={notoSansHebrew.variable}>
      <script src="https://elfsightcdn.com/platform.js" async></script>
      {process.env.NODE_ENV === 'production' && (
        <>
          {/* Consent Mode v2 — deny everything until the user opts in via the
              cookie banner (see CookieConsent). Must run before gtag.js loads. */}
          <Script id="gtag-consent-default" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                wait_for_update: 500
              });
              gtag('set', 'ads_data_redaction', true);
              gtag('set', 'url_passthrough', true);
            `}
          </Script>
          {/* Google tag (gtag.js) — standard install, no third-party wrapper */}
          <Script
            id="gtag-js"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');
            `}
          </Script>
        </>
      )}
      <body className="antialiased">
        <OrganizationJsonLd />
        <AppProviders>
          <div className="flex min-h-screen flex-col overflow-x-clip">
            <Header />
            <main className="flex w-full flex-grow flex-col">{children}</main>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
