import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import Hero from '@/components/Hero'
import { LanguageProvider } from '@/context/LanguageContext'

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import './globals.css'

const RobotoText = Roboto({
  subsets: ['latin'],
  weight: '400',
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
      <body className={`${RobotoText.className} select-text font-normal antialiased`}>
        <MantineProvider>
          <LanguageProvider>
            <Hero>{children}</Hero>
          </LanguageProvider>
        </MantineProvider>
      </body>
    </html>
  )
}
