'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Press_Start_2P } from 'next/font/google'
import { IconArrowLeft, IconCodeCircle2Filled } from '@tabler/icons-react'

import { useLanguage } from '@/context/LanguageContext'

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
})

interface NavProps {
  showBackButton?: boolean
  showPathname?: boolean
}

export default function Nav({ showBackButton = false, showPathname = false }: NavProps) {
  const pathname = usePathname()
  const { content } = useLanguage()

  const navItems = [
    { label: content.nav.about, href: '/about' },
    { label: content.nav.projects, href: '/projects' },
  ]

  const pathPart = useMemo(() => pathname.split('/')[1], [pathname])
  const isindex = pathPart === ''

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`${pressStart2P.className} flex max-w-3xl flex-row items-center gap-2 sm:flex-col sm:gap-3 ${
        isindex ? 'w-full flex-col' : 'mt-4 w-full flex-row px-2 lg:w-2/12'
      }`}
    >
      {showBackButton && showPathname && (
        <div className="flex w-full items-center gap-2 text-[8px] sm:gap-4 md:text-xs">
          <Link href="/" aria-label="Voltar para a home" className="hover:text-yellow-300">
            <IconArrowLeft size={26} />
          </Link>
          <div className="center gap-1">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              /
            </motion.span>
            <p>{pathname.split('/')[1]}</p>
          </div>
        </div>
      )}

      {navItems
        .filter((item) => item.href !== pathname)
        .map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`center bg-gradient-light w-full cursor-pointer rounded-md border-2 border-yellow-300 py-2 text-center hover:text-black md:p-3 ${isindex ? 'text-sm' : 'text-[8px] md:text-xs'}`}
          >
            {label}
          </Link>
        ))}
      <div
        className={`center w-full cursor-not-allowed gap-2 rounded-md border-2 border-gray-400 py-2 text-gray-400 opacity-50 md:p-3 ${isindex ? 'text-sm' : 'text-[8px] md:text-xs'}`}
        onClick={(e) => e.preventDefault()}
      >
        Blog
        <IconCodeCircle2Filled className={`h-2 w-2 md:h-4 md:w-4 ${isindex && 'h-4 w-4'}`} />
      </div>
    </motion.nav>
  )
}
