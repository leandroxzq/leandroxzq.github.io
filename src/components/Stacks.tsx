'use client'

import { useRef } from 'react'

import Image from 'next/image'
import { Press_Start_2P } from 'next/font/google'

import '@mantine/carousel/styles.css'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel } from '@mantine/carousel'
import { Tooltip } from '@mantine/core'

import RotatingLines from '@/components/RotatingLines'

import JavaScript from '@/assets/images/tech/JavaScript.png'
import Typescript from '@/assets/images/tech/TypeScript.png'
import Nodejs from '@/assets/images/tech/Node.js.png'
import Python from '@/assets/images/tech/Python.png'
import Html5 from '@/assets/images/tech/HTML5.png'
import Css3 from '@/assets/images/tech/CSS3.png'
import Nextjs from '@/assets/images/tech/Next.js.png'
import Reactjs from '@/assets/images/tech/React.png'
import Jest from '@/assets/images/tech/Jest.png'
import Redis from '@/assets/images/tech/Redis.png'
import Bootstrap from '@/assets/images/tech/Bootstrap.png'
import TailwindCSS from '@/assets/images/tech/TailwindCSS.png'
import Sass from '@/assets/images/tech/Sass.png'
import MaterialUI from '@/assets/images/tech/MaterialUI.png'
import PostgresSQL from '@/assets/images/tech/PostgresSQL.png'
import MySQL from '@/assets/images/tech/MySQL.png'
import MongoDB from '@/assets/images/tech/MongoDB.png'
import Git from '@/assets/images/tech/Git.png'

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
})

const stacks = [
  { icon: JavaScript, desc: 'JavaScript' },
  { icon: Typescript, desc: 'TypeScript' },
  { icon: Nodejs, desc: 'Node.js' },
  { icon: Python, desc: 'Python' },
  { icon: Html5, desc: 'HTML5' },
  { icon: Css3, desc: 'CSS3' },
  { icon: Nextjs, desc: 'Next.js' },
  { icon: Reactjs, desc: 'React' },
  { icon: Jest, desc: 'Jest' },
  { icon: Redis, desc: 'Redis' },
  { icon: Bootstrap, desc: 'Bootstrap' },
  { icon: TailwindCSS, desc: 'TailwindCSS' },
  { icon: Sass, desc: 'Sass' },
  { icon: MaterialUI, desc: 'MaterialUI' },
  { icon: PostgresSQL, desc: 'PostgreSQL' },
  { icon: MySQL, desc: 'MySQL' },
  { icon: MongoDB, desc: 'MongoDB' },
  { icon: Git, desc: 'Git' },
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
              <div className="center box-shad cursor-grab py-6 text-4xl transition-transform duration-300 hover:scale-125">
                <Image
                  alt={`Logo da tecnologia ${stack.desc}`}
                  draggable="false"
                  width={36}
                  height={36}
                  src={stack.icon}
                  className="grayscale-[0.2] hover:grayscale-0 hover:saturate-[1.4]"
                />
              </div>
            </Tooltip>
          </Carousel.Slide>
        ))}
      </Carousel>
      <RotatingLines />
    </div>
  )
}
