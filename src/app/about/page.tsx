'use client'

import Page from '@/components/Page'
import ContainerMotion from '@/components/ContainerMotion'

import { Press_Start_2P } from 'next/font/google'
import { IconBrandGithub, IconBrandLinkedin, IconMailFast } from '@tabler/icons-react'

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
  return (
    <Page>
      <ContainerMotion>
        <h3 className={`text-xl font-bold text-white mb-4 ${pressStart2P.className}`}>About Me</h3>
        <p className="leading-relaxed">
          My name is Leandro, and I am currently studying Systems Analysis and Development at IFPE.
          I am dedicated, focused on continuous learning, with the goal of working as a fullstack
          professional.
        </p>
      </ContainerMotion>

      <ContainerMotion delay={0.3}>
        <h3 className={`text-xl font-bold text-white mb-4 ${pressStart2P.className}`}>Contact</h3>

        {Links.map((link, index) =>
          link.href ? (
            <a
              key={index}
              className="flex w-fit p-2 gap-2 font-semibold rounded-md text-black bg-gray-300 hover:text-blue-600 transition-colors mb-3"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
              <span>{link.span}</span>
            </a>
          ) : (
            <div
              key={index}
              className="flex w-fit p-2 gap-2 font-semibold rounded-md text-black bg-gray-300 hover:text-blue-600 transition-colors mb-3"
            >
              {link.icon}

              <span>{link.span}</span>
            </div>
          ),
        )}
      </ContainerMotion>
    </Page>
  )
}
