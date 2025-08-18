'use client'

import Page from '@/components/Page'
import ContainerMotion from '@/components/ContainerMotion'
import { useLanguage } from '@/context/LanguageContext'

import { Press_Start_2P } from 'next/font/google'
import { IconBrandGithub, IconBrandLinkedin, IconMailFast } from '@tabler/icons-react'
import { Tooltip } from '@mantine/core'
import { useState } from 'react'

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
})

const Links = [
  {
    icon: <IconBrandGithub size={25} />,
    href: 'https://github.com/leandroxzq',
    span: 'leandroxzq',
  },
  {
    icon: <IconBrandLinkedin size={25} />,
    href: 'https://www.linkedin.com/in/leandrosilvaz/',
    span: 'leandrosilvaz',
  },
  {
    icon: <IconMailFast size={25} />,
    href: '',
    span: 'leandrosilvazw25@gmail.com',
  },
]

export default function About() {
  const { content } = useLanguage()

  const [openedIndex, setOpenedIndex] = useState<number | null>(null)

  return (
    <Page>
      <ContainerMotion padding="4" delay={0.1}>
        <h3 className={`mb-4 text-lg font-bold text-white md:text-xl ${pressStart2P.className}`}>
          {content.about.title}
        </h3>
        <p className="leading-relaxed">{content.about.description}</p>
      </ContainerMotion>

      <ContainerMotion padding="4" delay={0.3}>
        <h3 className={`mb-4 text-lg font-bold text-white md:text-xl ${pressStart2P.className}`}>
          {content.about.education.title}
        </h3>

        {content.about.education.degrees.map((degree, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-md font-semibold underline">{degree.school}</h4>
            <p className="text-sm text-gray-300">
              {degree.level}, {degree.course}
            </p>
            <p className="text-sm text-gray-400">{degree.period}</p>
            {degree.description && (
              <p className="text-ms mt-2 text-gray-300">{degree.description}</p>
            )}
          </div>
        ))}
      </ContainerMotion>

      <ContainerMotion padding="4" delay={0.5}>
        <h3 className={`text-md mb-4 font-bold text-white md:text-lg ${pressStart2P.className}`}>
          {content.about.contact}
        </h3>
        {Links.map((link, index) => (
          <div
            key={index}
            className="bg-gradient-light mb-3 flex w-fit flex-row gap-2 rounded-md bg-gray-300 p-2 font-semibold text-black hover:text-blue-600"
          >
            <Tooltip
              opened={openedIndex === index}
              transitionProps={{ transition: 'slide-up', duration: 300 }}
              arrowOffset={10}
              arrowSize={8}
              offset={{ mainAxis: 0, crossAxis: 0 }}
              withArrow
              label={
                <span className={`font-bold ${pressStart2P.className} text-[10px]`}>
                  {link.href ? content.about.buttonRedirect : content.about.buttonClipboard}
                </span>
              }
              styles={{
                tooltip: {
                  background: 'linear-gradient(124deg, #ffffff 0%, #afa442 49%, #ffe600 100%)',
                  color: '#000',
                  marginBottom: 8,
                  padding: '8px 12px',
                },
                arrow: {
                  filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.2))',
                  background: 'inherit',
                  backgroundClip: 'padding-box',
                },
              }}
            >
              <button
                type="button"
                className="flex w-fit gap-2"
                onClick={() => (
                  link.href
                    ? window.open(link.href, '_blank')
                    : navigator.clipboard.writeText(link.span),
                  setOpenedIndex(index),
                  setTimeout(() => setOpenedIndex(null), 2000)
                )}
                rel="noopener noreferrer"
              >
                {link.icon}
                <span>{link.span}</span>
              </button>
            </Tooltip>
          </div>
        ))}
      </ContainerMotion>
    </Page>
  )
}
