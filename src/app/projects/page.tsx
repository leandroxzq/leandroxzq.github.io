'use client'

import ContainerMotion from '@/components/ContainerMotion'
import Page from '@/components/Page'
import { useLanguage } from '@/context/LanguageContext'
import { projects } from '@/data/projects'

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
        <div key={p.id} className="ml-2 mr-2 sm:ml-0 sm:mr-0">
          <ContainerMotion>
            <div className="w-full">
              <Carousel
                classNames={{
                  indicator:
                    'w-[18px] h-[8px] bg-indicator border-[1px] border-solid border-[rgb(0,0,0)] transition-[width] duration-[250ms] ease-in-out data-[active=true]:w-[40px]',
                }}
                withIndicators
                withControls={false}
                slideGap="md"
                height={300}
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
                      height={300}
                      className={`h-[300px] w-full object-center ${p.img.length > 1 ? 'cursor-grab' : ''}`}
                    />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </div>
            <div className="space-y-4 p-4 pt-4">
              <div className="flex items-center gap-2">
                <h2 className={`text-lg font-bold md:text-xl ${pressStart2P.className}`}>
                  {p.name}
                </h2>
              </div>
              <a
                href={p.repo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 underline transition-colors hover:text-blue-600 md:text-xs"
              >
                {content.projects.repository}
              </a>
              <p className="text-md mb-2 md:text-lg">{p.description}</p>

              <p className="mt-2 text-sm md:text-base">{content.projects.tech}</p>
              <ul className="flex flex-wrap gap-2">
                {p.tec.map((tec) => (
                  <li
                    key={tec}
                    className="inline-block rounded-lg border-2 border-gray-800 p-2 text-xs font-bold text-gray-400 transition-colors hover:bg-white hover:text-black md:text-sm"
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
