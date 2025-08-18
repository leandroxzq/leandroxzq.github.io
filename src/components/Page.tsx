import Nav from '@/components/Nav'

export default function Page({ children }) {
  return (
    <main className="flex min-h-dvh flex-col items-center lg:flex-row lg:items-start">
      <Nav showBackButton excludeCurrentLink showPathname></Nav>
      <div
        className={`custom-scroll mt-3 max-h-[90dvh] w-full max-w-3xl space-y-8 overflow-auto rounded-md sm:w-10/12 sm:px-6 md:max-h-[95dvh] lg:px-8`}
      >
        {children}
      </div>
    </main>
  )
}
