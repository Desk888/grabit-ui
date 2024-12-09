import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Navbar from '../components/layout/Navbar';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Grabit | Old Items, New Homes',
  description: 'Join the eco-friendly movement by giving and receiving free items. Our platform makes recycling easy, connecting people to share, reuse, and reduce waste—one free item at a time.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}