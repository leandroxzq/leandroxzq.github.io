'use client'

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
  excludeCurrentLink?: boolean
  showPathname?: boolean
}

export default function Nav({
  showBackButton = false,
  excludeCurrentLink = false,
  showPathname = false,
}: NavProps) {
  const pathname = usePathname()
  const { content } = useLanguage()

  const navItems = [
    { label: content.nav.about, href: '/about' },
    { label: content.nav.projects, href: '/projects' },
    { label: 'Blog', href: '/blog' },
  ]

  const isindex = pathname === '/'

  return (
    <nav
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
        .filter((item) => !excludeCurrentLink || item.href !== pathname)
        .map(({ label, href }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="w-full"
          >
            <Link legacyBehavior href={href} className="min-w-full">
              {href === '/blog' ? (
                <div
                  className={`center cursor-not-allowed gap-2 rounded-md border-2 border-gray-400 py-2 text-gray-400 opacity-50 md:p-3 ${isindex ? 'text-sm' : 'text-[8px] md:text-xs'}`}
                  onClick={(e) => e.preventDefault()}
                >
                  {label}
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <IconCodeCircle2Filled
                      className={`h-2 w-2 md:h-4 md:w-4 ${isindex && 'h-4 w-4'}`}
                    />
                  </motion.div>
                </div>
              ) : (
                <span
                  className={`center bg-gradient-light w-full cursor-pointer rounded-md border-2 border-yellow-300 py-2 text-center hover:text-black md:p-3 ${isindex ? 'text-sm' : 'text-[8px] md:text-xs'}`}
                >
                  {label}
                </span>
              )}
            </Link>
          </motion.div>
        ))}
    </nav>
  )
}
