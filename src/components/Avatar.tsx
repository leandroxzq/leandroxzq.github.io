'use client'

import { motion } from 'framer-motion'
import { Press_Start_2P, Ubuntu } from 'next/font/google'

import Image from 'next/image'
import AvatarImg from '@/assets/images/avatar.webp'

import { useLanguage } from '@/context/LanguageContext'

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
})

const UbuntuText = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Avatar() {
  const { content } = useLanguage()
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="box-shad relative h-52 w-52 overflow-hidden rounded-full border-4 border-white md:h-64 md:w-64"
      >
        <Image
          src={AvatarImg}
          alt="Avatar generated in Copilot"
          draggable="false"
          width={320}
          height={320}
          priority
        />
      </motion.div>
      <motion.h2
        className={`${UbuntuText.className} gradient-text text-3xl font-bold tracking-wider md:text-4xl`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Leandroxzq
      </motion.h2>
      <motion.p
        className={`${pressStart2P.className} gradient-text max-w-72 text-center`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {content.home.role}
      </motion.p>
    </>
  )
}
