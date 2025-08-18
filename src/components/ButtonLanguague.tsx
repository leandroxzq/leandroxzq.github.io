'use client'

import { useState, useEffect } from 'react'

import { Select } from '@mantine/core'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function ButtonLanguage() {
  const { language, changeLanguage } = useLanguage()

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateSize = () => setScreenSize({ width: window.innerWidth, height: window.innerHeight })

    updateSize()
    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const isDesktop = screenSize.width >= 768

  return (
    <motion.div
      className={'absolute right-4 top-4 mt-4 w-20 md:static md:mt-0 md:w-36'}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Select
        classNames={{
          root: 'text-white',
          wrapper: 'bg-[#121212] border border-gray-200 rounded-md',
          input:
            'bg-[#121212] text-white border-none focus:ring-2 focus:ring-yellow-300 rounded-md',
          dropdown: 'bg-[#1a1a1a] border border-gray-200 text-white',
          option: 'bg-[#1a1a1a] text-white hover:bg-gray-700',
        }}
        value={language}
        onChange={(value) => {
          if (value) changeLanguage(value)
        }}
        data={[
          { value: 'en', label: isDesktop ? 'English' : 'en 🇺🇸' },
          { value: 'pt', label: isDesktop ? 'Português' : 'br 🇧🇷' },
        ]}
        withCheckIcon={isDesktop ? true : false}
        checkIconPosition="right"
        aria-label="Select language"
        className={'absolute right-4 top-4 w-20 md:relative md:right-0 md:top-0 md:w-36'}
      />
    </motion.div>
  )
}
