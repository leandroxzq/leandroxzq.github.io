import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

import Hero from '@/components/Hero'
import { LanguageProvider } from '@/context/LanguageContext'

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import './globals.css'

const UbuntuText = Ubuntu({
  subsets: ['latin'],
  weight: '700',
})

export const metadata: Metadata = {
  title: 'leandroxzq',
  description: 'personal portfolio page',
  icons: {
    icon: ['favicon.ico'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${UbuntuText.className} select-text antialiased`}>
        <MantineProvider>
          <LanguageProvider>
            <Hero>{children}</Hero>
          </LanguageProvider>
        </MantineProvider>
      </body>
    </html>
  )
}
