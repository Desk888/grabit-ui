import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/layout/navbar/Navbar';
import Footer from '../components/layout/navbar/Footer';
import { SearchProvider } from '../components/layout/home/SearchContext';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <SearchProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}