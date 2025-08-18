import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import Hero from '@/components/Hero'
import Providers from '@/app/providers'

import '@mantine/core/styles.css'
import './globals.css'

const RobotoText = Roboto({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'leandroxzq',
  description: 'personal portfolio page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${RobotoText.className} select-text font-normal antialiased`}>
        <Providers>
          <Hero>{children}</Hero>
        </Providers>
      </body>
    </html>
  )
}
