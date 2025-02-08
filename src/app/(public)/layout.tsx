import type { Metadata, Viewport } from 'next';
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
