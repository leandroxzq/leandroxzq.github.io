'use client'

import Nav from '@/components/Nav'

export default function Blog() {
  return (
    <main className="flex min-h-screen select-none pt-3 md:pt-7">
      <Nav showBackButton showPathname></Nav>
      <div className="w-10/12"></div>
    </main>
  )
}
