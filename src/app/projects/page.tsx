'use client'

import ContainerMotion from '@/components/ContainerMotion'
import Page from '@/components/Page'
import classes from '@/styles/indicator.module.css'
import { useLanguage } from '@/context/LanguageContext'
import { projects } from '@/data/projects'

import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react'
import { Carousel } from '@mantine/carousel'
import { Image } from '@mantine/core'

import { Press_Start_2P } from 'next/font/google'

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
})

export default function Projects() {
  const { content } = useLanguage()

  const data = projects.map((project) => ({
    ...project,
    description: content.projects[project.key].description,
  }))

  console.log(data)

  return (
    <Page>
      {data.reverse().map((p) => (
        <div key={p.id} className="">
          <ContainerMotion>
            <div className="relative w-full">
              <Carousel
                classNames={classes}
                withIndicators
                height={250}
                nextControlIcon={
                  <IconArrowRight size={32} className="text-black bg-white p-1 rounded-full" />
                }
                previousControlIcon={
                  <IconArrowLeft size={32} className="text-black bg-white p-1 rounded-full" />
                }
                emblaOptions={{
                  loop: true,
                  dragFree: false,
                  align: 'center',
                }}
              >
                {p.img.map((url) => (
                  <Carousel.Slide key={url}>
                    <Image
                      src={url}
                      alt={`${p.name} screenshot`}
                      width={800}
                      height={250}
                      className="w-full h-[300px] object-cover rounded-md"
                    />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </div>
            <div className="pt-4 space-y-4">
              <div>
                <h2 className={`text-xl font-bold ${pressStart2P.className}`}>{p.name}</h2>
                <a
                  href={p.repo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-600 transition-colors"
                >
                  {content.projects.repository}
                </a>
              </div>
              <p className="text-sm mb-2">{p.description}</p>

              <p className="text-sm mt-2">{content.projects.tech}</p>
              <ul>
                {p.tec.map((tec) => (
                  <li
                    key={tec}
                    className="inline-block font-bold mr-2 p-2 border-2 border-gray-800 text-sm text-gray-400 transition-colors hover:bg-white hover:text-black rounded-lg"
                  >
                    {tec}
                  </li>
                ))}
              </ul>
            </div>
          </ContainerMotion>
        </div>
      ))}
    </Page>
  )
}
