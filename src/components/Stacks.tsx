'use client'

import RotatingLines from '@/components/RotatingLines'

import { useRef } from 'react'

import '@mantine/carousel/styles.css'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel } from '@mantine/carousel'
import { Tooltip } from '@mantine/core'

import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'

import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiJest,
  SiBootstrap,
  SiSass,
  SiMui,
  SiMysql,
} from 'react-icons/si'

import { BiLogoPostgresql } from 'react-icons/bi'

import { Press_Start_2P } from 'next/font/google'

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
})

const stacks = [
  { icon: <FaJs style={{ color: '#f0db4f' }} />, desc: 'JavaScript' },
  { icon: <SiTypescript style={{ color: '#3178c6' }} />, desc: 'TypeScript' },
  { icon: <FaNodeJs style={{ color: '#68a063' }} />, desc: 'Node.js' },
  { icon: <FaHtml5 style={{ color: '#e34c26' }} />, desc: 'HTML5' },
  { icon: <FaCss3Alt style={{ color: '#264de4' }} />, desc: 'CSS3' },
  { icon: <SiNextdotjs style={{ color: '#ffffff' }} />, desc: 'Next.js' },
  { icon: <FaReact style={{ color: '#61DBFB' }} />, desc: 'React' },
  { icon: <SiJest style={{ color: '#99425b' }} />, desc: 'Jest' },
  { icon: <SiBootstrap style={{ color: '#7952B3' }} />, desc: 'Bootstrap' },
  {
    icon: <SiTailwindcss style={{ color: '#38bdf8' }} />,
    desc: 'TailwindCSS',
  },
  { icon: <SiSass style={{ color: '#cd6799' }} />, desc: 'Sass' },
  { icon: <SiMui style={{ color: '#007FFF' }} />, desc: 'MaterialUI' },
  {
    icon: <BiLogoPostgresql style={{ color: '#336791' }} />,
    desc: 'PostgreSQL',
  },
  { icon: <SiMysql style={{ color: '#00758F' }} />, desc: 'MySQL' },
  { icon: <SiMongodb style={{ color: '#4DB33D' }} />, desc: 'MongoDB' },
  { icon: <FaGitAlt style={{ color: '#f1502f' }} />, desc: 'Git' },
]

export default function Stacks() {
  const autoplay = useRef(Autoplay({ delay: 500 }))

  return (
    <div className="relative mb-4 w-full rounded-lg">
      <Carousel
        slideSize="25%"
        emblaOptions={{ loop: true, align: 'start' }}
        withControls={false}
        withIndicators={false}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
      >
        {stacks.map((stack, index) => (
          <Carousel.Slide key={index}>
            <Tooltip
              arrowOffset={10}
              arrowSize={8}
              offset={{ mainAxis: 0, crossAxis: 0 }}
              withArrow
              label={
                <span className={`font-bold ${pressStart2P.className} text-[10px]`}>
                  {stack.desc}
                </span>
              }
              styles={{
                tooltip: {
                  background: 'linear-gradient(124deg, #ffffff 0%, #afa442 49%, #ffe600 100%)',
                  color: '#000',
                  borderRadius: 8,
                  padding: '8px 12px',
                },
                arrow: {
                  filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.2))',
                  background: 'inherit',
                  backgroundClip: 'padding-box',
                },
              }}
            >
              <div className="center box-shad cursor-grab py-6 text-4xl transition-transform duration-500 hover:scale-125">
                {stack.icon}
              </div>
            </Tooltip>
          </Carousel.Slide>
        ))}
      </Carousel>
      <RotatingLines />
    </div>
  )
}
