'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import en from '@/lang/en'
import pt from '@/lang/pt'

interface LanguageContextType {
  language: string
  changeLanguage: (lang: string) => void
  content: typeof en | typeof pt
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState<'en' | 'pt'>('en')
  const [content, setContent] = useState(en)

  const changeLanguage = (lang: string) => {
    const langTyped = lang as 'en' | 'pt'
    setLanguage(langTyped)
    setContent(langTyped === 'pt' ? pt : en)
    localStorage.setItem('language', langTyped)
  }

  useEffect(() => {
    const stored = localStorage.getItem('language')
    const lang = stored === 'pt' || stored === 'en' ? stored : 'en'
    if (stored === 'pt' || stored === 'en') {
      setLanguage(stored)
      setContent(lang === 'pt' ? pt : en)
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
