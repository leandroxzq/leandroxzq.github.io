import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import Nav from '@/components/Nav'

export default function Page({ children }) {
  const pathname = usePathname()
  const [isProjects, setIsProjects] = useState(false)

  useEffect(() => {
    setIsProjects(pathname !== '/projects')
  }, [pathname])

  return (
    <main className="flex flex-col lg:items-start items-center lg:flex-row min-h-dvh">
      <Nav showBackButton excludeCurrentLink showPathname></Nav>
      <div
        className={`w-full max-w-3xl sm:px-6 lg:px-8 sm:w-10/12 space-y-8 md:max-h-[95dvh] max-h-[90dvh] rounded-md ${isProjects ? 'overflow-hidden px-2' : ' custom-scroll overflow-auto'}`}
      >
        {children}
      </div>
    </main>
  )
}
