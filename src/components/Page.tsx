import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import Nav from '@/components/Nav'

export default function Page({ children }) {
  const pathname = usePathname()
  const [isAbout, setIsAbout] = useState(false)

  useEffect(() => {
    setIsAbout(pathname === '/about')
  }, [pathname])

  return (
    <main className="flex flex-col lg:items-start items-center lg:flex-row gap-4 md:pt-7 pt-3 px-4 min-h-dvh">
      <Nav showBackButton excludeCurrentLink showPathname></Nav>
      <div
        className={`w-full max-w-3xl sm:px-6 lg:px-8 sm:w-10/12 space-y-8 md:max-h-[95dvh] max-h-[90dvh] rounded-md ${isAbout ? 'overflow-hidden' : ' custom-scroll overflow-auto'}`}
      >
        {children}
      </div>
    </main>
  )
}
