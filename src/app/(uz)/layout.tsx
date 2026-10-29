import type { Metadata } from 'next'
import { CONTENT } from '@/content'
import { RootLayout } from '@/root-layout'

export const metadata: Metadata = {
  metadataBase: new URL('https://ustaxona.uz'),
  title: CONTENT.uz.title,
  description: CONTENT.uz.description,
  alternates: { canonical: '/', languages: { uz: '/', ru: '/ru' } },
}

export default function Layout({ children }: LayoutProps<'/'>) {
  return <RootLayout lang="uz">{children}</RootLayout>
}
