import { LanguageProvider } from '@/context/LanguageContext'

import { MantineProvider } from '@mantine/core'
import React from 'react'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </MantineProvider>
  )
}
