import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AppProviders } from '@/providers';
import { defaultMetadata } from '@/metadata';
import theme from '@/styles/tailwind.theme';
import '@/styles/global.css';

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
    <html lang="he">
      <script src="https://elfsightcdn.com/platform.js" async></script>
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script id="gtag-consent-default" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied'
              });
            `}
          </Script>
          <GoogleAnalytics
            gaId={process.env.NEXT_PUBLIC_GOOGLE_ADS_ID as string}
          />
        </>
      )}
      <body className="antialiased">
        <AppProviders>
          <div className="flex min-h-screen flex-col items-center overflow-x-clip text-primary-950">
            <Header />
            <main className="flex w-[1400px] flex-grow flex-col max-lg:w-[1000px] max-md:w-full max-md:px-2">
              {children}
            </main>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
