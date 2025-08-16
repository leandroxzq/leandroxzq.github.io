'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'
import { Press_Start_2P, Ubuntu } from 'next/font/google'

import Nav from '@/components/Nav'
import Stacks from '@/components/Stacks'
import Avatar from '@/assets/images/avatar.webp'
import ButtonLanguage from '@/components/ButtonLanguague'
import { useLanguage } from '@/context/LanguageContext'

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
})

const UbuntuText = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Home() {
  const { content } = useLanguage()

  return (
    <article className="center min-h-dvh select-none gap-6">
      <div className="flex flex-col gap-4 md:flex-row">
        <section
          className={`order-2 flex max-w-80 select-text flex-col justify-evenly gap-4 md:order-1 ${pressStart2P.className}`}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {content.stacks.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Stacks />
            <Nav />
          </motion.div>
          <motion.div
            className={'absolute right-4 top-4 mt-4 w-20 md:static md:mt-0 md:w-36'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ButtonLanguage />
          </motion.div>
        </section>
        <section className="order-1 flex flex-col items-center gap-2 md:order-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="box-shad relative h-52 w-52 overflow-hidden rounded-full border-4 border-white md:h-64 md:w-64"
          >
            <Image
              src={Avatar}
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
        </section>
      </div>
    </article>
  )
}
