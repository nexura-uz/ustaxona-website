import type { Metadata } from 'next'
import { CONTENT } from '@/content'
import { RootLayout } from '@/root-layout'

export const metadata: Metadata = {
  metadataBase: new URL('https://ustaxona.uz'),
  title: CONTENT.ru.title,
  description: CONTENT.ru.description,
  alternates: { canonical: '/ru', languages: { uz: '/', ru: '/ru' } },
}

export default function Layout({ children }: LayoutProps<'/'>) {
  return <RootLayout lang="ru">{children}</RootLayout>
}
