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
      className={`${pressStart2P.className} flex max-w-3xl flex-row items-center gap-4 sm:flex-col ${
        isindex ? 'w-full flex-col' : 'w-full flex-row p-2 pt-4 lg:w-2/12'
      }`}
    >
      {showBackButton && showPathname && (
        <div className="flex w-full items-center justify-between gap-2 sm:gap-4">
          <Link href="/" aria-label="Voltar para a home" className="hover:text-yellow-300">
            <IconArrowLeft size={26} />
          </Link>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs"
          >
            {pathname}
          </motion.p>
        </div>
      )}

      {navItems
        .filter((item) => !excludeCurrentLink || item.href !== pathname)
        .map(({ label, href }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
            className="w-full"
          >
            <Link legacyBehavior href={href} className={`min-w-full`}>
              {href === '/blog' ? (
                <div
                  className="center cursor-not-allowed gap-2 rounded-md border-2 border-gray-400 p-2 text-xs text-gray-400 opacity-50 md:p-3 md:text-sm"
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
                    <IconCodeCircle2Filled size={18} />
                  </motion.div>
                </div>
              ) : (
                <span className="center bg-gradient-light w-full cursor-pointer rounded-md border-2 border-yellow-300 p-2 text-center text-xs hover:text-black md:p-3 md:text-sm">
                  {label}
                </span>
              )}
            </Link>
          </motion.div>
        ))}
    </nav>
  )
}
