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
    <main className="flex min-h-dvh flex-col items-center lg:flex-row lg:items-start">
      <Nav showBackButton excludeCurrentLink showPathname></Nav>
      <div
        className={`mt-3 max-h-[90dvh] w-full max-w-3xl space-y-8 rounded-md sm:w-10/12 sm:px-6 md:max-h-[95dvh] lg:px-8 ${isProjects ? 'overflow-hidden px-2' : 'custom-scroll overflow-auto'}`}
      >
        {children}
      </div>
    </main>
  )
}
