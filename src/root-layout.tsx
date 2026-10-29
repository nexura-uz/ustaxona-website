import { Geist } from 'next/font/google'
import type { ReactNode } from 'react'
import type { Lang } from '@/content'
import './app/globals.css'

const geist = Geist({ variable: '--font-geist', subsets: ['latin', 'latin-ext', 'cyrillic'] })

// both languages have their own root layout, so each page carries its own <html lang>
export function RootLayout({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={`${geist.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
