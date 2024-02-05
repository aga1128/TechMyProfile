import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "It's Me",
  description: 'ブログ形式の自己紹介サイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className}, bg-gray-100 text-font-color`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
