import type { Metadata } from 'next';

import { GeistMono, GeistSans } from 'geist/font';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trade Sandder Boliva SRL',
  description: 'Trade Sandder Boliva SRL',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es' className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className='body'>{children}</body>
    </html>
  );
}
