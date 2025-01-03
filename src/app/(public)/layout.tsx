import type { Metadata } from 'next';
import '@/styles/global.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AppProviders } from '@/providers';
import { defaultMetadata } from '@/metadata';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he">
      <body className="antialiased">
        <AppProviders>
          <div className="text-primary-950 flex min-h-screen flex-col items-center overflow-x-clip">
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
