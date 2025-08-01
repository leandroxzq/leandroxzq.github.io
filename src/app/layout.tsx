'use client'

import { Ubuntu } from 'next/font/google'

import Hero from '@/components/Hero'
import { LanguageProvider } from '@/context/LanguageContext'

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import './globals.css'

const UbuntuText = Ubuntu({
  subsets: ['latin'],
  weight: '700',
})

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
