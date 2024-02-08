import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <body className="bg-gray-200 text-font-color font-custom">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
