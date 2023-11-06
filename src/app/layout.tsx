import type { Metadata } from 'next';

import { GeistMono, GeistSans } from 'geist/font';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sandder TNT',
  description: 'Sandder TNT',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
